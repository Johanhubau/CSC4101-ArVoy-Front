<template>
  <div>
    <template-header v-if="!isAdmin"></template-header>
    <admin-template-header v-if="isAdmin"></admin-template-header>
    <div id="app">
      <router-view></router-view>
    </div>
    <template-footer v-if="!isAdmin"></template-footer>
    <admin-template-footer v-if="isAdmin"></admin-template-footer>
  </div>
</template>

<script>
    import axios from "axios";
    import SecurityAPI from "./api/security";
    import NeedsLoginError from "./error/NeedsLoginError";
    export default {
        name: "App",
        computed: {
            isAuthenticated() {
                return this.$store.getters["security/isAuthenticated"]
            },
            isAdmin() {
                return this.$store.getters["security/isAuthenticated"] && this.$store.getters["security/hasRole"]("ROLE_SUPERADMIN");
            }
        },
        async created() {
            if (!this.$store.getters["security/isInitiated"]) {
                try {
                  this.$store.dispatch("security/onRefresh", await SecurityAPI.checkLogin());
                } catch (e) {
                    if (e instanceof NeedsLoginError && this.$router.currentRoute.path !== "/login") await this.$router.push({path: "/login"});
                }
            }

            axios.interceptors.response.use(undefined, (err) => {
                return new Promise(() => {
                    if (err.response.status === 401) {
                        this.$router.push({path: "/login"})
                    }
                    throw err;
                });
            });
        },
    }
</script>
