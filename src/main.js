import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'
import store from "./store";
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';
import Register from './views/Register';
import Login from './views/Login';
import UserDashboard from './views/dashboard/UserDashboard';
import NotFound from './views/NotFound';
import Vuex from "vuex";
import Bed from "./views/Bed.vue";
import Business from "./views/Business.vue";
import House from "./views/House.vue";
import Open from "./views/Open.vue";
import VideoWatch from "./views/VideoWatch.vue";
import Success from "./views/Success"
import SpaceCreate from "./views/SpaceCreate"
import './views/axios'

Vue.use(Vuex);
Vue.config.productionTip = false;
Vue.config.devtools = false;

Vue.use(VueRouter)
// Vue.use(axios)

// router.start(App,'body');

import './scss/main.scss';

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/Register', component: Register },
    { path: '/Login', component: Login },
    { path: '/UserDashboard', component: UserDashboard },
    { path: '*', component: NotFound },

    {path: "/bed/:id",
    name: "bed-watch",
    component: VideoWatch,
    params: true},

    {path: "/open/:id",
    name: "open-watch",
    component: VideoWatch,
    params: true},

    {path: "/house/:id",
    name: "house-watch",
    component: VideoWatch,
    params: true},

    {path: "/business/:id",
    name: "business-watch",
    component: VideoWatch,
    params: true},
   

    {path: "/bed",
    name: "bed",
    component: Bed,
    },

    {path: "/spacecreate/new",
    name: "spacecreate",
    component: SpaceCreate,
    },

    {path: "/house",
    name: "house",
    component: House,
    },

    
    {path: "/open",
    name: "open",
    component: Open,
    },

    {path: "/success",
    name: "success",
    component: Success,
    },

    {path: "/business",
    name: "business",
    component: Business,
    },
    
  ],
  mode: 'history'
})

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
