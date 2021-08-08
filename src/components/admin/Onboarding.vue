<template>
  <v-container class="mt-15">
    <v-row class="px-7 mt-15 mt-lg-0" justify="space-between" align="center">
      <v-col cols="12" sm="6" md="4">
        <p class="text-h5 grey--text text--darken-4">
          Hello <span class="blue--text text--accent-4">User Name</span>,
          welcome to TrustPaddi. Let's get you started with the basics.
        </p>
        <v-btn
          large
          width="200"
          height="50"
          depressed
          color="blue accent-4"
          class="rounded-lg white--text "
          >Let's Go</v-btn
        >
      </v-col>
      <v-col class="mt-15 mt-sm-0" justify="center" align="center" cols="12" sm="6">
        <v-img
          lazy-src="../../assets/trust/home_phone.png"
          src="../../assets/trust/home_phone.png"
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>
