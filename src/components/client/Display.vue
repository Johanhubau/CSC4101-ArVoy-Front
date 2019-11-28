<template>
  <div style="margin-right: 400px;">
    <profile-template
      :isPrivate="0"
      :type="'client'">
    </profile-template>
<!--    TODO add comments that client has given-->
  </div>
</template>

<script>
    export default {
        name: "Dashboard",
        data () {
            return {
                isPrivate: 0,
            }
        },
        created () {
            if (this.$store.getters["security/getInformation"].client_id != this.$route.params.id){
                this.isPrivate = 0;
            }else{
                this.isPrivate = 1;
            }
        }
    }
</script>

<style scoped>

</style>
