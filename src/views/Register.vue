<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="10" sm="10" md="10">
            <v-card class="elevation-12">


              <!--------------------------------------------- First Registration page starts here -->
              
              <v-window v-model="step">
                <keep-alive>
                  <v-window-item :value="2">
                    <v-row class="fill-height">
                      <v-col cols="12" md="4" sm="4" class="success accent-3">
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

                      <v-col cols="12" md="8" sm="8">
                        <v-container>
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
                        </v-card-text>  
                          <v-form
                            @submit.prevent="registerUser"
                            v-model="valid" class="m-1"
                          >

                            <v-text-field
                              outlined
                              prepend-inner-icon="mdi-account"
                              ref="name"
                              v-model="registerInfo.lastname"
                              :rules="name"
                              :error-messages="errorMessages"
                              label="Last Name"
                              required
                            ></v-text-field>

                            <v-text-field
                              outlined
                              prepend-inner-icon="mdi-account"
                              ref="name"
                              v-model="registerInfo.firstname"
                              :rules="name"
                              :error-messages="errorMessages"
                              label="First Name"
                              required
                            ></v-text-field>

                       
                              <v-menu
                                ref="menu1"
                                v-model="menu1"
                                :close-on-content-click="false"
                                transition="scale-transition"
                                offset-y
                                max-width="290px"
                                min-width="290px"
                              >
                                <template v-slot:activator="{ on, attrs }">
                                  <v-text-field
                                  outlined
                                    v-model="registerInfo.DOB"
                                    label="Date of Birth"
                                    hint="MM/DD/YYYY format"
                                    persistent-hint
                                    prepend-inner-icon="event"
                                    v-bind="attrs"
                                    @blur="date = parseDate(registerInfo.DOB)"
                                    v-on="on"
                                  ></v-text-field>
                                </template>
                                <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
                              </v-menu>


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
                              :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                              :rules="[rules.required, rules.min]"
                              :type="show3 ? 'text' : 'password'"
                              name="Password"
                              label="Password"
                              hint="At least 8 characters"
                              @click:append="show3 = !show3"
                              v-model="registerInfo.password"
                              required
                            ></v-text-field>

                           <v-text-field
                           required
                             outlined                              
                              :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                              :rules="[rules.required, rules.min]"
                              :type="show2 ? 'text' : 'password'"
                              name="Password"
                              label="Confirm Password"
                              hint="At least 8 characters"
                              @click:append="show3 = !show3"
                              v-model="password"
                            ></v-text-field>

                           

                            <v-checkbox value="success" color="green">
                              <template v-slot:label required rules="">
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

                          <div class="text-center mt-n5">
                            <v-btn
                              rounded
                              color="success"
                              class="mr-4"
                              @click="step++"
                              :disabled="!valid"
                            >
                              Continue</v-btn
                            >
                            <v-btn rounded color="error" class="mr-4" @click="reset"
                              >Reset</v-btn
                            >
                          </div>
                        </v-container>
                         
                      </v-col>
                    </v-row>
                  </v-window-item>
                 </keep-alive>
               
                

                <keep-alive>
                  <v-window-item :value="3">
                    <v-row class="fill-height">
                      <v-col cols="12" md="4" sm="4" class="success accent-3">
                        <h1
                          class="text-center display-2 white--text text--accent-3"
                        >
                          Step 2
                        </h1>
                      </v-col>
                      <v-col cols="12" sm="8" md="8" >
                        <v-card-text class="mt-12">
                          <!-- <div>
                            <v-progress-linear
                              color="warning"
                              v-model="knowledge"
                              height="25"
                            >
                              <strong>{{ Math.ceil(knowledge) }}%</strong>
                            </v-progress-linear>
                          </div> -->
                        <v-container>
                           <v-form
                            @submit.prevent="registerUser()"
                            v-model="valid"
                          >
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
                              label="Phone Number"
                              value="Nigeria"
                              required
                              :rules="[rules.min]"
                            ></v-text-field>
                          </v-form>
                        </v-container>
                         
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
                            @click="step++"
                            :disabled="!valid"
                          >
                            Continue</v-btn
                          >
                          <v-btn
                            rounded
                            color="error"
                            class="mr-4"
                            @click="reset"
                            >Reset</v-btn
                          >
                        </div>
                      </v-col>
                    </v-row>
                  </v-window-item>
                </keep-alive>

                <keep-alive>
                  <v-window-item :value="4">
                    <v-row class="fill-height">
                      <v-col cols="12" md="4" sm="4" class="success accent-3">
                        <h1
                          class="text-center display-2 white--text text--accent-3"
                        >
                          Step 3
                        </h1>
                      </v-col>

                      <v-col cols="12" md="8" sm="8">
                        <v-card-text class="mt-12">
                          <!-- <div>
                            <v-progress-linear
                              color="warning"
                              v-model="knowledge"
                              height="25"
                            >
                              <strong>{{ Math.ceil(knowledge) }}%</strong>
                            </v-progress-linear>
                          </div> -->
                          </v-card-text>
                        <v-container>
                            <v-form v-model="valid">
                              <v-text-field
                                class="ma-5"
                                outlined
                                prepend-inner-icon="mdi-text"
                                ref="number"
                                v-model="registerInfo.otp"
                                label="Enter OTP Code Here"
                                :rules="[rules.required]"
                                required
                              ></v-text-field>
                        </v-form>
                        
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
                            @click="registerUser()"
                            :disabled="!valid"
                            >Submit
                          </v-btn>
                          <v-btn rounded color="error" class="mr-4" @click="reset"
                            >Reset</v-btn
                          >
                        </div>
                        </v-container>
                       


                      </v-col>
                    </v-row>
                  </v-window-item>
                </keep-alive>

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
  data: vm => ({
    // return {
      header: true,
      valid: false,
      show2: false,
      show3 :false,
      step: 2,

      knowledge: 25,

      registerInfo: {

        firstname: "",
        lastname: "",
        DOB: "",
        email: "",
        country: "",
        number: "",
        password: "",
        otp: "",
        number_verification: "2",
        role: "1",
        imgProfile:'images/1.png',
      },

      name: [
        (v) => !!v || "Name is required",
        (v) => v.length <= 20 || "Name must be less than 20 characters",
      ],
      emailRules: [
         v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      items: ["Nigeria", "Ghana", "Mexico", "Kenya"],

       rules:  {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => (`The email and password you entered don't match`),
        },
        
      
      
   

  
 
      date: new Date().toISOString().substr(0, 10),
      DOB: vm.formatDate(new Date().toISOString().substr(0, 10)),
      menu1: false,
      menu2: false,
}),
  
  computed: {
      computedDateFormatted () {
        return this.formatDate(this.date)
      },
    },


 watch: {
      date () {
        this.registerInfo.DOB = this.formatDate(this.date)
      },
    },



  methods: {
    async registerUser() {
      let user = await this.$store.dispatch("registerUser", this.registerInfo);

      if (user.error) {
        alert(user.error);

      } else {
        alert("Thank you  " + user.firstname +"  Registration Successful");

        
        this.$router.push('./userdashboard')
      }
    },

         formatDate (date) {
        if (!date) return null

        const [year, month, day] = date.split('-')
        return `${month}/${day}/${year}`
      },
      parseDate (date) {
        if (!date) return null

        const [month, day, year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      },
     reset() {
      this.$refs.form.reset();
    }


  }}




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


</script>