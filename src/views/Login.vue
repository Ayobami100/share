<template>
  <v-content>
    <div class="staticHero">
      <v-img src="../assets/images/img14.jpg">
        <v-row align="end" class="lightbox white--text pa-2 fill-height">
          <v-col>
            <v-container>
              <div class="headline" align="center">LOGIN</div>
            </v-container>
          </v-col>
        </v-row>
      </v-img>
    </div>
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
              <v-window>
                <v-window-item>
                  <v-row>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1
                          class="text-center display-2 success--text text--accent-3"
                        >
                          Sign in to ShareYaSpace
                        </h1>
                        <div class="text-center mt-4">
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>fab fa-facebook-f</v-icon>
                          </v-btn>

                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>fab fa-google-plus-g</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>fab fa-linkedin-in</v-icon>
                          </v-btn>
                        </div>
                        <h4 class="text-center mt-4">
                          Ensure your email for Login
                        </h4>
                         

                          <v-form  @submit.prevent="loginUser" v-model="valid">

                          
                          
                              <v-text-field
                              outlined
                                prepend-inner-icon="mdi-mail"
                                v-model="loginInfo.email"
                                :rules="emailRules"
                                label="E-mail"
                                required
                              ></v-text-field>                              
                         
                            <v-text-field
                             outlined                              
                              :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                              :rules="[rules.required, rules.min]"
                              :type="show3 ? 'text' : 'password'"
                              name="input-10-2"
                              label="Password"
                              hint="At least 8 characters"
                              @click:append="show3 = !show3"
                              v-model="loginInfo.password"
                            ></v-text-field>
                          
                              <a href="#" class="text-center mt-4"
                                >Forgot your password ?</a
                              >
                              <div class="text-center mt-3 ">
                              <v-btn rounded color="success accent-3" @click="loginUser" :disabled="!valid">
                                SIGN IN
                                </v-btn>
                            </div>
                          </v-form>
                       
                      </v-card-text>
                      
                    </v-col>

                    <v-col cols="12" md="4" class="success accent-3">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">Hello, Friend!</h1>
                        <!-- <h5 class="text-center">
                          Enter your personal details and start journey with us
                        </h5> -->
                      </v-card-text>
                      <div class="text-center btn">
                        <v-btn rounded outlined dark to="/register"
                          >SIGN UP
                        </v-btn>
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-content>
</template>

<style scoped>
.btn:disabled {
  background-color:red;
}
</style>
<script>
// import axios from "axios";



 
export default {
  name: "Login",
 
  data() {
    return {
      loginInfo:{
        email: '',
        password: '',

       
      },
      
        show3: false,



        required(propertyType) { 
          return v => v && v.length > 0 || `You must input a ${propertyType}`
        },
        minLength(propertyType, minLength) {
          return v => v && v.length >= minLength || `${propertyType} must be at least ${minLength} characters`
        },
        maxLength(propertyType, maxLength) {
          return v => v && v.length <= maxLength || `${propertyType} must be less than ${maxLength} characters`
        },
     
      rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => (`The email and password you entered don't match`),
        },
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    }
  },
  

  methods: {

  async loginUser(){
    let user = await this.$store.dispatch('loginUser',this.loginInfo);

    if(user.error){
      // alert(user.error)
    }
    else{
      alert('Thank you  ' + user.firstname + ", you are welcome")


      this.$router.push('./userdashboard')
    }

    
    // async handleSubmit() {
    //   const response = await axios.post('login', {
    //     email: this.email,
    //     password: this.password,
    //   });
    //   // eslint-disable-next-line no-console
    //   console.log(response.data.token);

    //    localStorage.setItem('token',response.data.token);

    //   this.$router.push('/');
    // },



  },
  submit () {
        this.$refs.observer.validate()
      },
  clear () {
    this.password = ''
    this.email = ''
    // this.select = null
    // this.checkbox = null
    // this.$refs.observer.reset()
  },
  }
};
</script>