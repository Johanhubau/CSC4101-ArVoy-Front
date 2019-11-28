<template>

</template>

<script>
    export default {
        name: "Display",
        created() {
            if (this.$store.getters["security/getInformation"].owner_id != null)
                this.$router.push({path: '/owners/' + this.$store.getters["security/getInformation"].owner_id})
        }
    }
</script>

<style scoped>

</style>
