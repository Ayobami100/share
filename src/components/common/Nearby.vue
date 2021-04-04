<template>
  <v-content>
    <v-container>
      <div>
        <div>
          <h1 class="display-1 ma-5">Nearby Places</h1>
        </div>

        <v-row class="fill-height">
          <v-col
            v-for="nearby in nearbys"
            :key="nearby.id"
            cols="4"
            md="3"
            sm="3"
          >
            <router-link to="/">
              <div class="d-flex justify-space-between">
                <div>
                  <img :src="nearby.src" class="img-res" />
                </div>
                <div>
                  <h6 class="font-weight-bold">{{ nearby.name }}</h6>
                  <p class="black--text">{{ nearby.Space }}</p>
                  <p class="black--text">{{ nearby.description }}</p>
                </div>
              </div>
            </router-link>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </v-content>
</template>

<style scoped>
.dash {
  border: 1px black solid;
  height: 500px;
}
.img-res {
  width: 100px;
  height: 100px;
  border-radius: 25%;
}
</style>

<script>
// import Navbar from "../../components/Dashboard/Navbar"

export default {
  name: "Nearby",

  data() {
    return {
      nearbys: this.$store.state.categories.nearbys,

      team: [
        { name: "Iyad", role: "web developer", avatar: "/img1.png" },
        { name: "Reda", role: "Graphic designer", avatar: "/img2.png" },
        { name: "Zineb", role: "web developer", avatar: "/img3.png" },
        {
          name: "Hu TechGroup",
          role: "Desktop developer",
          avatar: "/img4.png",
        },
      ],
      user: null,
    };
  },

  components: {
    // Navbar,
  },

  methods: {
    // loginUser(user) {
      // this.$store.actions.auth.dispatch("loginUser", user);
    // },
  },
};
</script>


