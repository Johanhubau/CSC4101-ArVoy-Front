<template>
  <div>
    <nav class="px-5 py-3 navbar navbar-expand-lg navbar-dark bg-primary" v-bind:class=" { 'navbarOpen': show }" style="z-index: 2;">
      <router-link class="navbar-brand" to="/">RVoy</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
              v-on:click="toggleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav"
           v-bind:class="{ show: show }">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/reserve">Make a reservation</router-link>
          </li>
          <li class="nav-item" v-if="!isAuthenticated">
            <router-link class="nav-link" to="/login">Connect</router-link>
          </li>
          <li class="nav-item dropdown" v-else>
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Connected as {{ getDisplayName }}
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link class="dropdown-item" to="/home">Home</router-link>
              <div class="dropdown-divider"></div>
              <router-link class="dropdown-item" to="/logout">Logout</router-link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
    export default {
        name: "App",
        props: {
            msg: String
        },
        data() {
            return {
                show: true
            }
        },
        methods: {
            toggleNavbar() {
                this.show = !this.show;
            }
        },
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
