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
            >Password Recovery</v-card-title
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
            ></v-text-field>
          </v-card-text>
          <v-card-text class="mt-n8">
            <v-btn
              dark
              block
              depressed
              class="mt-n3 rounded-lg"
              color="deep-purple accent-4"
            >
              Reset Password
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
