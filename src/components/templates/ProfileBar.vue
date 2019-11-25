<template>
    <div class="profile-container">
      <div class="picture p-4">
        <img class="profile" src="" alt="Test">
      </div>
      <div class="text-center">
        <h2 class="pb-3">Lisa Turner</h2>
        <div class="text-right mr-4 p-4">
          <p class="my-1">42 Years Old</p>
          <p v-if="isPrivate" class="my-1">(+33) 6 11 22 33 44</p>
          <p v-if="isPrivate" class="my-1">lisa.turner@exemple.com</p>
          <p v-if="isPrivate" class="my-1">Unknown address</p>
        </div>
      </div>
      <div class="text-right mr-4 pt-2">
        <a v-if="!isPrivate" class="py-1 nav-link" href="">See home listings</a>
        <a v-if="isPrivate" class="py-1 nav-link" href="">Account settings</a>
        <a v-if="isPrivate" class="py-1 nav-link" href="">Logout</a>
      </div>
    </div>
</template>

<script>
    export default {
        name: "ProfileBar",
        props: [
            'isPrivate',
        ],
    }
</script>

<style scoped>
  .profile-container {
    background-color: white;
    z-index: 1;
    width: 400px;
    position: fixed;
    right: 0;
    left: auto;
    flex-flow: column nowrap;
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
