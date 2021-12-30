<template>
  <div class="signup">
    <v-container class="transparent">
      <v-row justify="space-between" align="center">
        <v-col cols="12" sm="5" class="mt-16">
          <v-card flat color="transparent" class="mx-auto">
            <v-card-title
              class="grey--text text--darken-2 text-h4 font-weight-bold"
              >Sign up</v-card-title
            >
            <v-card-text>
              <v-row justify="space-between" align="center">
                <v-col cols="12" sm="6">
                  <v-text-field
                    solo
                    flat
                    dense
                    full-width
                    class="rounded-lg input"
                    placeholder="Full name"
                    background-color="#FAFCFF"
                    v-model="signup_buyer.credentials.firstName"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="6">
                  <v-text-field
                    solo
                    flat
                    dense
                    full-width
                    class="rounded-lg"
                    placeholder="Last name"
                    background-color="#FAFCFF"
                    v-model="signup_buyer.credentials.lastName"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="6">
                  <v-text-field
                    solo
                    flat
                    dense
                    full-width
                    type="email"
                    class="rounded-lg"
                    placeholder="Email"
                    background-color="#FAFCFF"
                    v-model="signup_buyer.credentials.email"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="6">
                  <v-text-field
                    solo
                    flat
                    dense
                    full-width
                    class="rounded-lg"
                    background-color="#FAFCFF"
                    placeholder="Referral code"
                    v-model="signup_buyer.credentials.referralCode"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="6">
                  <v-text-field
                    solo
                    flat
                    dense
                    full-width
                    class="rounded-lg"
                    placeholder="Password"
                    background-color="#FAFCFF"
                    :type="peekPassword ? 'text' : 'password'"
                    v-model="signup_buyer.credentials.password"
                    @click:append="peekPassword = !peekPassword"
                    :append-icon="peekPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="6">
                  <v-text-field
                    solo
                    flat
                    dense
                    full-width
                    disabled
                    class="rounded-lg"
                    background-color="#FAFCFF"
                    placeholder="Confirm Password"
                    :type="peekPassword2 ? 'text' : 'password'"
                    v-model="signup_buyer.credentials.confirmPassword"
                    @click:append="peekPassword2 = !peekPassword2"
                    :append-icon="peekPassword2 ? 'mdi-eye' : 'mdi-eye-off'"
                  ></v-text-field>
                </v-col>
              </v-row>
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
                <router-link
                  class="deep-purple--text text--accent-4"
                  to="/signin"
                  >Sign In</router-link
                >
              </p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col class="text-center mt-16" cols="12" sm="5">
          <v-img
            width="700"
            class="mx-auto"
            src="../../assets/trust/rucket.svg"
            lazy-src="../../assets/trust/rucket.svg"
          />
          <!-- <p class="grey--text text--darken-3 text-body-1">Follow us</p>
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
        </v-btn> -->
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex"
export default {
  data: () => ({
    peekPassword: false,
    peekPassword2: false,
  }),

  methods: {
    ...mapActions(["signupAsBuyer"]),
  },

  computed: {
    ...mapState(["signup_buyer"]),
  },
}
</script>

<style scoped>
.signup {
  background: linear-gradient(90deg, #ffffff, #e8efff);
  height: 100vh;
}

@media (max-width: 768px) {
  .signup {
    background: #fff;
  }
}
</style>
