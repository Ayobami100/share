<template>
<v-container>
    <v-row>
        <v-col  cols="12"
          sm="6"
          md="2">
 <v-text-field
            label="Country"
            outlined rounded
          ></v-text-field>
        </v-col>
         <v-col  cols="12"
          sm="6"
          md="2">
 <v-text-field
            label="State"
            outlined rounded
          ></v-text-field>
        </v-col>
        <v-col  cols="12"
          sm="6"
          md="2">
 <v-text-field
            label="City"
            outlined rounded
          ></v-text-field>
        </v-col>
         <v-col  cols="12"
          sm="6"
          md="2">
 <v-text-field
            label="Host"
            outlined rounded
          ></v-text-field>
        </v-col>
         <v-col  cols="12"
          sm="6"
          md="2">
 <v-btn
      class="mx-2"
      fab
      dark
      color="indigo"
    >
      <v-icon dark>
        mdi-filter
      </v-icon>
    </v-btn>
        </v-col>
    </v-row>
   <h2 class="text-center headline ma-10">Available Bed Spaces</h2>
    <v-divider></v-divider>
    
       <v-card :loading="loading" class="mx-auto">
        <v-row>
          <v-col v-for="bed in beds" :key="bed.id" cols="12" md="3">
            <router-link :to="{name : 'single-bed', params: {id: bed.id}}">
              <template slot="progress">
                <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
                ></v-progress-linear>
              </template>
              <v-img height="250" :src="bed.src"></v-img>

          
            <v-card-title>{{ bed.title }}</v-card-title>

            <v-card-text>
              <v-row align="center" class="mx-0">
                <v-rating
                  :value="4.5"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
                ></v-rating>

                <div class="grey--text ml-4">
                  {{ bed.semi }}
                </div>
              </v-row>

              <div class="my-4 subtitle-1">
                {{ bed.subtitle }}
              </div>

              <div>{{ bed.description }}</div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <!-- <v-card-title>Tonight's availability</v-card-title> -->
            <!-- 
        <v-card-text>
          <v-chip-group
            v-model="selection"
            active-class="deep-purple accent-4 white--text"
            column
          >
            <v-chip>5:30PM</v-chip>

            <v-chip>7:30PM</v-chip>

            <v-chip>8:00PM</v-chip>

            <v-chip>9:00PM</v-chip>
          </v-chip-group>
        </v-card-text> -->

            <v-card-actions>
              <v-btn color="deep-purple lighten-2" text>
              View Details
              </v-btn>
            </v-card-actions>
            </router-link>
          </v-col>
        </v-row>
    </v-card>
   
   
</v-container>
  
</template>
<script>
export default {
    computed: {
      // bedy(){
      //   return this.$store.state.items.find(vid => vid.id == this.$route.params.id)
      // //  return this.$store.state.groups,
      // }
    },
  data() {
    return {
      beds: this.$store.state.categories.beds,
      loading: false,
      selection: 1,
    };
  },
  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>

