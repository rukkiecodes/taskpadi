<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-row>
          <v-col cols="12">
            <Title title="Benefits of TrustPaddi" />
          </v-col>
        </v-row>
        <v-row justify="space-between" align="start">
          <v-col v-for="(card, i) in cards" :key="i" cols="12" sm="4">
            <p
              class="deep-purple--text text--accent-4 text-h5"
              v-text="card.title"
            />
            <p
              v-for="(text, i) in card.texts"
              :key="i"
              class="grey--text text--darken-3"
            >
              <v-icon class="mt-n1 deep-purple--text text--accent-4" size="15"
                >mdi-radiobox-marked</v-icon
              >
              {{ text }}
            </p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    cards: [
      {
        title: "For Sellers",
        texts: [
          "Gain Customers Trust",
          "Increase Sales",
          "Sell to customers outside your reach (outside your state)",
          "Get Free escrow stores",
          "Avoid The risks associated with pay on delivery",
          "Attract Serious Customers and repels the unserious ones",
        ],
      },
      {
        title: "For Buyers",
        texts: [
          "Safe and secure transactions with unknown vendors",
          "We ensure you get exactly what you ordered",
          "Guaranteed refund within 24hours of deliver",
          "24/7 Customer Support",
          "Fast Delivery"
        ],
      },
      {
        title: "For marketplace",
        texts: [
          "Gain customer trust as an upcoming e-commerce brand",
          "It's secure",
          "Well Written Documentation",
          "24/7 Customer Support"
        ],
      },
    ],
  }),
  components: {
    Title: () => import("../../app components/Title.vue"),
  },
};
</script>
