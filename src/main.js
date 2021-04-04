import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from "./router";
import store from "./store";

import Vuex from "vuex";
import './views/axios'




Vue.use(Vuex);
Vue.config.productionTip = false;


// Vue.use(axios)

// router.start(App,'body');

import './scss/main.scss';


new Vue({
  router,
  vuetify,
  store,
  
  render: h => h(App)
}).$mount('#app')
