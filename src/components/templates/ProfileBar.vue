<template>
  <div class="container">
    <div class="profile-container">
      <div class="picture p-4">
        <img class="profile" src="" alt="Test">
      </div>
      <div class="text-center">
        <h2 class="pb-3">Lisa Turner</h2>
        <div class="text-right mr-4 p-4">
          <p class="my-1">42 Years Old</p>
          <p class="my-1">(+33) 6 11 22 33 44</p>
          <p class="my-1">lisa.turner@exemple.com</p>
          <p class="my-1">Unknown address</p>
        </div>
      </div>
      <div class="text-right mr-4 pt-2">
        <a class="py-1 nav-link" href="">Account settings</a>
        <a class="py-1 nav-link" href="">Logout</a>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ProfileBar"
    }
</script>

<style scoped>
  .profile-container {
    max-width: 33%;
    width: 400px;
    min-width: 300px;
    position: fixed;
    right: 0;
    height: 100%;
    -webkit-box-shadow: -2px 0px 5px -2px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: -2px 0px 5px -2px rgba(0, 0, 0, 0.3);
    box-shadow: -2px 0px 5px -2px rgba(0, 0, 0, 0.3);
  }

  .picture {
    width: 100%;
    min-height: 150px
  }

  img.profile{
    border-radius: 50%;
  }
</style>
