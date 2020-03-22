import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import ApiService from "./common/api.service";

import routes from './routes';

Vue.config.productionTip = false;

Vue.use(VueRouter);
ApiService.init();

const router = new VueRouter({routes});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');