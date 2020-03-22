<template>
    <div class="initiative-item">
        <h5 class="font-weight-bolder" style="color: #434343">{{initiative.name}}<span class="badge badge-secondary m-1"
                                                                                       v-if="initiative.zips.includes(1234)">Lokales Angebot</span>
        </h5> <!-- TODO use zipcode input for lokales angebot display condition -->
        <p class="text-muted" v-if="initiative.degreeOfSocialInteraction === 'Gering'">Geringer Sozialer Kontakt</p>
        <p class="text-muted" v-if="initiative.degreeOfSocialInteraction === 'Mittel'">Mittlerer Sozialer Kontakt</p>
        <p class="text-muted" v-if="initiative.degreeOfSocialInteraction === 'Hoch'">Starker Sozialer Kontakt</p>

        <p>
            {{ initiative.description }}
        </p>

        <div class="badges">
            <div class="badge badge-gray">
                <i class="fas fa-heart function-button"></i>
            </div>
            <div class="badge badge-gray">
                <i class="fas fa-briefcase function-button"></i>
            </div>
        </div>
        <div>
            <router-link class="btn detail-button" to="/initiative">
                <span aria-hidden="true" class="fas fa-info-circle"></span>
                Mehr dazu
            </router-link>
            <a :href="`tel:+${ 1234 }`"
               class="btn call-button"
               v-if="initiative.communicationTypes.includes('Telefon')"> <!-- TODO add phone number -->
                <span aria-hidden="true" class="fas fa-phone"></span>
                Anrufen
            </a>
        </div>

    </div>
</template>

<script>
    export default {
        name: "InitiativePreview",
        props: {
            initiative: {type: Object, required: false}
        },
    }
</script>

<style lang="scss" scoped>
    .initiative-item {
        margin-top: 60px;
        margin-bottom: 60px;
    }

    .detail-button {
        color: #F5F5F5;
        margin-top: 12px;
        margin-right: 16px;
        background: #110133;
    }

    .call-button {
        color: #F5F5F5;
        margin-top: 12px;
        margin-right: 16px;
        background: #84868A;
    }

    .badges {
        display: flex;

        .badge {
            margin-right: 0.9rem;
        }
    }

    .badge {
        font-size: 0.9rem;
        line-height: 100%;
        border-radius: 10px;
        padding: 0.4em .7em;

        &.badge-gray {
            background-color: #919191;
            color: #fff;
        }
    }
</style>
