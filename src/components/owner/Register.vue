<template>
  <div class="container py-5">
    <transition name="fade" mode="out-in">
      <div v-if="!validated" key="1">
        <h3>Let's get started!</h3>
        <div class="form-container p-5">
          <form>
            <div class="row form-group">
              <div class="col">
                <label for="firstName">First Name</label>
                <input type="text" class="form-control" id="firstName" placeholder="Enter First name"
                       v-model="firstName">
              </div>
              <div class="col">
                <label for="lastName">Last Name</label>
                <input type="text" class="form-control" id="lastName" placeholder="Enter Last name"
                       v-model="lastName">
              </div>
            </div>
            <div class="form-group">
              <label for="email">Email address</label>
              <input type="email" class="form-control" id="email" aria-describedby="emailHelp"
                     placeholder="Enter email"
                     v-model="email">
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone
                else.</small>
            </div>
            <div class="form-group">
              <label for="password">Enter a password</label>
              <input type="password" class="form-control" id="password" placeholder=""
                     v-model="password">
            </div>
            <div class="form-group">
              <label for="c_password">Confirm your password</label>
              <input type="c_password" class="form-control" id="c_password" placeholder=""
                     v-model="c_password">
            </div>
            <div class="form-group">
              <label for="telephone">Telephone</label>
              <input type="text" class="form-control" id="telephone" aria-describedby="telHelp"
                     placeholder="Enter telephone number"
                     v-model="telephone">
              <small id="telHelp" class="form-text text-muted">Your telephone number we'll be given to the owner of
                the listing your trying to rent.</small>
            </div>
            <div class="form-group">
              <label for="address">Address</label>
              <input type="text" class="form-control" id="address" placeholder="Enter address"
                     v-model="address">
            </div>
            <div class="form-group">
              <label for="countryCode">Country</label>
              <input type="text" class="form-control" id="countryCode" aria-describedby="countryCodeHelp"
                     placeholder="Enter country code (E.g FR)"
                     v-model="countryCode">
              <small id="countryCodeHelp" class="form-text text-muted">If you don't know your country code you can
                find it <a href="https://en.wikipedia.org/wiki/ISO_3166-1" target="_blank">here</a></small>
            </div>
            <div class="row">
              <div class="col">
                <button class="btn btn-primary" @click="submit()">Submit</button>
              </div>
              <div class="col align-items-center">
                <p>Already have an account? <a href="/login">Login</a></p>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div v-else class="col" key="2">
        <div class="justify-content-center text-center">
          <h3 class="p-3">Thank you!</h3>
          <p class="my-1">An admin is going to review your application.</p>
          <p class="my-1">You'll be notified by email when your account has been activated.</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
    export default {
        name: "Register",
        data() {
            return {
                validated: false,
                //Form data
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                c_password: "",
                telephone: "",
                address: "",
                countryCode: "",
            }
        },

        methods: {
            resetForm() {
                this.firstName = "";
                this.lastName = "";
                this.email = "";
                this.password = "";
                this.c_password = "";
                this.telephone = "";
                this.address = "";
                this.countryCode = "";
            },
            submit() {
              this.validated = true;
            },
        }
    }
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    opacity: 0;
  }
</style>
