<template>
<v-content>
  <v-container>
    <v-div>
    <v-div class="" >
      <h1 class="display-1 ma-10">Nearby Places</h1>
    </v-div>
    
    <v-row  class="fill-height">
      <v-col v-for="nearby in nearbys" :key="nearby.id" cols="4" md="2" sm="2">
        <div>
<img :src="nearby.src"/>
        <v-col>
          <h3 class="font-weight-bold">{{nearby.name}}</h3>
          <p class="subtitle-1">{{nearby.Space}}</p>
          <p class="subtitle-2">{{nearby.description}}</p>
        </v-col>
        </div>
        
        
      </v-col>

    </v-row>

      
  </v-div>
  </v-container>
</v-content>




  <!-- <div class="team">
    
    <h1 class="subheading grey--text">Dashboard</h1>
    <v-content >
      
      <v-layout row wrap mx-n2>
        <v-flex sm6 xs12 md6 lg3>
          <v-card class="ma-1">
            <v-list-item>
              <v-list-item-avatar tile class="mt-n7">
                <v-sheet color="green" width="80" height="80" elevation="10">
                  <v-icon dark large>store</v-icon>
                </v-sheet>
              </v-list-item-avatar>
              <v-list-item-content>
                <div class="overline text-right">Article</div>
                <v-list-item-title class="headline mb-1 text-right"
                  >523614</v-list-item-title
                >
                <div><v-divider></v-divider></div>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <v-icon text class="ma-2">person</v-icon>
              <div class="overline">I</div>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex sm6 xs12 md6 lg3>
          <v-card class="ma-3">
            <v-list-item>
              <v-list-item-avatar tile class="mt-n7">
                <v-sheet color="#F44336" width="80" height="80" elevation="10">
                  <v-icon dark large>subscriptions</v-icon>
                </v-sheet>
              </v-list-item-avatar>
              <v-list-item-content>
                <div class="overline text-right">Abonné</div>
                <v-list-item-title class="headline mb-1 text-right"
                  >+700</v-list-item-title
                >
                <div><v-divider></v-divider></div>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <v-icon text class="ma-2">subscriptions</v-icon>
              <div class="overline">ShareYaSpace</div>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex sm6 xs12 md6 lg3>
          <v-card class="ma-3">
            <v-list-item>
              <v-list-item-avatar tile class="mt-n7">
                <v-sheet color="#03A9F4" width="80" height="80" elevation="10">
                  <v-icon dark large>add_shopping_cart</v-icon>
                </v-sheet>
              </v-list-item-avatar>
              <v-list-item-content>
                <div class="overline text-right">Shopping</div>
                <v-list-item-title class="headline mb-1 text-right"
                  >$34,245</v-list-item-title
                >
                <div><v-divider></v-divider></div>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <v-icon text class="ma-2">credit_card</v-icon>
              <div class="overline">VISA Card</div>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex sm6 xs12 md6 lg3>
          <v-card class="ma-3">
            <v-list-item>
              <v-list-item-avatar tile class="mt-n7">
                <v-sheet color="#FFC107" width="80" height="80" elevation="10">
                  <v-icon dark large>folder_shared</v-icon>
                </v-sheet>
              </v-list-item-avatar>
              <v-list-item-content>
                <div class="overline text-right">Folder shared</div>
                <v-list-item-title class="headline mb-1 text-right"
                  >1730</v-list-item-title
                >
                <div><v-divider></v-divider></div>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <v-icon text class="ma-2">folder</v-icon>
              <div class="overline">Prodect</div>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
          <v-card class="text-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="red lighten-2">
                <img :src="person.avatar" alt="" />
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn outlined color="orange">
                <v-icon small left>message</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-content>
  </div> -->
</template>

<script>

// import Navbar from "../../components/Dashboard/Navbar"

export default {


  name: "Userdashboard",

  data(){
    return{
      nearbys: this.$store.state.nearbys,

 team: [
      { name: "Iyad", role: "web developer", avatar: "/img1.png" },
      { name: "Reda", role: "Graphic designer", avatar: "/img2.png" },
      { name: "Zineb", role: "web developer", avatar: "/img3.png" },
      { name: "Hu TechGroup", role: "Desktop developer", avatar: "/img4.png" },
    
    ],
      user:null,
    };
  },

   components: {
    // Navbar,
  },
    
methods:{
  loginUser(user){
this.$store.dispatch('loginUser',user)
  }
},
  
  
};
</script>

<style scoped>
.dash{
  border: 1px black solid;
  height: 500px;
}
</style>
