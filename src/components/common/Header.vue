<template>
  <v-toolbar flat class="mainHeader green pa-0 ma-0">
      <v-toolbar-title ><v-btn text to="/" class="title white--text">ShareYaSpace</v-btn></v-toolbar-title>
      
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-xs-only" v-if="!currentUser.firstname">
          <v-btn text to="/" color="white"><v-icon >mdi-home</v-icon>Home</v-btn>
          <v-btn text to="/about" color="white"><v-icon >mdi-information-variant</v-icon>About</v-btn>
          <v-btn text to="/contact" color="white"><v-icon >mdi-contacts</v-icon>Contact</v-btn>
          
          
            <v-btn text to="/login" color="white"><v-icon >mdi-login</v-icon>Login</v-btn>
            <v-btn color="warning" to="/register"><v-icon >mdi-book-check</v-icon>Register</v-btn>
            <!-- <div class="ma-3">
              
              <v-btn rounded color="warning" ><v-icon color="white" label="Append inner" >mdi-signature-text</v-icon><router-link to="/spacecreate/new">Add your listings</router-link></v-btn>
            </div> -->
          
      </v-toolbar-items>

      <v-toolbar-items class="hidden-xs-only" v-if="currentUser.firstname">
        
        <div class="d-flex gap">
         <div class="col">
            <v-menu offset-y>
              <template v-slot:activator="{ on }">
                
                  <v-app-bar-nav-icon v-on="on" color="white"></v-app-bar-nav-icon>
              
                
              </template>
              <v-list class="responsiveMenu">
                <v-list-item>
                  <v-list-item-title><v-icon color="red">fab fa-home</v-icon><router-link to="#" >Inbox</router-link></v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title><v-icon color="red">fab fa-home</v-icon><router-link to="#">Notification</router-link></v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title><v-icon color="red">fab fa-home</v-icon><router-link to="#">Favourites</router-link></v-list-item-title>
                </v-list-item>
                
                  <v-divider></v-divider>
                  <v-list-item>
                  <v-list-item-title><v-icon color="red">fab fa-home</v-icon><router-link to="#">Host your home</router-link></v-list-item-title>
                  </v-list-item>
                  <v-divider></v-divider>
                  <v-list-item>
                  <v-list-item-title><v-icon color="red">fab fa-home</v-icon><router-link to="#" >Profile</router-link></v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                  <v-list-item-title><v-icon color="red">fab fa-home</v-icon><router-link to="#" >LogOut</router-link></v-list-item-title>
                  </v-list-item>
              </v-list>
              
              </v-menu>
          </div> 

          <div class="col"><img src="../../assets/images/img1.jpg" class="img-profile"/>
          </div>

          <div class="col"><h3 class="white--text">{{currentUser.firstname}}</h3>
          </div>

        </div>
       
        
         

      </v-toolbar-items>

      <div class="hidden-sm-and-up" v-if="!currentUser.firstname">
        <v-menu offset-y color="primary">
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
        
       <div class="d-flex gap">
         <div class="col">
            <v-menu offset-y>
              <template v-slot:activator="{ on }">
                
                  <v-app-bar-nav-icon v-on="on" color="white"></v-app-bar-nav-icon>
              
                
              </template>
              <v-list class="responsiveMenu">
                <v-list-item>
                  <v-list-item-title><v-icon color="red">fab fa-home</v-icon><router-link to="#" >Inbox</router-link></v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title><v-icon color="red">fab fa-home</v-icon><router-link to="#" >Notification</router-link></v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title><v-icon color="red">fab fa-home</v-icon><router-link to="#">Favourites</router-link></v-list-item-title>
                </v-list-item>
                
                  <v-divider></v-divider>
                  <v-list-item>
                  <v-list-item-title><v-icon color="red">fab fa-home</v-icon><router-link to="#" >Host your home</router-link></v-list-item-title>
                  </v-list-item>
                  <v-divider></v-divider>
                  <v-list-item>
                  <v-list-item-title><v-icon color="red">fab fa-home</v-icon><router-link to="#" >Profile</router-link></v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                  <v-list-item-title><v-icon color="red">fab fa-home</v-icon><router-link to="#" >LogOut</router-link></v-list-item-title>
                  </v-list-item>
              </v-list>
              
              </v-menu>
          </div> 

          <div class="col"><img src="../../assets/images/img1.jpg" class="img-profile"/>
          </div>

          <div class="col"><h3 class="white--text">{{currentUser.firstname}}</h3>
          </div>

        </div>
    
          
      </div>
  </v-toolbar>

  <!-- <v-toolbar>
    <v-toolbar-title>ShareYaSpace</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn to="/">Home</v-btn>
      <v-btn to="/register">Register</v-btn>
    </v-toolbar-items>
  </v-toolbar>
   -->
</template>



<style scoped>
  .img-profile{
    border-radius: 50%;
    height: 50px;
    width: 50px;
  }
  .bpl{
    border-radius: 2px;
    border: 1px white solid;
  }
</style>
<script>
import { mapState } from "vuex";

export default {
  name: "Header",

  data() {
    return {
      layout: "home",

      value: 1,
      active: false,
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  methods: {
    // ...mapActions([
    //   logoutUser
    // ]),
    // logoutUser() {
    //   // localStorage.removeItem('token');

    //   // this.$router.push('/');
       
    //   // this.$store.auth.actions.dispatch("logoutUser");
    // },
  },
};
</script>
