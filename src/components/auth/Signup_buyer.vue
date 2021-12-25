<template>
  <v-container>
    <v-row justify="space-between" align="center">
      <v-col class="text-center" cols="12" sm="5">
        <v-img
          class="mx-auto"
          src="../../assets/trust/phone1.png"
          lazy-src="../../assets/trust/Group 58.png"
        />
        <p class="grey--text text--darken-3 text-body-1">Follow us</p>
        <v-btn
          dark
          x-small
          depressed
          height="38"
          class="rounded-lg"
          color="deep-purple accent-4"
        >
          <v-icon>mdi-linkedin</v-icon>
        </v-btn>
        <v-btn
          dark
          x-small
          depressed
          height="38"
          class="mx-2 rounded-lg"
          color="deep-purple accent-4"
        >
          <v-icon>mdi-facebook</v-icon>
        </v-btn>
        <v-btn
          dark
          x-small
          depressed
          height="38"
          class="rounded-lg"
          color="deep-purple accent-4"
        >
          <v-icon>mdi-github</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="12" sm="5">
        <v-card flat color="transparent" class="mx-auto">
          <v-card-title class="grey--text text--darken-3 text-h3"
            >Sign up</v-card-title
          >
          <v-card-subtitle>Enter details to sign up as Buyer</v-card-subtitle>
          <v-card-text>
            <v-text-field
              dense
              outlined
              full-width
              class="rounded-lg"
              placeholder="Full name"
              color="deep-purple accent-4"
              v-model="signup_buyer.credentials.firstName"
            ></v-text-field>
            <v-text-field
              dense
              outlined
              full-width
              class="rounded-lg"
              placeholder="Full name"
              color="deep-purple accent-4"
              v-model="signup_buyer.credentials.lastName"
            ></v-text-field>
            <v-text-field
              dense
              outlined
              full-width
              type="email"
              class="rounded-lg"
              placeholder="Email"
              color="deep-purple accent-4"
              v-model="signup_buyer.credentials.email"
            ></v-text-field>
            <v-text-field
              dense
              outlined
              full-width
              class="rounded-lg"
              placeholder="Referral code"
              color="deep-purple accent-4"
              v-model="signup_buyer.credentials.referralCode"
            ></v-text-field>
            <v-text-field
              dense
              outlined
              full-width
              class="rounded-lg"
              placeholder="Password"
              color="deep-purple accent-4"
              :type="peekPassword ? 'text' : 'password'"
              v-model="signup_buyer.credentials.password"
              @click:append="peekPassword = !peekPassword"
              :append-icon="peekPassword ? 'mdi-eye' : 'mdi-eye-off'"
            ></v-text-field>
            <v-text-field
              dense
              outlined
              full-width
              disabled
              class="rounded-lg"
              placeholder="Confirm Password"
              color="deep-purple accent-4"
              :type="peekPassword2 ? 'text' : 'password'"
              v-model="signup_buyer.credentials.confirmPassword"
              @click:append="peekPassword2 = !peekPassword2"
              :append-icon="peekPassword2 ? 'mdi-eye' : 'mdi-eye-off'"
            ></v-text-field>
          </v-card-text>
          <v-card-text class="mt-n10 text-right">
            <router-link
              class="deep-purple--text text--accent-4 text-decoration-none"
              to="/signup_seller"
              >Register as a seller</router-link
            >
          </v-card-text>
          <v-card-text>
            <v-btn
              dark
              block
              depressed
              @click="signupAsBuyer"
              class="mt-n3 rounded-lg"
              color="deep-purple accent-4"
              :loading="signup_buyer.loading"
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
import { mapActions, mapState } from "vuex"
export default {
  data: () => ({
    peekPassword: false,
    peekPassword2: false,
  }),

  methods: {
    ...mapActions(['signupAsBuyer'])
  },

  computed: {
    ...mapState(["signup_buyer"]),
  },
}
</script>
