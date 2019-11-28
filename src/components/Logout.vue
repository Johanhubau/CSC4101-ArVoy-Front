<template>
</template>

<script>
    export default {
        name: "Logout",
        created() {
            this.$store.dispatch('security/logout');
            this.$router.push({path: "/"});
        }
    }
</script>
