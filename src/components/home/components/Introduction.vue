<template>
  <v-row>
    <v-col cols="12">
      <v-row justify="center" align="center">
        <Title title="Introducing TrustPaddi" />
      </v-row>
      <v-row class="mt-10" justify="space-between" align="start">
        <v-col v-for="(card, i) in cards" :key="i" cols="12" sm="4">
          <v-card flat color="transparent" class="text-center">
            <v-avatar size="70">
              <img :src="card.image" />
            </v-avatar>
            <v-card-text
              class="grey--text text--darken-3 text-body-1"
              v-text="card.text"
            />
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
        image: require("../../../assets/trust/homepage icons/Group 129.svg"),
        text: `TrustPaddi is convenient for both buyer and the seller.`,
      },
      {
        image: require("../../../assets/trust/homepage icons/Group 130.svg"),
        text: `TrustPaddi ensures buyer and seller protection, and protects the interest of both parties.`,
      },
      {
        image: require("../../../assets/trust/homepage icons/Group 131.svg"),
        text: `We help deliver goods on time to customers with our network of trusted logistics partners.`,
      },
    ],
  }),
  components: {
    Title: () => import("../../app components/Title.vue"),
  },
};
</script>

<style></style>
