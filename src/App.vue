<template>
  <v-app>
    <!-- <v-app-bar flat max-height="65"> -->
      <Header />
     
    <!-- </v-app-bar> -->
      <!-- <h1>{{this.$route.params.id}}</h1> -->
    <router-view ></router-view>

    <v-footer>
      <Footer />
    </v-footer>

    
  </v-app>
</template>

<script>
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";


export default {
  name: "App",

  components: {
    Header,
    Footer,
  },

  data(){
    return{
    user: null,

  
  }
  },
     mounted(){
       this.$store.auth.dispatch('loadUsers')
     }
  

  
};
</script>
