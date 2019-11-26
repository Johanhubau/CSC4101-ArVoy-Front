<template>
  <div class="container py-5">
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
          <label for="birthdate">Birthdate</label>
          <input type="text" class="form-control" id="birthdate" aria-describedby="birthdateHelp"
                 placeholder="Enter birthdate"
                 v-model="birthdate">
          <small id="birthdateHelp" class="form-text text-muted">Please input as DD/MM/YYYY</small>
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
                birthdate: "",
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
                this.birthdate = "";
                this.email = "";
                this.password = "";
                this.c_password = "";
                this.telephone = "";
                this.address = "";
                this.countryCode = "";
            },
            submit() {

            },
        }
    }
</script>

<style scoped>

</style>
