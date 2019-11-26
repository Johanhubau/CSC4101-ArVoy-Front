<template>
  <div>
    <profile-template :isPrivate="1"></profile-template>
    <div style="margin-right: 400px;">
      <div class="container p-5">
        <form class="px-5">
          <h3 class="pb-3">Add a room</h3>
          <div class="form-group">
            <label for="summary">Summary</label>
            <input type="text" class="form-control" id="summary" placeholder="Enter Summary"
                   v-model="summary">
          </div>
          <div class="form-group">
            <label for="description">Description</label>
            <input type="text" class="form-control" id="description" placeholder="Enter Description"
                   v-model="description">
          </div>
          <div class="form-group">
            <label for="address">Address</label>
            <input type="text" class="form-control" id="address" placeholder="Enter Address"
                   v-model="address">
          </div>
          <div class="form-group">
            <label for="superficy">Superficy</label>
            <input type="text" class="form-control" id="superficy" placeholder="Enter Superficy"
                   v-model="superficy">
          </div>
          <div class="form-group">
            <label for="price">Price</label>
            <input type="text" class="form-control" id="price" aria-describedby="priceHelp" placeholder="Enter Price"
                   v-model="price">
            <small id="priceHelp" class="form-text text-muted">Listings of this size are usually price around {{ superficy * 0.6 }}€</small>
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
                summary: "",
                description: "",
                superficy: "",
                price: "",
                address: "",
            }
        },

        methods: {
            resetForm() {
                this.summary = "";
                this.description = "";
                this.superficy = "";
                this.price = "";
                this.address = "";
            },
            submit() {
                this.validated = true;
            },
        }
    }
</script>

<style scoped>

</style>
