<template>
  <div>
    <profile-template :isPrivate="1"></profile-template>
    <div style="margin-right: 400px;">
      <div class="container p-5">
        <form class="px-5">
          <h3 class="pb-3">Add a region</h3>
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" placeholder="Enter Name"
                   v-model="name">
          </div>
          <div class="form-group">
            <label for="presentation">Presentation</label>
            <input type="text" class="form-control" id="presentation" placeholder="Enter Presentation"
                   v-model="presentation">
          </div>
          <div class="form-group">
            <label for="countryCode">ISO Country Code</label>
            <input type="text" class="form-control" id="countryCode" placeholder="Enter Country Code"
                   v-model="countryCode">
          </div>
          <div class="form-group">
            <div class="input-group mb-3">
              <div class="custom-file">
                <input type="file" class="custom-file-input" id="inputGroupFile02">
                <label class="custom-file-label" for="inputGroupFile02">Choose picture</label>
              </div>
              <div class="input-group-append">
                <span class="input-group-text" id="">Upload</span>
              </div>
            </div>
          </div>
          <button class="btn btn-primary" @click="submit()">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Add",
        data() {
            return {
                validated: false,
                //Form data
                name: "",
                presentation: "",
                countryCode: "",
            }
        },

        methods: {
            resetForm() {
                this.name = "";
                this.presentation = "";
                this.countryCode = "";
            },
            submit() {
                this.validated = true;
            },
        }
    }
</script>

<style scoped>

</style>
