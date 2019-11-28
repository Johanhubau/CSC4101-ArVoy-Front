<template>

</template>

<script>
    export default {
        name: "Home",
        created() {
            this.$router.push({path: '/home/31'})
            //TODO Get the authenticated user and navigate to his home if client, if not to '/'
        }
    }
</script>

<style scoped>

</style>
