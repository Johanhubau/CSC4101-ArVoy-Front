<template>

</template>

<script>
    export default {
        name: "Home",
        created() {
            this.$router.push({path: '/home/' + this.$store.getters["security/getInformation"].client_id})
        }
    }
</script>

<style scoped>

</style>
