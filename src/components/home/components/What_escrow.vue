<template>
  <v-container class="mt-16">
    <v-row
      class="flex-column-reverse flex-sm-row"
      justify="space-between"
      align="center"
    >
      <v-col cols="12" sm="6">
        <v-card flat color="indigo lighten-5" class="rounded-xl">
          <v-card-title class="grey--text text--darken-4">
            What is Escrow?
          </v-card-title>
          <v-card-text class="grey--text text--darken-3">
            "Escrow" is a financial agreement in which a third party controls
            payments between two transacting parties and only releases the funds
            involved when all of the terms of a given contract are met.
          </v-card-text>
          <v-card-text class="grey--text text--darken-3">
            Therefore, Whether you’re dealing with a real estate transaction, an
            online seller or a Crypto trader etc escrow is the best means to
            transact Securely and this is what TrustPaddi offers, Escrow
            Protection at it's best.
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="3">
        <v-img
          lazy-src="../../../assets/trust/Cash Payment-bro@2x.png"
          src="../../../assets/trust/Cash Payment-bro@2x.png"
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: [
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2" },
    ],
  }),
};
</script>
