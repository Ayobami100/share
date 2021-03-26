<template>
  <v-container>
    <h2 class="headline ma-10">Our Space Categories</h2>
    <v-divider></v-divider>
    <v-row>
      <v-col v-for="group in groups" :key="group.id" cols="12" md="3">
        <router-link :to="{ name: group.link}" class="black--text">
          
          <v-img height="150" :src="group.src"></v-img>
       
        <v-card-title class="bold">{{ group.category }}</v-card-title>
         </router-link>
      </v-col>
    </v-row>
    <div class="staticHero">
      <v-img src="../assets/images/img13.jpg">
        <v-row align="end" class="lightbox white--text pa-2 fill-height">
          <v-col>
            <v-container>
              <v-btn class="warning">Explore Nearby Places</v-btn>
            </v-container>
          </v-col>
        </v-row>
      </v-img>
    </div>
  </v-container>
</template>
<style scoped>
.headline {
  font-weight: bolder !important;
  font-size: 2rem !important;
}
.bold{
  text-align: center !important;
  font-weight: bold;
}
</style>
<script>
export default {
  name: "LatestPost",

  data() {
    return {
      groups: this.$store.state.groups,
    };
  },
};
</script>