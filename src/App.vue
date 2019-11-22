<template>
  <div>
    <template-header v-if="userType === 'user'"></template-header>
    <admin-template-header v-if="userType === 'admin'"></admin-template-header>
    <div id="app">
      <router-view></router-view>
    </div>
    <template-footer v-if="userType === 'user'"></template-footer>
    <admin-template-footer v-if="userType === 'admin'"></admin-template-footer>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                userType: 'user' //This should be handled by some model or any other way
            }
        },
    }
</script>
