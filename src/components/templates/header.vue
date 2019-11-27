<template>
  <div>
    <nav class="px-5 py-3 navbar navbar-expand-lg navbar-dark bg-primary" style="z-index: 2;">
      <router-link class="navbar-brand" to="/">RVoy</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/reserve">Make a reservation</router-link>
          </li>
          <li class="nav-item" v-if="!isAuthenticated">
            <router-link class="nav-link" to="/login">Connect</router-link>
          </li>
        </ul>
        <span class="navbar-text" v-if="isAuthenticated">Connected as {{ getDisplayName }}</span>
      </div>
    </nav>
  </div>
</template>

<script>
    export default {
        name: "App",
        computed: {
            getDisplayName() {
                if (this.$store.getters["security/hasInformation"])
                  return this.$store.getters["security/getDisplayName"];
                else return "Unknown";
            },
            isAuthenticated() {
                return this.$store.getters["security/isAuthenticated"]
            },
            isAdmin() {
                return this.$store.getters["security/isAuthenticated"] && this.$store.getters["security/hasRole"]("ROLE_SUPERADMIN");
            }
        },
    }
</script>
