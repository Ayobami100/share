
<template>
  <v-content>
    
    <Hero />
    <Nearby/>
    <LatestPost />
   
  </v-content>
</template>

<script>
  import Hero from "../components/Hero";
  import LatestPost from "../components/LatestPost";
   import Nearby from "../components/common/Nearby";
  // import axios from 'axios';

  export default {
    name: "Home",

    components: {
      Hero,
      LatestPost,
      Nearby,
    },

    // async created(){
     
    // const response = await axios.get('user',{
    //   headers:{
    //     Authorization: 'Bearer ' + localStorage.getItem('token')
    //   }
    // });

    // this.user = response.data;
  // // eslint-disable-next-line no-console
  // console.log(response);
  
  };
</script>