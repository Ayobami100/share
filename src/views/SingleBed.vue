<template>
  <v-container>
    <!-- <div class="slider">
      <v-card elevation="24" max-width="444" class="mx-auto">
        <v-carousel
          :continuous="true"
          :cycle="cycle"
          hide-delimiter-background
          delimiter-icon="mdi-minus"
          height="300"
        >
          <v-carousel-item v-for="(slide, i) in slides" :key="i">
            <v-row align="center" justify="center">
              <div class="display-1">
                <v-img height="250" :src="src[i]"></v-img>
              </div>
            </v-row>
          </v-carousel-item>
        </v-carousel>
        <v-list two-line>
          <v-list-item>
            <v-list-item-avatar>
              <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>John Leider</v-list-item-title>
              <v-list-item-subtitle>Host</v-list-item-subtitle>
              <h6>Since June 2021</h6>
            </v-list-item-content>
            <v-list-item-action> </v-list-item-action>
          </v-list-item>
        </v-list>
        <v-card-text> </v-card-text>
      </v-card>
      <v-rating
        v-model="rating"
        color="yellow darken-3"
        background-color="grey darken-1"
        empty-icon="$ratingFull"
        half-increments
        hover
        large
      ></v-rating>
    </div> -->

<div>
<v-container>
  <h3 class="display-1 text--black"> Spacious Family Vacation Home </h3>
    </v-container>


  <v-row>
    <v-col
     
      class="d-flex child-flex"
      cols="8"
    >
   
      <!-- <v-img
         src="../assets/images/img13.jpg"
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
      </v-img> -->
      <v-img height="250" :src="bedy.src"></v-img>
    </v-col>
  </v-row>
</div>
    <v-divider></v-divider>
<v-container class="lighten-5">
<v-row>
<v-col cols="12"
        sm="6"
        md="8">
        <v-row>
      <v-col cols="10"
       >  
<div>  
  <!-- List -->
   <h3 class="headline font-weight-bold"> {{bedy.title}} </h3>
   <p class="subheading">  {{bedy.description}}  </p>
<v-list disabled>
   <v-list-item-group color="primary">
              <v-list-item v-for="(item, i) in items" :key="i" two-line>
                <v-list-item-icon>
                  <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="item.text" class="subtitle-1 font-weight-bold"></v-list-item-title>
                  <v-list-item-subtitle v-text="item.subtext" class="grey--text text--darken-3"></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
</v-list>
<!-- List end -->
   </div>

    <v-divider></v-divider>
<div class="my-5 d-flex flex-column" >
    <span v-for="(f, index) in features" :key="index" class="m-3 p-0"> - {{f}}  </span>
  <div class="mt-4 body-1 font-weight-black text-decoration-underline"> <u>Contact host </u> </div>
</div>

    <v-divider></v-divider>
<div class="my-5 d-flex flex-column" >
    <h1 class="headline font-weight-medium">Amenities</h1>
    <v-row>
    <v-col class="amenities black--text font-weight-small" cols="6" v-for="(f, index) in amenities" :key="index">
        <p class=" font-weight-bold"><v-icon v-text="f.icon"></v-icon> - {{f.text}}  </p>
    </v-col>
    
    </v-row>
  
  
</div>

   </v-col>
  <v-col cols="2"
       >  
 <v-avatar
              class="text-right"    size="66px"
                >
<v-img
  :lazy-src="bedy.src"
  max-height="150"
  max-width="440"
  :src="bedy.src"
  
></v-img>
  </v-avatar>

</v-col>


</v-row>
    <v-divider></v-divider>
  </v-col>
  


  <v-col cols="12"
        sm="6"
        md="4">
    

<v-card
    class="mx-auto"
    max-width="344"
  >
    <v-card-text>
      <div><h2 class="text-h3 mb-3 text--primary font-weight-black">$70 / <small>night</small> </h2> </div>
      <v-row no-gutters>
        <v-col cols="6">
              <v-menu
                ref="menu1"
                v-model="menu1"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
          <v-text-field
          outlined
            v-model="registerInfo.DOB"
            label="Check-in"
            hint="MM/DD/YYYY format"
            persistent-hint
            prepend-inner-icon="event"
            v-bind="attrs"
            @blur="date = parseDate(registerInfo.DOB)"
            v-on="on"
            placeholder="Add date"
          ></v-text-field>
        </template>
        <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
      </v-menu>
          </v-col>
          <v-col cols="6">
            <v-menu
                ref="menu11"
                v-model="menu11"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
          <v-text-field
          outlined
            v-model="registerInfo.DOBs"
              label="Check-out"
            placeholder="Add date"
            hint="MM/DD/YYYY format"
            persistent-hint
            prepend-inner-icon="event"
            v-bind="attrs"
            @blur="date = parseDate(registerInfo.DOBs)"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="dates" no-title @input="menu11 = false"></v-date-picker>
      </v-menu>
          </v-col>
          <v-col cols="12">
            <v-combobox style="margin-top:0px"
          v-model="select"
          :items="item"
          label="Guests"
          outlined
          
        ></v-combobox>
            </v-col>
      </v-row>
      <v-card-actions class="justify-center text-capitalize">
      <v-btn class="text-capitalize"
              large
              color="red"
              dark
            >
              Check Availability
            </v-btn>
    </v-card-actions>
    </v-card-text>
    

  </v-card>


  </v-col>
  
