<template>
    <div>
        <ul :key="index" v-for="(initiative, index) in initiatives">
            <InitiativePreview :initiative="initiative"/>
            <hr class="solid" style="width: 65%">

        </ul>
    </div>
</template>

<script>
    import InitiativePreview from "./InitiativePreview";

    export default {
        name: "InitiativesList",
        components: {InitiativePreview},
        props: {
            initiatives: {
                type: Array,
                required: true,
            }
        },
    }
</script>

<style scoped>
    ul {
        padding-inline-start: 0;
    }
</style>
