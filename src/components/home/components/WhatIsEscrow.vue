<template>
  <v-row>
    <v-col cols="12">
      <v-row justify="center" align="center">
        <Title title="What is Escrow?" />
      </v-row>
      <v-row
        class="flex-column-reverse flex-md-row"
        justify="space-between"
        align="center"
      >
        <v-col cols="12" sm="12" md="6">
          <v-card flat color="transparent">
            <v-card-text class="text-body-1 grey--text text--darken-3">
              "Escrow" is a financial agreement in which a third party controls
              payments between two transacting parties and only releases the
              funds involved when all of the terms of a given contract are met.
            </v-card-text>
            <v-card-text class="text-body-1 grey--text text--darken-3">
              Therefore, Whether you’re dealing with a real estate transaction,
              an online seller or a Crypto trader etc escrow is the best means
              to transact Securely and this is what TrustPaddi offers, Escrow
              Protection at it's best.
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="12" md="4">
          <v-img
            lazy-src="../../../assets/trust/Cash Payment-bro.png"
            src="../../../assets/trust/Cash Payment-bro@2x.png"
          />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  components: {
    Title: () => import("../../app_components/Title.vue"),
  },
};
</script>
