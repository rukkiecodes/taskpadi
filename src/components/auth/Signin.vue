<template>
  <v-container class="mt-sm-16">
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
            >Sign In</v-card-title
          >
          <v-card-subtitle>Enter details to sign in</v-card-subtitle>
          <v-card-text>
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
          </v-card-text>
          <v-card-text class="mt-n10 text-right">
            <router-link
              class="deep-purple--text text--accent-4 text-decoration-none"
              to="/forgotPassword"
              >Forgot password?</router-link
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
              Sign In
            </v-btn>
          </v-card-text>
          <v-card-text class="text-center">
            <p class="grey--text text--darken-3">
              Don't' have an account?
              <router-link
                class="deep-purple--text text--accent-4"
                to="/signup_buyer"
                >Sign Up</router-link
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
