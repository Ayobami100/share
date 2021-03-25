<template>
  <v-toolbar flat class="mainHeader green pa-0 ma-0">
      <v-toolbar-title>ShareYaSpace</v-toolbar-title>
      
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only" v-if="!currentUser.firstname">
        <v-btn text :class="{ barActive: layout === 'home' }" @click="layout = 'home'"><v-icon color="white">mdi-home</v-icon><router-link to="/">Home</router-link></v-btn>
        <v-btn text :class="{ barActive: layout === 'about' }" @click="layout = 'about'"><v-icon color="white">mdi-information-variant</v-icon><router-link to="/about">About</router-link></v-btn>
        <v-btn text :class="{ barActive: layout === 'contact' }" @click="layout = 'contact'"><v-icon color="white">mdi-contacts</v-icon><router-link to="/contact">Contact</router-link></v-btn>
        
         <v-btn text :class="{ barActive: layout === 'register' }" @click="layout = 'register'"><v-icon color="white">mdi-book-check</v-icon><router-link to="/register">Register</router-link></v-btn>
          <v-btn text :class="{ barActive: layout === 'login' }" @click="layout = 'login'"><v-icon color="white">mdi-login</v-icon><router-link to="/login">Login</router-link></v-btn>
          <div class="ma-3">
            
            <v-btn rounded color="warning" ><v-icon color="white" label="Append inner" >mdi-signature-text</v-icon><router-link to="/spacecreate/new">Add your listings</router-link></v-btn>
          </div>
         
      </v-toolbar-items>

      <v-toolbar-items class="hidden-xs-only" v-if="currentUser.firstname">
        <v-btn >{{currentUser.firstname}}</v-btn>
        <v-btn @click="logoutUser"><v-icon color="white">mdi-home
          </v-icon><router-link to="#" >LogOut</router-link></v-btn>

      </v-toolbar-items>

      <div class="hidden-sm-and-up" v-if="!currentUser.firstname">
        <v-menu offset-y v-model="selectedItem" color="primary">
          <template v-slot:activator="{ on }">
            <v-app-bar-nav-icon v-on="on"></v-app-bar-nav-icon>
          </template>
          <v-list class="responsiveMenu">
            <v-list-item>
              <v-list-item-title><v-icon color="red">fab fa-home</v-icon><router-link to="/">Home</router-link></v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title><v-icon>fab fa-home</v-icon><router-link to="/about">About</router-link></v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title><v-icon>fab fa-home</v-icon><router-link to="/contact">Contact</router-link></v-list-item-title>
            </v-list-item>
             <v-list-item>
              <v-list-item-title><v-icon>fab fa-home</v-icon><router-link to="/register">Register</router-link></v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title><v-icon>fab fa-home</v-icon><router-link to="/login">Login</router-link></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>

      <div class="hidden-sm-and-up" v-if="currentUser.firstname">
        <v-menu offset-y v-model="selectedItem" color="primary">
          <template v-slot:activator="{ on }">
            <v-app-bar-nav-icon v-on="on"></v-app-bar-nav-icon>
          </template>
          <v-list class="responsiveMenu">
            <v-list-item>
              <v-list-item-title><v-icon color="red">fab fa-home</v-icon><router-link to="#" @click="logoutUser">Log Out</router-link></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-toolbar>
  
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "Header",
  
  data() {
    return{
      layout: "home",
       
    }
  },
computed:{
  ...mapState(['currentUser'])
},
  methods:{
   logoutUser(){
      // localStorage.removeItem('token');

      // this.$router.push('/');

      this.$store.dispatch("logoutUser")
    }
  }
};
</script>