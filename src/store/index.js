// import { try } from "bluebird";
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";


Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        items: [
            {
              id: 1,
              name: "Lanky Virtual Office",
              semi:" (413)",
              subtitle: " Business Space",
              description: "Small plates, salads & sandwiches. Oshodi, Lagos.",
              src: require("../assets/images/img2.jpg")
            },
            {
              id: 2,
              name: "Lanky Virtual Office",
              semi:" (413)",
              subtitle: " Business Space",
              description: "Small plates, salads & sandwiches. Oshodi, Lagos.",
              src: require("../assets/images/img2.jpg")
            },
              {
              id: 3,
              name: "Lanky Virtual Office",
              semi:" (413)",
              subtitle: " Business Space",
              description: "Small plates, salads & sandwiches. Oshodi, Lagos.",
              src: require("../assets/images/img2.jpg")
            },
             {
              id: 4,
              name: "Dayo",
              semi:" (413)",
              subtitle: " Business Space",
              description: "Small plates, salads & sandwiches. Oshodi, Lagos.",
              src: require("../assets/images/img2.jpg")
            },
              {
              id: 5,
              name: "Dele",
              semi:" (413)",
              subtitle: " Business Space",
              description: "Small plates, salads & sandwiches. Oshodi, Lagos.",
              src: require("../assets/images/img2.jpg")
            },
             {
              id: 6,
              name: "Femi",
              semi:" (413)",
              subtitle: " Business Space",
              description: "Small plates, salads & sandwiches. Oshodi, Lagos.",
              src: require("../assets/images/img2.jpg")
            },
              {
              id: 7,
              name: "Bola",
              semi:" (413)",
              subtitle: " Business Space",
              description: "Small plates, salads & sandwiches. Oshodi, Lagos.",
              src: require("../assets/images/img2.jpg")
            },
          ],
        groups:[
          {

          id: 1,
          category:'Business Place',
          link: 'business',
          src: require("../assets/office/1.jpg")
          },
            {
              id: 2,
              category:'Bed Space',
              link: 'bed',
              src: require("../assets/bed/1.jpg")
            },
          {
            id: 3,
            category:'Shareable Home',
            link: 'house',
            src: require("../assets/house/1.jpg")
          },
          {
            id: 4,
            category:'Open Space',
            link: 'open',
            src: require("../assets/Open/1.jpg")
          }
        ],
        businesses:[
          {
            id: 1,
              title: "Lanky Virtual Office",
              semi:" (413)",
              subtitle: " Business Space",
              description: "Small plates, salads & sandwiches. Oshodi, Lagos.",
              src: require("../assets/office/1.jpg")
            },
            {
              id: 2,
             title: "Lanky Virtual Office",
              semi:" (413)",
              subtitle: " Business Space",
              description: "Small plates, salads & sandwiches. Oshodi, Lagos.",
              src: require("../assets/office/2.jpg")
            },
              {
              id: 3,
              title: "Lanky Virtual Office",
              semi:" (413)",
              subtitle: " Business Space",
              description: "Small plates, salads & sandwiches. Oshodi, Lagos.",
              src: require("../assets/office/3.jpg")
            },
             {
              id: 4,
             title: "Lanky Virtual Office",
              semi:" (413)",
              subtitle: " Business Space",
              description: "Small plates, salads & sandwiches. Oshodi, Lagos.",
              src: require("../assets/office/4.jpg")
            },
              {
              id: 5,
              title: "Lanky Virtual Office",
              semi:" (413)",
              subtitle: " Business Space",
              description: "Small plates, salads & sandwiches. Oshodi, Lagos.",
              src: require("../assets/office/5.jpg")
            },
             {
              id: 6,
             title: "Lanky Virtual Office",
              semi:" (413)",
              subtitle: " Business Space",
              description: "Small plates, salads & sandwiches. Oshodi, Lagos.",
              src: require("../assets/office/6.jpg")
            },
              {
              id: 7,
              title: "Lanky Virtual Office",
              semi:" (413)",
              subtitle: " Business Space",
              description: "Small plates, salads & sandwiches. Oshodi, Lagos.",
              src: require("../assets/office/7.jpg")
          }
        ],
        opens:[
          {
            id: 1,
              title: "Lanky Open Space",
              semi:" (413)",
              subtitle: " Business Space",
              description: "Small plates, salads & sandwiches. Oshodi, Lagos.",
              src: require("../assets/Open/1.jpg")
            },
            {
              id: 2,
              title: "Lanky Open Space",
              semi:" (413)",
              subtitle: " Business Space",
              description: "Small plates, salads & sandwiches. Oshodi, Lagos.",
              src: require("../assets/Open/2.jpg")
            },
              {
              id: 3,
              title: "Lanky Open Space",
              semi:" (413)",
              subtitle: " Business Space",
              description: "Small plates, salads & sandwiches. Oshodi, Lagos.",
              src: require("../assets/Open/3.jpg")
            },
             {
              id: 4,
              title: "Lanky Open Space",
              semi:" (413)",
              subtitle: " Business Space",
              description: "Small plates, salads & sandwiches. Oshodi, Lagos.",
              src: require("../assets/Open/4.jpg")
            },
              {
              id: 5,
              title: "Lanky Open Space",
              semi:" (413)",
              subtitle: " Business Space",
              description: "Small plates, salads & sandwiches. Oshodi, Lagos.",
              src: require("../assets/Open/5.jpg")
            },
             {
              id: 6,
              title: "Lanky Open Space",
              semi:" (413)",
              subtitle: " Business Space",
              description: "Small plates, salads & sandwiches. Oshodi, Lagos.",
              src: require("../assets/Open/6.jpg")
            },
              {
              id: 7,
              title: "Lanky Open Space",
              semi:" (413)",
              subtitle: " Business Space",
              description: "Small plates, salads & sandwiches. Oshodi, Lagos.",
              src: require("../assets/Open/7.jpg")
          }
        ],
        beds:[
          {
            id: 1,
              title: "Lanky Bed Space",
              semi:" (413)",
              subtitle: " Business Space",
              description: "Small plates, salads & sandwiches. Oshodi, Lagos.",
              src: require("../assets/bed/1.jpg")
            },
            {
              id: 2,
              title: "Lanky Bed Space",
              semi:" (413)",
              subtitle: " Business Space",
              description: "Small plates, salads & sandwiches. Oshodi, Lagos.",
              src: require("../assets/bed/2.jpg")
            },
              {
              id: 3,
              title: "Lanky Bed Space",
              semi:" (413)",
              subtitle: " Business Space",
              description: "Small plates, salads & sandwiches. Oshodi, Lagos.",
              src: require("../assets/bed/3.jpg")
            },
             {
              id: 4,
              title: "Lanky Bed Space",
              semi:" (413)",
              subtitle: " Business Space",
              description: "Small plates, salads & sandwiches. Oshodi, Lagos.",
              src: require("../assets/bed/4.jpg")
            },
              {
              id: 5,
              title: "Lanky Bed Space",
              semi:" (413)",
              subtitle: " Business Space",
              description: "Small plates, salads & sandwiches. Oshodi, Lagos.",
              src: require("../assets/bed/5.jpg")
            },
             {
              id: 6,
              title: "Lanky Bed Space",
              semi:" (413)",
              subtitle: " Business Space",
              description: "Small plates, salads & sandwiches. Oshodi, Lagos.",
              src: require("../assets/bed/6.jpg")
            },
              {
              id: 7,
              title: "Lanky Bed Space",
              semi:" (413)",
              subtitle: " Business Space",
              description: "Small plates, salads & sandwiches. Oshodi, Lagos.",
              src: require("../assets/bed/7.jpg")
          },

          {
            id: 8,
            title: "Lanky Bed Space",
            semi:" (413)",
            subtitle: " Business Space",
            description: "Small plates, salads & sandwiches. Oshodi, Lagos.",
            src: require("../assets/bed/8.jpg")
          }
        ],
        houses:[
          {
            id: 1,
              title: "Lanky Shareable Home",
              semi:" (413)",
              subtitle: " Business Space",
              description: "Small plates, salads & sandwiches. Oshodi, Lagos.",
              src: require("../assets/house/1.jpg")
            },
            {
              id: 2,
              title: "Lanky Shareable Home",
              semi:" (413)",
              subtitle: " Business Space",
              description: "Small plates, salads & sandwiches. Oshodi, Lagos.",
              src: require("../assets/house/1.jpg")
            },
              {
              id: 3,
              title: "Lanky Shareable Home",
              semi:" (413)",
              subtitle: " Business Space",
              description: "Small plates, salads & sandwiches. Oshodi, Lagos.",
              src: require("../assets/house/1.jpg")
            },
             {
              id: 4,
              title: "Lanky Shareable Home",
              semi:" (413)",
              subtitle: " Business Space",
              description: "Small plates, salads & sandwiches. Oshodi, Lagos.",
              src: require("../assets/house/1.jpg")
            },
              {
              id: 5,
              title: "Lanky Shareable Home",
              semi:" (413)",
              subtitle: " Business Space",
              description: "Small plates, salads & sandwiches. Oshodi, Lagos.",
              src: require("../assets/house/1.jpg")
            },
             {
              id: 6,
              title: "Lanky Shareable Home",
              semi:" (413)",
              subtitle: " Business Space",
              description: "Small plates, salads & sandwiches. Oshodi, Lagos.",
              src: require("../assets/house/1.jpg")
            },
              {
              id: 7,
              title: "Lanky Shareable Home",
              semi:" (413)",
              subtitle: " Business Space",
              description: "Small plates, salads & sandwiches. Oshodi, Lagos.",
              src: require("../assets/house/1.jpg")
          }
        ],
        nearbys:[
          {
            id: 1,
            name: "Osun State",
            Space:"Available Spaces - 35",
            description: "Small plates.",
            src: require("../assets/images/img2.jpg")
          },
          {
            id: 2,
            name: "Kwara State",
            Space:"Available Spaces - 30",
            description: "Small Chops.",
            src: require("../assets/images/img2.jpg")
          },
            {
            id: 3,
            name: "Plateau State",
            Space:"Available Spaces - 95",
            description: "Small plates.",
            src: require("../assets/images/img2.jpg")
          },
           {
            id: 4,
            name: "Lagos State",
            Space:"Available Spaces - 85",
            description: "Small plates.",
            src: require("../assets/images/img2.jpg")
          },
            {
            id: 5,
            name: "Oyo State",
            Space:"Available Spaces - 15",
            description: "Small plates.",
            src: require("../assets/images/img2.jpg")
          },
           {
            id: 6,
            name: "Ekiti State",
            Space:"Available Spaces - 5",
            description: "Small plates.",
            src: require("../assets/images/img2.jpg")
          },
          {
          id: 7,
          name: "Abia State",
          Space:"Available Spaces - 3",
          description: "Small plates.",
          src: require("../assets/images/img2.jpg")
        },
        {
          id: 8,
          name: "Anambra State",
          Space:"Available Spaces - 35",
          description: "Small plates.",
          src: require("../assets/images/img2.jpg")
        },
          {
          id: 9,
          name: "Kano State",
          Space:"Available Spaces - 35",
          description: "Small plates.",
          src: require("../assets/images/img2.jpg")
        },
         {
          id: 10,
          name: "FCT",
          Space:"Available Spaces - 35",
          description: "Small plates.",
          src: require("../assets/images/img2.jpg")
        },
        {
        id: 11,
        name: "Kaduna State",
        Space:"Available Spaces - 35",
        description: "Small plates.",
        src: require("../assets/images/img2.jpg")
      },
        ],

        currentUser:{}
    },
    mutations:{
        LOGOUT_USER(state){
        state.currentUser = {}
        window.localStorage.currentUser = JSON.stringify({})
        },
        SET_CURRENT_USER(state,user){
        state.currentUser = user;
        window.localStorage.currentUser = JSON.stringify(user)
        }
    },


    actions:{
      logoutUser({commit}){
        commit('LOGOUT_USER')
      },

      // loginUser({commit},user){
      //   commit('SET_CURRENT_USER',user);
 
      async loginUser({commit},loginInfo){

        try
        {
          let response = await axios.post('login', loginInfo)
          let user = response.data.user;
          // eslint-disable-next-line no-console
          console.log(user);
          commit('SET_CURRENT_USER', user);
          return user;
        }
        catch{
           return {error: "Password/username do not match"}
        }

        
      },

      async registerUser({commit},registerInfo){

        try
        {
          let response = await axios.post('register', registerInfo)
          let user = response.data.data;
          // eslint-disable-next-line no-console
          console.log(user);
          commit('SET_CURRENT_USER', user);
          return user;
        }
        catch{
           return {error: "Kindly Check all your details and try again!"}
        }

        
      },

      async loadUsers({commit}){
        // let response = await Api().get('/users');
        // let users = response.data.data;
        // commit('SET_USERS', users.map(u => u.attributes))

        let user = JSON.parse(window.localStorage.currentUser);
        commit('SET_CURRENT_USER',user)
              }

            }
            
})