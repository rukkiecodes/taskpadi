<template>
  <v-container>
    <v-row justify="space-between" align="center">
      <v-col class="text-center" cols="12" sm="5">
        <v-img
          lazy-src="../../assets/trust/Group 58.png"
          src="../../assets/trust/phone1.png"
          class="mx-auto"
        />
        <p class="grey--text text--darken-3 text-body-1">Follow us</p>
        <v-btn x-small depressed color="deep-purple accent-4" dark height="38">
          <v-icon>mdi-linkedin</v-icon>
        </v-btn>
        <v-btn
          x-small
          depressed
          class="mx-2"
          color="deep-purple accent-4"
          dark
          height="38"
        >
          <v-icon>mdi-facebook</v-icon>
        </v-btn>
        <v-btn x-small depressed color="deep-purple accent-4" dark height="38">
          <v-icon>mdi-github</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="12" sm="5">
        <v-card flat color="transparent" class="mx-auto mt-16">
          <v-card-title class="grey--text text--darken-3 text-h3"
            >Sign up</v-card-title
          >
          <v-card-subtitle>Enter details to sign up as Seller</v-card-subtitle>
          <v-card-text>
            <v-text-field
              full-width
              outlined
              dense
              color="deep-purple accent-4"
              label="Full name"
            ></v-text-field>
            <v-text-field
              full-width
              outlined
              dense
              type="email"
              color="deep-purple accent-4"
              label="Email"
            ></v-text-field>
            <v-text-field
              full-width
              outlined
              dense
              color="deep-purple accent-4"
              label="Phone number"
            ></v-text-field>
            <div class="d-flex ">
              <v-text-field
                outlined
                dense
                color="deep-purple accent-4"
                :type="passwordType"
                label="Password"
              ></v-text-field>
              <v-btn @click="togglPasswordType" icon>
                <v-icon v-show="passwordType == 'password'"
                  >mdi-eye-outline</v-icon
                >
                <v-icon v-show="passwordType != 'password'"
                  >mdi-eye-off-outline</v-icon
                >
              </v-btn>
            </div>
            <v-select
              full-width
              dense
              outlined
              :items="items"
              :label="items[0]"
            ></v-select>
          </v-card-text>
          <v-card-text class="mt-n10 text-right">
            <router-link
              class="deep-purple--text text--accent-4 text-decoration-none"
              to="/signup_buyer"
              >Register as a buyer</router-link
            >
          </v-card-text>
          <v-card-text>
            <v-btn
              class="mt-n3"
              color="deep-purple accent-4"
              depressed
              dark
              block
            >
              Sign Up
            </v-btn>
          </v-card-text>
          <v-card-text class="text-center">
            <p class="grey--text text--darken-3">
              Already have an account?
              <router-link class="deep-purple--text text--accent-4" to="/signin"
                >Sign In</router-link
              >
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    passwordType: "password",
    items: ["I am a business seller", "I am a business buyer"],
  }),
  methods: {
    togglPasswordType() {
      if (this.passwordType == "password") {
        this.passwordType = "text";
      } else {
        this.passwordType = "password";
      }
    },
  },
};
</script>
