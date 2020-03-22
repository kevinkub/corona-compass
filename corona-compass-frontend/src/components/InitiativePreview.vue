<template>
    <router-link to="/initiative" class="button">Zur Initiative</router-link>
</template>

<script>
    export default {
        name: "InitiativePreview",
        props: {
            initiative: { type: Object, required: false }
        },
    }
</script>

<style scoped>

</style>