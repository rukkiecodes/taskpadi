<template>
  <v-container class="mt-16">
    <v-row justify="space-between" align="start">
      <v-col v-for="(card, index) in cards" :key="index" cols="12" sm="4">
        <v-card flat color="indigo lighten-5 rounded-xl">
          <v-card-text class="text-center">
            <v-avatar size="70" color="white" class="my-6">
              <img :src="card.image" />
            </v-avatar>
          </v-card-text>
          <v-card-text class="text-body-1 grey--text text--darken-4" v-text="card.text" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    cards: [
      {
        image: require("../../../assets/trust/sad-emoticon-square-face.png"),
        text: `We know how Devastating it can be losing money to an online fraudster, and if not Cash On Delivery, we're sure you won't make any purchases.`,
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