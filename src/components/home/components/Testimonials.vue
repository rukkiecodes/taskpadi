<template>
  <v-row>
    <v-col cols="12">
      <v-row justify="center" align="center">
        <Title title="Testimonials" />
      </v-row>
      <v-row class="flex-row-reverse flex-md-row" justify="space-between" align="center">
        <v-item-group v-model="window" class="shrink mr-6" mandatory>
          <v-item
            v-for="(card, index) in testimonials.slice(0, 5)"
            :key="index"
            v-slot="{ active, toggle }"
          >
            <div>
              <v-btn
                color="deep-purple accent-4"
                :input-value="active"
                icon
                @click="toggle"
              >
                <v-icon>mdi-record</v-icon>
              </v-btn>
            </div>
          </v-item>
        </v-item-group>

        <v-col>
          <v-window v-model="window" class="elevation-0 rounded-xl" vertical>
            <v-window-item
              v-for="(card, index) in testimonials.slice(0, 5)"
              :key="index"
              class="rounded-xl"
            >
              <v-card color="white" class="rounded-xl pa-4" flat>
                <v-card-text>
                  <v-row class="mb-4 pa-2" align="center">
                    <v-avatar
                      size="40"
                      color="deep-purple accent-4"
                      class="mr-4 text-uppercase white--text"
                      v-text="card.title.slice(0, 2)"
                    />
                    <strong
                      class="text-h6 grey--text text--darken-3 font-weight-bold"
                      v-text="card.title"
                    />
                  </v-row>

                  <p
                    class="text-body-2 grey--text text--darken-3 font-weight-bold"
                    v-text="card.position"
                  />
                  <p
                    class="text-body-2 grey--text text--darken-3"
                    v-text="card.text"
                  />
                </v-card-text>
              </v-card>
            </v-window-item>
          </v-window>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    window: 0,
    testimonials: [
      {
        title: "Mrs Chidinma Okere",
        position: "CEO Chi's apperel (Seller)",
        text: `Anytime my potential customers dobt the genuinity of my business but really want to need the product, we use TrustPaddi and they are very reliable.`,
      },
      {
        title: "Mr David Elendu",
        position: "Crypto Trader & Buyer",
        text: `For all my Crypto transactions with any Crypto trader, I use TrustPaddi. I pay to TrustPaddi, I get my Crypto and then I approve payment instantly, so simple and reliable.`,
      },
      {
        title: "Mr Celestine Obinna",
        position: "Online buyer",
        text: `TrustPaddi givese total control over my transaction with unknown sellers, now I can comfortably buy any product I ant online without fear.`,
      },
      {
        title: "Mr Celestine Obinna",
        position: "Online buyer",
        text: `TrustPaddi givese total control over my transaction with unknown sellers, now I can comfortably buy any product I ant online without fear.`,
      },
      {
        title: "Mr Celestine Obinna",
        position: "Online buyer",
        text: `TrustPaddi givese total control over my transaction with unknown sellers, now I can comfortably buy any product I ant online without fear.`,
      },
      {
        title: "Mr Celestine Obinna",
        position: "Online buyer",
        text: `TrustPaddi givese total control over my transaction with unknown sellers, now I can comfortably buy any product I ant online without fear.`,
      },
    ],
  }),
  components: {
    Title: () => import("../../app components/Title.vue"),
  },
};
</script>
