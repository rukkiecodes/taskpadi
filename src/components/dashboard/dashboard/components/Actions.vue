<template>
  <v-col class="px-0" cols="12">
    <v-row justify="space-between" align="start">
      <v-col cols="12" sm="6">
        <v-btn
          dark
          block
          x-large
          depressed
          class="text-capitalize"
          color="deep-purple accent-4"
        >
          Initiate escrow
          <v-icon right>mdi-arrow-up</v-icon>
        </v-btn>
        <v-btn
          dark
          block
          x-large
          outlined
          depressed
          class="text-capitalize mt-4"
          color="deep-purple accent-4"
        >
          Withdraw
          <v-icon right>mdi-arrow-down</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="12" sm="6">
        <v-carousel
          height="120"
          hide-delimiters
          show-arrows-on-hover
          hide-delimiter-background
        >
          <v-carousel-item v-for="(card, i) in cards" :key="i">
            <v-card flat class="pa-0 ma-0 mb-4" height="100%" width="100%">
              <v-list>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-subtitle
                      class="text-body-2"
                      v-text="card.subtitle"
                    />
                    <v-list-item-title
                      class="text-h6 grey--text text--darken-3"
                      v-text="card.amount"
                    />
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-list-item-avatar color="deep-purple accent-4" size="50">
                      <v-icon dark v-text="card.icon" />
                    </v-list-item-avatar>
                  </v-list-item-action>
                </v-list-item>
              </v-list>
            </v-card>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
export default {
  data: () => ({
    cards: [
      {
        subtitle: "Orders",
        amount: "1,235",
        icon: "mdi-file-document-outline",
      },
      {
        subtitle: "Revenue",
        amount: "$35, 723",
        icon: "mdi-package-down",
      },
    ],
  }),
}
</script>
