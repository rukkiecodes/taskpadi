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
        <v-card flat color="transparent" class="mx-auto mt-16">
          <v-card-title class="grey--text text--darken-3 text-h3"
            >Sign In</v-card-title
          >
          <v-card-subtitle>Enter details to sign in</v-card-subtitle>
          <v-card-text>
            <v-text-field
              dense
              outlined
              full-width
              type="email"
              class="rounded-lg"
              placeholder="Email"
              color="deep-purple accent-4"
              v-model="signin.credentials.email"
            ></v-text-field>
            <v-text-field
              dense
              outlined
              full-width
              class="rounded-lg"
              placeholder="Password"
              color="deep-purple accent-4"
              v-model="signin.credentials.password"
              :type="peekPassword ? 'text' : 'password'"
              @click:append="peekPassword = !peekPassword"
              :append-icon="peekPassword ? 'mdi-eye' : 'mdi-eye-off'"
            ></v-text-field>
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
              dark
              block
              depressed
              @click="signinUSer"
              class="mt-n3 rounded-lg"
              :loading="signin.loading"
              color="deep-purple accent-4"
            >
              Sign In
            </v-btn>
          </v-card-text>
          <v-card-text class="text-center">
            <p class="grey--text text--darken-3">
              Don't' have an account?
              <router-link
                to="/signup_buyer"
                class="deep-purple--text text--accent-4"
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
import { mapActions, mapState } from "vuex"
export default {
  data: () => ({
    password: "",
    peekPassword: false,
  }),
  methods: {
    ...mapActions(["signinUSer"]),
  },

  computed: {
    ...mapState(["signin"]),
  },
}
</script>
