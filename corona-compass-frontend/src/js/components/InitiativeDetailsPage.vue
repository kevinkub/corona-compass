<template>
  <section class="mt-5">
    <div class="container" v-if="forHelpee">
      <a @click="$router.go(-1)" class="btn btn-dark mb-3">Zurück</a>
      <h2>Hier bekommst du Hilfe.</h2>
      <div class="result-list mt-2">
          <div class="result-item">
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
      <a @click="$router.go(-1)" class="btn btn-dark mb-3">Zurück</a>
      <h2>Hier kannst du tatkräftig unterstützen.</h2>
      <div class="result-list mt-2">
          <div class="result-item">
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
</template>

<script>
export default {
  'props': ['initiative', 'forHelpee', 'forHelper']
};
</script>

<style scoped>
</style>
