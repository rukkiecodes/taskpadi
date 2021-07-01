<template>
  <v-container class="testimonials">
    <div class="head_text">
      <p>Testimonials</p>
    </div>
    <div class="slide">
      <v-sheet class="mx-auto sheet" elevation="0">
        <v-slide-group v-model="model">
          <v-slide-item v-for="(card, index) in cards" :key="index">
            <v-card
              width="320"
              flat
              class="ma-4 sheet_card rounded-xl px-6 py-12"
            >
              <v-card-text class="ma-0 pa-0">
                <div class="head mb-5">
                  <div class="icon">
                    <v-icon size="80">{{ card.icon }}</v-icon>
                  </div>
                </div>
              </v-card-text>
              <v-card-text class="ma-0 pa-0 texts">
                <p class="p1 text-h6 font-weight-bold">{{ card.title }}</p>
                <p class="p2 text-body-1 font-weight-bold mt-n5">
                  {{ card.position }}
                </p>
                <p class="p3 text-body-2">{{ card.text }}</p>
              </v-card-text>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    cards: [
      {
        icon: "mdi-account",
        title: "Mrs Chidinma Okere",
        position: "CEO Chi's apperel (Seller)",
        text: `Anytime my potential customers dobt the genuinity of my business but really want to need the product, we use TrustPaddi and they are very reliable.`,
      },
      {
        icon: "mdi-account",
        title: "Mr David Elendu",
        position: "Crypto Trader & Buyer",
        text: `For all my Crypto transactions with any Crypto trader, I use TrustPaddi. I pay to TrustPaddi, I get my Crypto and then I approve payment instantly, so simple and reliable.`,
      },
      {
        icon: "mdi-account",
        title: "Mr Celestine Obinna",
        position: "Online buyer",
        text: `TrustPaddi givese total control over my transaction with unknown sellers, now I can comfortably buy any product I ant online without fear.`,
      }
    ],
    model: null,
  }),
};
</script>

<style scoped>
@import url(../../assets/styles/testimonials.css);
</style>
