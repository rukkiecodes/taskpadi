<template>
  <v-card color="deep-purple lighten-5" flat>
    <v-row justify="space-between" align="start">
      <v-col v-for="(card, i) in cards" :key="i" cols="12" sm="12" md="6">
        <v-card flat color="transparent" class="pa-2">
          <v-row justify="start" align="center">
            <v-col class="text-center" cols="3">
              <v-avatar size="60">
                <img :src="card.image" />
              </v-avatar>
            </v-col>
            <v-col cols="9">
              <span
                class="grey--text text--darken-3 text-body-1"
                v-text="card.text"
              />
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    cards: [
      {
        image: require("../../../../../assets/trust/homepage icons/Group 112.svg"),
        text: `Buyer and seller agree on the terms of the transaction: Eg
                  Price, duration, proposed delivery date etc...`,
      },
      {
        image: require("../../../../../assets/trust/homepage icons/Group 117.svg"),
        text: `Buyer Initiates (Begins) the escrow: either parties can creates an escrow transaction.`,
      },
      {
        image: require("../../../../../assets/trust/homepage icons/Group 113.svg"),
        text: `Buyer pays to TrustPaddi: TrustPaddi holds on to the payment.`,
      },
      {
        image: require("../../../../../assets/trust/homepage icons/Group 115.svg"),
        text: `Merchandise is shipped to the buyer: Seller ships the merchandise to you or we help you retrieve the merchandise and deliver it to you.`,
      },
      {
        image: require("../../../../../assets/trust/homepage icons/Group 130.svg"),
        text: `Buyer confirms the merchandise : He/she verifies the product to see if its exactly what he ordered.`,
      },
      {
        image: require("../../../../../assets/trust/homepage icons/Group 118.svg"),
        text: `TrustPaddi Pays the Seller after confirmation.`,
      },
    ],
  }),
};
</script>
