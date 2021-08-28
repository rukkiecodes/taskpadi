<template>
  <v-row justify="space-between" align="start">
    <v-col v-for="(card, i) in cards" :key="i" cols="12" sm="4">
      <v-card color="transparent" flat>
        <v-card-text class="text-center py-12">
          <v-avatar tile size="70">
            <img :src="card.image" />
          </v-avatar>
        </v-card-text>
        <v-card-text
          class="grey--text text--darken-3 text-body-1"
          v-text="card.text"
        />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
// @ts-nocheck
export default {
  data: () => ({
    cards: [
      {
        image: require("../../../assets/trust/sad-emoticon-square-face.png"),
        text: `We know how Devastating it can be losing money to an online fraudster,
          and if not Cash On Delivery, we're sure you won't make any purchases.`,
      },
      {
        image: require("../../../assets/trust/tap.png"),
        text: `For business owners and service providers, We also know how hard it can be getting potential customers to trust the genuineness of your upcoming brand online, on the other hand Cash on delivery isn't always a convenient option for you.`,
      },
      {
        image: require("../../../assets/trust/cooperation.png"),
        text: `Therefore, It all boils down to the issue of "trust" and this is what TrustPaddi is all about, bridging the trust gap between potential customers, service providers & businesses online while protecting there various interest.`,
      },
    ],
  }),
};
</script>
