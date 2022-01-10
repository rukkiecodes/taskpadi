<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-row>
          <v-col cols="12">
            <Title title="Introducing TrustPaddi" />
          </v-col>
        </v-row>
        <v-row justify="space-between" align="center">
          <v-col cols="12" sm="5">
            <v-img
              lazy-src="../../../assets/trust/about.svg"
              src="../../../assets/trust/about.svg"
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-card flat color="transparent">
              <v-card-text
                class="grey--text text--darken-3 text-body-2"
                v-for="(text, i) in texts"
                :key="i"
                v-text="text"
              />
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    texts: [
      "TrustPaddi is Nigerians most trusted escrow platform built with the latest technology which enables safer transactions between online sellers & buyers whether online or offline, TrustPaddi has got you covered.",
      "Amist the thousands of sellers and service providers online, there are also scammers in disguise.",
      "Thousands are lost daily to scammers and genuine businesses are affected because customers become skeptical about most vendors online and this makes it hard for businesses to build there brand cause you have to think about various ways to get customers to trust your brand.",
      "This is why TrustPaddi was created, TrustPaddi protects the interest of both parties (Buyer & Seller). We enable online sellers make more sale's and gain the trust of there potential customers with our TrustPaddi links. We ensure that there online customers can buy without fear thus bridging the trust gap between online buyers and online sellers...",
    ],
  }),
  components: {
    Title: () => import("../../app components/Title.vue"),
  },
};
</script>