<div id="myMap"></div>
  </v-row>
<v-row>
<div>
<h1 class="headline justify-center font-weight-medium">Location</h1>
</div>
<div class="mt-10">
  <GmapMap
  :center="{lat:10, lng:10}"
  :zoom="7"
  map-type-id="terrain"
  style="width: 1000px; height: 500px"
>

</GmapMap>
</div>

  </v-row>

  </v-container>


  </v-container>
</template>

<style lang="scss">
.amenities{
  color:#000 !important;
}
    .details {
      display: flex;
      gap: 3em;
      margin-top: 20px;
    }
    .details > * {
      flex-basis: 100%;
    }
    .detail-description {
      min-height: 200px;
      min-width: 200px;
      border: 2px black solid;
    }
    .detail-amenities {
      min-height: 200px;
      min-width: 200px;
      border: 2px black solid;
    }
    .detail-more {
      height: 200px;
      width: 200px;
      border: 2px black solid;
    }
    .detail-dropdown {
      height: 200px;
      width: 200px;
      border: 2px black solid;
    }
    .detail-availability {
      height: 200px;
      width: 200px;
      border: 2px black solid;
    }
    .recommended {
      min-height: 200px;
      min-width: 200px;
      border: 2px black solid;
    }
</style>

<script>
 import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAsN8iiTZaKZxmT7Idi8gCVT8z91HQ_sgE',

  },


})
export default {
  computed: {
     computedDateFormatted () {
        return this.formatDate(this.date)
      },
    bedy() {
      return this.$store.state.categories.beds.find(bd => bd.id == this.$route.params.id
      );
    },
    
  },
  data() {
    return {
        registerInfo: {
        DOB: "",
        },
          date: new Date().toISOString().substr(0, 10),
         
      DOB: this.formatDate(new Date().toISOString().substr(0, 10)),
      DOBs: this.formatDate(new Date().toISOString().substr(0, 10)),
      menu1: false,
      menu2: false,
      menu11: false,
      menu12: false,
        select: [],
        item: [
          'Adults',
          'Children',
          'Infants'
        ],
      slides: ["video.src", "Second", "Third", "Fourth"],
      src: [
        // require("../assets/house/1.jpg"),
        // require("../assets/house/2.jpg"),
        // require("../assets/house/3.jpg"),
        // require("../assets/house/4.jpg"),
      ],
      items: [
        { text: "Entire home", subtext: "You’ll have the house to yourself.", icon: "mdi-home" },
        { text: "Enhanced Clean", subtext: "This host committed to Airbnb's 5-step enhanced cleaning process.", icon: "mdi-account" },
        { text: "Cancellation policy", subtext: "Add your trip dates to get the cancellation details for this stay..", icon: "mdi-flag" },
       
      ],
      features: [ "Spacious Home", "Plush Garden", "Fast Wifi", "Car Parking", "Airport Pick-up Service per request.", "Concierge service available at a daily rate." ],
      amenities:   [
        { text: "Wifi",  icon: "mdi-wifi" },
        { text: "Free parking on premises", icon: "mdi-account" },
        { text: "Washer", icon: "mdi-flag" },
        { text: "Cable TV", icon: "mdi-television-ambient-light" },
        { text: "Kitchen", icon: "mdi-silverware-fork-knife" },
        { text: "TV with standard cable", icon: "mdi-television" },
        { text: "Dedicated workspace", icon: "mdi-microsoft-office" }
       
      ],
      
    };
  },


 watch: {
      date () {
        this.registerInfo.DOB = this.formatDate(this.date)
      },
    },

  methods:{
   
    mounted(){
      // eslint-disable-next-line no-console
      // console.log(bedy.src)
    },
     formatDate (date) {
        if (!date) return null

        const [year, month, day] = date.split('-')
        return `${month}/${day}/${year}`
      },
      parseDate (date) {
        if (!date) return null

        const [month, day, year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      },
  }
};
</script>
