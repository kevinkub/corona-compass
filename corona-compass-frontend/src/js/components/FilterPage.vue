<template>
    <div>
        <section class="header-search">
            <div class="container">
                <div class="card">
                    <div class="card-body">
                        <h1>Helfen und Hilfe finden.</h1>
                        <div class="header-form">
                            <input class="form-control" type="text" placeholder="Gib hier deine Postleitzahl ein um lokale Angebote zu sehen." v-model="zip">
                            <div class="dropdown">
                                <button v-if="forHelpee" class="btn btn-lg btn-primary dropdown-toggle" type="button" id="dropdownMenuButton"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="fa fa-search"></i> Hilfe suchen
                                    <span class="toggle-icon">
                                        <i class="fa fa-chevron-down"></i>
                                    </span>
                                </button>
                                <button v-if="forHelper" class="btn btn-lg btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="fa fa-hand-holding-heart"></i> Hilfe anbieten
                                    <span class="toggle-icon">
                                        <i class="fa fa-chevron-down"></i>
                                    </span>
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a v-if="forHelpee" to="/hilfe-anbieten" class="btn btn-lg btn-secondary">
                                        <i class="fa fa-hand-holding-heart"></i> Hilfe anbieten
                                    </a>
                                    <a v-if="forHelper" to="/hilfe-suchen" class="btn btn-lg btn-secondary">
                                        <i class="fa fa-search"></i> Hilfe suchen
                                    </a>
                                    <a to="/initiative-eintragen" class="btn btn-lg btn-dark">
                                        <i class="fa fa-heart"></i> Initiative einreichen
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="results">
            <div class="container" v-if="forHelpee">
                <h2>Hier bekommst du Hilfe.</h2>
                <div class="result-list">
                    <div class="result-item" v-for="initiative in initiatives" v-bind:key="initiative.slug">
                        <div class="result-logo" v-if="initiative.images && initiative.images.length > 0">
                            <img :src="initiative.images[0].url" :alt="initiative.images[0].filename" class="img-fluid">
                        </div>
                        <div class="result-header">
                            <h3>{{ initiative.name }}</h3>
                            <div class="badges">
                                <span class="badge badge-primary" v-if="initiative.zips.length">Lokales Angebot</span>
                                <span class="badge badge-secondary" v-if="initiative.typeOfCostForHelpees">{{ initiative.typeOfCostForHelpees }}</span>
                            </div>
                        </div>
                        <div class="result-body">
                            <p>{{ initiative.descriptionShort }}</p>
                            <div class="buttons">
                                <router-link :to="{ name: 'helpeeDetail', params: { slug: initiative.slug } }" class="btn btn-sm btn-secondary mr-1">
                                    <i class="fa fa-info-circle"></i> Mehr dazu
                                </router-link>

                                <a v-if="initiative.contactPhone" :href="'tel:' + initiative.contactPhone" class="btn btn-sm btn-dark mr-1">
                                    <i class="fa fa-phone"></i> Anrufen
                                </a>

                                <a v-if="initiative.contactURL" :href="initiative.contactURL" class="btn btn-sm btn-dark mr-1">
                                    <i class="fa fa-external-link"></i> Webseite aufrufen
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="container" v-if="forHelper">
                <h2>Hier kannst du tatkräftig unterstützen.</h2>
                <div class="result-list">
                    <div class="result-item" v-for="initiative in initiatives" v-bind:key="initiative.slug">
                        <div class="result-logo" v-if="initiative.images && initiative.images.length > 0">
                            <img :src="initiative.images[0].url" :alt="initiative.images[0].filename" class="img-fluid">
                        </div>
                        <div class="result-header">
                            <h3>{{ initiative.name }}</h3>
                            <div class="badges">
                                <span class="badge badge-primary" v-if="initiative.zips.length">Lokales Angebot</span>
                                <span class="badge badge-secondary" v-if="initiative.typeOfProfitForHelpers">{{ initiative.typeOfProfitForHelpers }}</span>
                            </div>
                        </div>
                        <div class="result-body">
                            <p>{{ initiative.descriptionShort }}</p>
                            <div class="buttons">
                                <router-link :to="{ name: 'helperDetail', params: { slug: initiative.slug } }" class="btn btn-sm btn-secondary mr-1">
                                    <i class="fa fa-info-circle"></i> Mehr dazu
                                </router-link>

                                <a v-if="initiative.contactPhone" :href="'tel:' + initiative.contactPhone" class="btn btn-sm btn-dark mr-1">
                                    <i class="fa fa-phone"></i> Anrufen
                                </a>

                                <a v-if="initiative.contactURL" :href="initiative.contactURL" class="btn btn-sm btn-dark mr-1">
                                    <i class="fa fa-external-link"></i> Webseite aufrufen
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    </div>
</template>

<script>
export default {
    props: ['db', 'forHelpee', 'forHelper'],
    data: function() {
        return { 'zip': '' };
    },
    computed: {
        initiatives: function() {
            let locals = [];
            if(this.zip) {
                locals = this.db.onlyForZip(this.zip).get();
            }
            let globals = this.db.onlyForGlobal().get();
            return [...locals, ...globals];
        }
    }
};
</script>

<style scoped>
</style>
