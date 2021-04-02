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
        {{ bedy.src }}
      <v-img height="250" :src="bedy.src"></v-img>

    </v-col>
  </v-row>
</div>


    <v-divider></v-divider>

    <v-row no-gutters>
      <div class="detail-description">
        <p class="body-1">
          Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum
          ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel
          diam elementum tempor vel ut orci. Orci varius natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus.
        </p>
      </div>
      <div class="detail-amenities">
        <v-card class="mx-auto" max-width="300" tile>
          <v-list flat>
            <v-subheader>Amenities</v-subheader>
            <v-list-item-group color="primary">
              <v-list-item v-for="(item, i) in items" :key="i">
                <v-list-item-icon>
                  <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </div>
      <div class="detail-more"></div>
      <div class="detail-dropdown"></div>
      <div class="detail-availability"></div>
    </v-row>
    <div class="recommended"></div>
  </v-container>
</template>

<style lang="scss">
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
export default {
  computed: {
    bedy() {
      return this.$store.state.beds.find(bd => bd.id == this.$route.params.id
      );
    },
    //  homy() {
    //   return this.$store.state.houses.find(hm => hm.id == this.$route.params.id
    //   );
    // },
    //  busy() {
    //   return this.$store.state.businesses.find(bs => bs.id == this.$route.params.id
    //   );
    // },
    //  openy() {
    //   return this.$store.state.opens.find(op => op.id == this.$route.params.id
    //   );
    // },
  },
  data() {
    return {
      slides: ["video.src", "Second", "Third", "Fourth"],
      src: [
        // require("../assets/house/1.jpg"),
        // require("../assets/house/2.jpg"),
        // require("../assets/house/3.jpg"),
        // require("../assets/house/4.jpg"),
      ],
      items: [
        { text: "Television", icon: "mdi-television" },
        { text: "Radio", icon: "mdi-account" },
        { text: "Air Condition", icon: "mdi-flag" },
        { text: "Dryer", icon: "mdi-clock" },
        { text: "Water Heater", icon: "mdi-account" },
        { text: "Oven", icon: "mdi-flag" },
      ],
    };
  },

  methods:{
    mounted(){
      // eslint-disable-next-line no-console
      // console.log(bedy.src)
    }
  }
};
</script>
