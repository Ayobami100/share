<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
              <v-window v-model="step">
                <v-window-item :value="1">
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

                        <!-- <v-form>
                          <v-text-field
                            v-model="email"
                            :rules="emailRules"
                            label="E-mail"
                            required
                          ></v-text-field>
                          <v-text-field
                            v-model="password"
                            :rules="password"
                            label="Password"
                            type="password"
                            required
                          ></v-text-field>
                        </v-form> -->


                        <a href="#" class="text-center mt-4"
                          >Forgot your password ?</a
                        >
                      </v-card-text>
                      <div class="text-center mt-3">
                        <v-btn rounded color="success accent-3" dark
                          >SIGN IN</v-btn
                        >
                      </div>
                    </v-col>

                    <v-col cols="12" md="4" class="success accent-3">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">Hello, Friend!</h1>
                        <h5 class="text-center">
                          Enter your personal details and start journay with us
                        </h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark @click="step++"
                          >SIGN UP</v-btn
                        >
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>

                <v-window-item :value="2">
                  <v-row class="fill-height">
                    <v-col cols="12" md="4" class="success accent-3">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">Welcome Back!</h1>
                        <h5 class="text-center">
                          To Keep connected with us please login with your
                          personnel info
                        </h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark
                          ><router-link to="/login" class="white--text"
                            >SIGN IN</router-link
                          >
                        </v-btn>
                      </div>
                    </v-col>

                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1
                          class="text-center display-2 success--text text--accent-3"
                        >
                          Create Account
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
                          Ensure your email for registration
                        </h4>

                        <!--------------------------------------------- First Registration page starts hereA -->
                        <keep-alive>
                          <v-form @submit.prevent="registerUser" v-model="valid">
                            

                            <v-text-field
                              outlined
                              prepend-inner-icon="mdi-account"
                              ref="name"
                              v-model="registerInfo.lastname"
                              :rules="[
                                () => !!name || 'This field is required',
                              ]"
                              :error-messagesA="errorMessages"
                              label="Last Name"
                              required
                            ></v-text-field>

                            <v-text-field
                              outlined
                              prepend-inner-icon="mdi-account"
                              ref="name"
                              v-model="registerInfo.firstname"
                              :rules="[
                                () => !!name || 'This field is required',
                              ]"
                              :error-messages="errorMessages"
                              label="First Name"
                              required
                            ></v-text-field>

                            <v-text-field
                              outlined
                              prepend-inner-icon="mdi-mail"
                              ref="date"
                              v-model="registerInfo.DOB"
                              :rules="[
                                () => !!name || 'This field is required',
                              ]"
                              :error-messages="errorMessages"
                              label="Birth(DD-MM-YY)"
                              required
                            ></v-text-field>

                            <v-text-field
                              outlined
                              prepend-inner-icon="mdi-mail"
                              v-model="registerInfo.email"
                              :rules="emailRules"
                              label="E-mail"
                              required
                            ></v-text-field>

                             <v-text-field
                              outlined
                              prepend-inner-icon="mdi-account"
                              v-model="registerInfo.password"
                              type="password"
                              label="Password"
                              required
                            ></v-text-field>
                             <v-text-field
                              outlined
                              prepend-inner-icon="mdi-account"
                              v-model="Confirm_password"
                              type="password"
                              label="Confirm Password"
                              required
                            ></v-text-field>

                            <v-checkbox
                             
                              value="success"
                              color="green"
                            >
                              <template v-slot:label>
                                <div @click.stop="">
                                  Do you accept the
                                  <a href="#" @click.prevent="terms = true"
                                    >terms</a
                                  >
                                  and
                                  <a href="#" @click.prevent="conditions = true"
                                    >conditions?</a
                                  >
                                </div>
                              </template>
                            </v-checkbox>
                          </v-form>
                        </keep-alive>


                      </v-card-text>
                      <div class="text-center mt-n5">
                        <v-btn
                          rounded
                          color="success"
                          class="mr-4"
                          @click="step++" :disabled="!valid"
                        >
                          Continue</v-btn
                        >
                        <v-btn rounded color="error" class="mr-4" @click="reset"
                          >Reset</v-btn
                        >
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>

                <keep-alive>
                <v-window-item :value="3">
                  <v-row class="fill-height">
                    <v-col cols="12" md="4" class="success accent-3">
                      <h1
                        class="text-center display-2 white--text text--accent-3"
                      >
                        Step 2
                      </h1>
                    </v-col>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <div>
                          <v-progress-linear
                            color="warning"
                            v-model="knowledge"
                            height="25"
                          >
                            <strong>{{ Math.ceil(knowledge) }}%</strong>
                          </v-progress-linear>
                        </div>

                        <h4 class="text-center mt-4">
                          Ensure your email for registration
                        </h4>
                        <v-form @submit.prevent="registerUser()"  v-model="valid">
                          <v-select
                            :items="items"
                            placeholder="Country/Region Nigeria (+234)"
                            outlined
                            prepend-inner-icon="mdi-country"
                            v-model="registerInfo.country"
                          ></v-select>

                          <v-text-field
                            outlined
                            prepend-inner-icon="mdi-phone"
                            ref="number"
                            v-model="registerInfo.number"
                           
                            label="Phone Number" value="Nigeria"
                            required
                          ></v-text-field>
                        </v-form>
                      </v-card-text>
                      <div class="text-center mt-n5">
                        <v-btn
                          rounded
                          color="success"
                          class="mr-4"
                          @click="step--"
                        >
                          Previous</v-btn
                        >
                        <v-btn
                          rounded
                          color="success"
                          class="mr-4"
                          @click=" step++" :disabled="!valid"
                        >
                          Continue</v-btn
                        >
                        <v-btn rounded color="error" class="mr-4" @click="reset"
                          >Reset</v-btn
                        >
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
                </keep-alive>    

                  <v-window-item :value="4">
                  <v-row class="fill-height">
                    <v-col cols="12" md="4" class="success accent-3">
                      <h1
                        class="text-center display-2 white--text text--accent-3"
                      >
                        Step 3
                      </h1>
                    </v-col>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <div>
                          <v-progress-linear
                            color="warning"
                            v-model="knowledge"
                            height="25"
                          >
                            <strong>{{ Math.ceil(knowledge) }}%</strong>
                          </v-progress-linear>
                        </div>

                        <v-form v-model="valid">
                          <v-text-field
                            class="ma-5"
                            outlined
                            prepend-inner-icon="mdi-text"
                            ref="number"
                            v-model="registerInfo.otp"                           
                            label="Enter OTP Code Here"
                            required
                          ></v-text-field>

                        </v-form>

                      </v-card-text>
                      <div class="text-center mt-n5">
                        <v-btn
                          rounded
                          color="success"
                          class="mr-4"
                          @click="step--"
                        >
                          Previous</v-btn
                        >
                        <v-btn rounded color="success" class="mr-4" @click="registerUser()" :disabled="!valid" 
                          >Submit
                        </v-btn>
                        <v-btn rounded color="error" class="mr-4" @click="reset"
                          >Reset</v-btn
                        >
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
  </v-app>
