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
            >Sign up</v-card-title
          >
          <v-card-subtitle>Enter details to sign up as Seller</v-card-subtitle>
          <v-card-text>
            <v-text-field
              dense
              outlined
              full-width
              class="rounded-lg"
              placeholder="Full name"
              color="deep-purple accent-4"
            ></v-text-field>
            <v-text-field
              dense
              outlined
              full-width
              type="email"
              class="rounded-lg"
              placeholder="Email"
              color="deep-purple accent-4"
            ></v-text-field>
            <v-text-field
              full-width
              outlined
              dense
              color="deep-purple accent-4"
              label="Phone number"
            ></v-text-field>
            <v-text-field
              dense
              outlined
              full-width
              v-model="password"
              class="rounded-lg"
              placeholder="Password"
              :type="peekPassword ? 'text' : 'password'"
              @click:append="peekPassword = !peekPassword"
              :append-icon="peekPassword ? 'mdi-eye' : 'mdi-eye-off'"
            ></v-text-field>
            <v-select
              dense
              outlined
              full-width
              :items="items"
              class="rounded-lg"
              :placeholder="items[0]"
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
              dark
              block
              depressed
              class="mt-n3 rounded-lg"
              color="deep-purple accent-4"
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
    password: "",
    peekPassword: false,
    items: ["I am a business seller", "I am a business buyer"],
  }),
}
</script>
