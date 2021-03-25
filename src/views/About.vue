<template>
  <v-content>
    <div class="staticHero">
      <v-img src="../assets/images/img13.jpg">
        <v-row align="end" class="lightbox white--text pa-2 fill-height">
          <v-col>
            <v-container>
              <div class="headline"></div>
            </v-container>
          </v-col>
        </v-row>
      </v-img>
    </div>
    <!-- <div class="block">
      <v-container>
        <p>Ea pri vitae antiopam theophrastus, ut sit erat putent eruditi. Qui at mutat adversarium.
           ]Postulant delicatissimi ei qui, an nonumy dolorem nam. Cu philosophia instructior pri,
            nec cu mutat homero saperet, cu paulo ridens legendos has. Cu veri oportere pri, ad integre numquam iudicabit mel. Nec ea ferri iudicabit dissentiet. Ex solet melius omittantur his, in gloriatur vulputate mel. Ad nostro repudiandae ius, est amet molestie te. No est modus sensibus volutpat, et putent dissentias has, et sea eirmod vivendum. Paulo lucilius expetenda sea in, cu nam mazim sanctus ponderum. Te nam mundi corpora, dicat dolore debitis ius in. Indoctum adversarium definitionem an pro, an eam vidit utinam detracto.</p>
      </v-container>
    </div> -->
    <div class="block">
      <v-container>
        <v-row class="mb-20">
          <v-col class="text-center">
            <h2 class="display-2">How we work</h2>
          </v-col>
          
        </v-row>
        
        <v-row class="mt-20">
          <v-col class="d-flex child-flex" cols="12" sm="6">
            <v-img class="img-style"
          src="https://picsum.photos/510/300?random"
          aspect-ratio="1.7"
        ></v-img>
          </v-col>

          <v-col class="d-flex child-flex" cols="12" sm="6">
           <div>
              
            <h1 class="display-1">1. Explore</h1>
            <p class="subtitle-1">Start by exploring Stays or Experiences. 
              Apply filters like entire homes, self check-in, or pets allowed to narrow your options. 
              You can also save favorites to a wishlist.</p>
           </div>

           
          </v-col>
        </v-row>

        <v-row class="mt-10">
          <v-col class="d-flex child-flex" cols="12" sm="6">
              <div>
              
            <h1 class="display-1">2. Book</h1>
            <p class="subtitle-1">Once you’ve found what you’re looking for, 
              learn about your host, read past guest reviews, and 
              get the details on cancellation options—then book in just a few clicks..</p>
           </div>
          </v-col>

          <v-col class="d-flex child-flex" cols="12" sm="6">
            <v-img class="img-style"
          src="https://picsum.photos/510/300?random"
          aspect-ratio="2.1"
        ></v-img>
          </v-col>
        </v-row>

        <v-row class="mt-10">
          <v-col class="d-flex child-flex" cols="12" sm="6">
            <v-img class="img-style"
          src="https://picsum.photos/510/300?random"
          aspect-ratio="1.7"
        ></v-img>
          </v-col>

          <v-col class="d-flex child-flex" cols="12" sm="6">
           <div>
              
            <h1 class="display-1">3. Connect</h1>
            <p class="subtitle-1">Connect with your host for further enquiries or contact ShareYaSpace team.</p>
           </div>

           
          </v-col>
        </v-row>
        <v-row class="mt-10">
          <v-col class="d-flex child-flex" cols="12" sm="4">
            <v-icon
      large
      color="blue-grey darken-2"
    >
      mdi-call-split
    </v-icon>
          </v-col>
          <v-col class="d-flex child-flex" cols="12" sm="4">
           <v-icon
      large
      color="orange darken-2"
    >
      mdi-arrow-up-bold-box-outline
    </v-icon>

          </v-col>
          <v-col class="d-flex child-flex" cols="12" sm="4">
           <v-icon
      large
      color="purple darken-2"
    >
      mdi-dialpad
    </v-icon>
          </v-col>
         
        </v-row>

        <v-row class="mt-10">
          <v-col class="d-flex " cols="12" sm="12">
            <v-img class="img-style"
          src="https://picsum.photos/510/300?random"
          aspect-ratio="5.1"
        >
        <div class="d-flex justify-center align-start">
          <v-btn >Explore Now</v-btn>

        </div>
        <div>
           <v-img class="img-style"
          src="https://picsum.photos/510/300?random"
          aspect-ratio="7.1"
        ></v-img>
        </div>
          <!-- <v-row>
            <v-col
              v-for="n in 9"
              :key="n"
              class="d-flex child-flex"
              cols="4"
            >
              <v-img
                :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                aspect-ratio="1"
                class="grey lighten-2"
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </v-col>
          </v-row>
        </div> -->
         </v-img>
       
          </v-col>
         
        </v-row>
      </v-container>
    </div>
  </v-content>
</template>

<style scoped>
body {
  font-family:  "Segoe UI",Roboto,Ubuntu,sans-serif;;
}
.img-style{
  border-radius: 20px;
}
</style>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() {
    
  },
})
</script>

<script>
export default {
  name: "About",
  data() {
    return {
     
      items: [
        {
          id: 1,
          src: require("../assets/images/team1.jpg"),
          name: 'Peter Smith',
          title: 'Director'
        },
        {
          id: 2,
          src: require("../assets/images/team2.jpg"),
          name: 'Roy Perry',
          title: 'Photographer'
        },
        {
          id: 3,
          src: require("../assets/images/team3.jpg"),
          name: 'Lisa White',
          title: 'Freelancer'
        }
      ]
    };
  }
};
</script>