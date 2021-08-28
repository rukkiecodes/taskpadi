<template>
  <v-row>
    <v-col cols="12">
      <v-row justify="center" align="center">
        <Title title="Who can use Trustpaddi" />
      </v-row>
      <v-row justify="space-between" align="start">
        <v-col v-for="(card, i) in cards" :key="i" cols="12" sm="12" md="4">
          <v-card flat color="transparent">
            <v-card-text class="py-10 text-center">
              <v-avatar size="100">
                <img :src="card.image" />
              </v-avatar>
            </v-card-text>
            <v-card-title class="text-h6 grey--text text--darken-3" v-text="card.title" />
            <v-card-text class="text-body-2 grey--text text--darken-3" v-text="card.body" />
            <v-card-text>
              <v-btn
                class="text-capitalize"
                color="deep-purple accent-4"
                depressed
                dark
                link
                :to="card.to"
                v-text="card.buttonText"
              />
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
// @ts-nocheck
export default {
  data: () => ({
    cards: [
      {
        image: require("../../../assets/trust/homepage icons/Group 139.svg"),
        title: `Individuals`,
        body: `Anyone can use TrustPaddi especially when it comes to making transactions with unknown online vendors, service providers or with people whom you haven't done business with before.`,
        buttonText: `Create a Transaction`,
        to: "/",
      },
      {
        image: require("../../../assets/trust/homepage icons/Group 140.svg"),
        title: `Businesses`,
        body: `Any Business owner can use TrustPaddi, with our escrow services you can gain the Trust and Reliability that big brands enjoy, boost your sales, avoid the risk associated with cash on delivery (COD), attend to as much order as you want and enjoy peace of mind knowing you will get paid instantly without stories.`,
        buttonText: `Get Started`,
        to: "/",
      },
      {
        image: require("../../../assets/trust/homepage icons/Group 141.svg"),
        title: `E-commerce`,
        body: `Potential customers are always skeptical about certain e-commerce sites which hasn't been recognised, the best way to gain your customers trust is to integrate TrustPaddi with your e-commerce website or marketplace.`,
        buttonText: `Integrate Now`,
        to: "/",
      },
    ],
  }),
  components: {
    Title: () => import("../../app_components/Title.vue"),
  },
};
</script>
