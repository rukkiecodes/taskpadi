<template>
  <v-col class="px-0" cols="12">
    <v-row justify="space-between" align="start">
      <v-col cols="12" sm="6">
        <v-card flat dark color="deep-purple accent-4">
          <v-card-title>
            <v-spacer></v-spacer>
            <v-btn color="deep-purple accent-2" dark x-small depressed>
              NGN
              <v-icon right>mdi-chevron-down</v-icon>
            </v-btn>
          </v-card-title>
          <v-card-text
            class="pa-0 pt-4 pb-10 d-flex flex-column justify-center align-center text-center"
          >
            <v-card-text class="pa-0 text-body-1"
              >Withdrawable balance</v-card-text
            >
            <v-card-text class="pa-0 text-h5 font-weight-bold white--text"
              >₦480,000.90</v-card-text
            >
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-btn
          dark
          block
          x-large
          depressed
          class="text-capitalize"
          color="deep-purple accent-4"
        >
          Initiate escrow
          <v-icon right>mdi-arrow-up</v-icon>
        </v-btn>
        <v-btn
          dark
          block
          x-large
          outlined
          depressed
          class="text-capitalize mt-4"
          color="deep-purple accent-4"
        >
          Withdraw
          <v-icon right>mdi-arrow-down</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-col>
</template>
