<template>
    <div class="container p-5">
      <form>
        <div class="form-group">
          <label for="firstName">First Name</label>
          <input type="text" class="form-control" id="firstName" placeholder="Enter First name"
                 v-model="firstName">
        </div>
        <div class="form-group">
          <label for="lastName">Last Name</label>
          <input type="text" class="form-control" id="lastName" placeholder="Enter Last name" v-model="lastName">
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
          <button class="btn btn-primary" @click="submit()">Submit</button>
          <a class="btn btn-secondary" href="/home">Back</a>
        </div>
      </form>
    </div>
</template>

<script>
    export default {
        name: "Settings",
        data () {
            return {
                firstName: '',
                lastName: "",
                email: "",
                telephone: "",
                address: "",
                countryCode: '',
                birthdate: '',
            }
        },

        created(){
            if (this.$store.getters["security/getInformation"].client_id != this.$route.params.id){
                this.$router.push('/')
            }
            if (this.$store.getters["security/isAuthenticated"]) {
                this.firstName = this.$store.getters["security/getInformation"].firstname;
                this.lastName = this.$store.getters["security/getInformation"].lastname;
                this.birthdate = this.$store.getters["security/getInformation"].birthdate;
                this.email = this.$store.getters["security/getInformation"].email;
                this.telephone = this.$store.getters["security/getInformation"].telephone;
                this.address = this.$store.getters["security/getInformation"].address;
                this.countryCode = this.$store.getters["security/getInformation"].country;
            }
        },

        methods: {
            submit () {

            }
        }
    }
</script>

<style scoped>

</style>
