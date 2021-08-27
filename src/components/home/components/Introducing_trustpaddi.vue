<template>
  <v-container class="mt-16">
    <v-row justify="space-between" align="start">
      <Headings heading="Introducing TrustPaddi" />
      <v-col v-for="(card, index) in cards" :key="index" class="mt-8" cols="12" sm="4">
        <v-card flat color="transparent" class="text-center">
          <v-card-text>
            <v-avatar size="80" color="white">
              <img :src="card.image" />
            </v-avatar>
          </v-card-text>
          <v-card-text class="grey--text text--darken-4 text-body-1" v-text="card.text" />
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
        image: require("../../../assets/trust/homepage icons/Group 129.svg"),
        text: "TrustPaddi is convenient for both buyer and the seller.",
      },
      {
        image: require("../../../assets/trust/homepage icons/Group 130.svg"),
        text:
          "TrustPaddi ensures buyer and seller protection, and protects the interest of both parties.",
      },
      {
        image: require("../../../assets/trust/homepage icons/Group 131.svg"),
        text:
          "We help deliver goods on time to customers with our network of trusted logistics partners",
      },
    ],
  }),

  components: {
    Headings: () => import("./Headings.vue")
  }
};
</script>
