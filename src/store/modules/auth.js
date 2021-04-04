import axios from "axios";

const state= {
  currentUser:{
    }
}
const mutations = {
    LOGOUT_USER(state){
    state.currentUser = {}
    window.localStorage.currentUser = JSON.stringify({})
    },
    SET_CURRENT_USER(state,user){
    state.currentUser = user;
    window.localStorage.currentUser = JSON.stringify(user)
    }
};


const actions = {
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


export default {        
state,
actions,
mutations
    };