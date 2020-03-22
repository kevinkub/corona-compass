<template>
    <div>
        <InitiativePreview
                v-for="(initiative, index) in initiatives" :key="index"
                :initiative="initiative"
        />
    </div>
</template>

<script>
    import InitiativePreview from "./InitiativePreview";
    import {FETCH_RESULT} from "../store/initiatives.module"

    export default {
        name: "InitiativesList",
        components: {InitiativePreview},
        methods: {
            fetchInitiatives() {
                this.$store.dispatch(FETCH_RESULT)
            }
        },
        mounted() {
            this.fetchInitiatives();
        },
    }
</script>

<style scoped>

</style>