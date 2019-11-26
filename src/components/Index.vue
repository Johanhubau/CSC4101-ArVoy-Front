<template>
  <div>
    <div class="container-fluid p-0 vh-100">
      <div class="parallax"></div>
      <div class="container">
        <h1 class="py-5" style="font-size: 4em;">
          RVoy
          <small class="text-muted">An escape into the World!</small>
        </h1>
      </div>
    </div>
    <div class="container p-0 vh-100">
      <div class="row h-100 align-items-center">
        <div class="col-lg justify-content-center">
          <h3 class="p-1">Choose</h3>
          <p class="py-3">With our simple design, you'll find many opportunities and homes that we're sure you'll
            love</p>
          <h3 class="p-1">Book</h3>
          <p class="py-3">Then you only have to book with our 2-min form which is easy and intuitive</p>
          <h3 class="p-1">Enjoy</h3>
          <p class="py-3">Travel to your destination and escape your daily life</p>
        </div>
        <div class="col-lg">
          <div class="form-container p-5">
            <form>
              <h3>Sign Up and start booking</h3>
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
              <div class="row">
                <div class="col">
                  <button class="btn btn-primary" @click="submit()">Submit</button>

              </div>
                <div class="col align-items-center">
                  <a href="/register/owner">Want to rent your room?</a>
                  <a href="/login">Already have an account?</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                //Form Data
                firstName: "",
                lastName: "",
                birthdate: "",
                email: "",
                password: "",
                c_password: "",

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
            },
            submit() {

            },
        }
    }
</script>

<style scoped>
  .parallax {
    /* The image used */
    background-image: url("../assets/img/landing.jpg");

    /* Full height */
    height: 67%;

    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .form-container {
    background-color: white;
    -webkit-box-shadow: 0px 0px 5px -2px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0px 0px 5px -2px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 0px 5px -2px rgba(0, 0, 0, 0.3);
  }

  .filler {
    height: 2000px;
  }
</style>
