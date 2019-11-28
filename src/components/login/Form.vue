<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card card-signin my-5">
          <div class="card-body">
            <h5 class="card-title text-center">Sign In</h5>
            <form class="form-signin" v-on:submit.prevent>
              <div class="form-group">
                <label for="inputEmail">Email address</label>
                <input
                  v-model="login"
                  type="email"
                  class="form-control"
                  id="inputEmail"
                required autofocus>
              </div>

              <div class="form-group">
                <label for="inputPassword">Password</label>
                <input
                  v-model="password"
                  type="password"
                  class="form-control"
                  id="inputPassword"
                  required>
              </div>

              <button
                :disabled="login.length === 0 || password.length === 0 || isLoading"
                type="submit"
                class="btn btn-primary btn-block text-uppercase"
                @click="performLogin()"
                @submit=""
              >Sign in</button>
            </form>
          </div>
        </div>
        <div
          v-if="isLoading"
        >
          <div
            class="alert alert-primary"
            role="alert"
          >
            Loading...
          </div>
        </div>
        <div
          v-else-if="hasError"
        >
          <div
            class="alert alert-danger"
            role="alert"
          >
            {{ error }}
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                login: "",
                password: ""
            };
        },
        computed: {
            isLoading() {
                return this.$store.getters["security/isLoading"];
            },
            hasError() {
                return this.$store.getters["security/hasError"];
            },
            error() {
                return this.$store.getters["security/error"];
            }
        },
        created() {
            let redirect = this.$route.query.redirect;

            if (this.$store.getters["security/isAuthenticated"]) {
                if (typeof redirect !== "undefined") {
                    this.$router.push({path: redirect});
                } else {
                    this.$router.push({path: "/home"});
                }
            }
        },
        methods: {
            async performLogin() {
                let payload = {login: this.$data.login, password: this.$data.password},
                    redirect = this.$route.query.redirect;

                await this.$store.dispatch("security/login", payload);
                if (!this.$store.getters["security/hasError"]) {
                    if (typeof redirect !== "undefined") {
                        this.$router.push({path: redirect});
                    } else {
                        this.$router.push({path: "/"});
                    }
                }
            }
        }
    }
</script>