</template>

<script>
// import axios from 'axios';
export default {
  data() {
    return{
    header: true,
    valid: false,


    step: 2,

    knowledge: 25,

    registerInfo:
    {
        firstname:'',
        lastname:'',
        DOB:'',
        email:'',
        country:'',
        number :'',
        password:'',
        otp:'',
         number_verification:'2',
          role:'1',      
          imgProfile:'images/1.png' 
    },
   

      name: [
        v => !!v || 'Name is required',
        v => v.length <= 20 || 'Name must be less than 10 characters',
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      items: ['Nigeria', 'Ghana', 'Mexico', 'Kenya'],
  }
  
  },

  methods:{
      async registerUser(){
          let user = await this.$store.dispatch('registerUser',this.registerInfo);

          if(user.error){
            alert(user.error)
          }
          else{
            alert('Thank you' + user.firstname)
            // this.$router.push('./userdashboard')
          }
        }

    // async handleSubmit(){
    //       const response = await axios.post('register', {

    //         firstname:this.first_name,
    //         lastname:this.last_name,
    //         DOB:this.DOB,
    //         email:this.email,
    //         country: 'Nigeria',
    //         number: this.number,
    //         password:'22344',
    //         otp:this.number,
    //         number_verification:'2',
    //         role:'1',      
    //         imgProfile:'images/1.png' 
     
    // });
    //  // eslint-disable-next-line no-console
    //    console.log(response.data.firstname);
       
    
    // this.$router.push('/success');
     
    //   // eslint-disable-next-line no-console
    //   // console.log(data_value);
    // }
    }
  
  }
</script>