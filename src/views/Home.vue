
<template>
  <v-content>
    <Hero />
    
    <LatestPost />
   
  </v-content>
</template>

<script>
  import Hero from "../components/Hero";
  import LatestPost from "../components/LatestPost";
  import axios from 'axios';

  export default {
    name: "Home",

    components: {
      Hero,
      LatestPost
    },

    async created(){
     
    const response = await axios.get('user',{
      headers:{
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    });

    // this.user = response.data;
  // eslint-disable-next-line no-console
  console.log(response);
  },
  };
</script>