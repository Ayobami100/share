import Vue from "vue";
import VueRouter from "vue-router";

import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';
import Register from './views/Register';
import Login from './views/Login';
import UserDashboard from './views/dashboard/UserDashboard';
import NotFound from './views/NotFound';
import Bed from "./views/Bed.vue";
import Business from "./views/Business.vue";
import House from "./views/House.vue";
import Open from "./views/Open.vue";
import SingleBed from "./views/SingleBed.vue";
import SingleBusiness from "./views/SingleBusiness.vue";
import SingleHouse from "./views/SingleHouse.vue";
import SingleOpen from "./views/SingleOpen.vue";
import Success from "./views/Success"
import SpaceCreate from "./views/SpaceCreate"
import { publicPath } from '../vue.config'

Vue.use(VueRouter);


export default new VueRouter({
    mode: 'history',
    base: publicPath,
    routes: [
      { path: '/', component: Home },
      { path: '/about', component: About },
      { path: '/contact', component: Contact },
      { path: '/Register', component: Register },
      { path: '/Login', component: Login },
      { path: '/UserDashboard', component: UserDashboard },
      { path: '*', component: NotFound },
  
      {path: "/bed/:id",
      name: "single-bed",
      component: SingleBed,
      params: true},
     
      {path: "/open/:id",
      name: "single-open",
      component: SingleOpen,
      params: true},
     
      {path: "/business/:id",
      name: "single-business",
      component: SingleBusiness,
      params: true},
     
      {path: "/house/:id",
      name: "single-house",
      component: SingleHouse,
      params: true},
     
      // {path: "/open/:id",
      // name: "open-watch",
      // component: VideoWatch,
      // params: true},
  
      // {path: "/house/:id",
      // name: "house-watch",
      // component: VideoWatch,
      // params: true},
  
      // {path: "/business/:id",
      // name: "business-watch",
      // component: VideoWatch,
      // params: true},
     
  
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
    
  })
  

