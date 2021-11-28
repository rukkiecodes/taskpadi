<template>
  <v-row
    align="start"
    :class="sectionClass"
    :no-gutters="noGutter"
    justify="space-between"
    class="rounded-xl"
  >
    <v-col cols="12" sm="6" lg="5">
      <v-card
        width="100%"
        height="500"
        elevation="12"
        color="transparent"
        class="ma-0 pa-0 rounded-xl"
        data-aos="fade-down"
      >
        <v-img
          height="100%"
          class="pa-0 rounded-xl"
          position="center center"
          src="../../../../assets/trust/home/seller.jpg"
          lazy-src="../../../../assets/trust/home/seller.jpg"
        />
      </v-card>
    </v-col>

    <v-col cols="12" sm="6" lg="6">
      <v-card flat class="rounded-lg" color="transparent" data-aos="fade-up">
        <v-card-text v-for="(card, i) in cards" :key="i">
          <p class="text-h5 text-md-h4 font-weight-bold" :class="textColor" v-text="card.title" />
          <p :class="textColor" v-for="(text, i) in card.texts" :key="i">
            <v-icon :class="dotIconColor" class="mt-n1" size="15">mdi-radiobox-marked</v-icon>
            {{ text }}
          </p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
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
    ],
  }),

  computed: {
    noGutter() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return true
        case "sm":
          return false
        case "md":
          return false
        case "lg":
          return false
        case "xl":
          return false
      }
    },
    textColor() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "white--text"
        case "sm":
          return "grey--text text--darken-4"
        case "md":
          return "grey--text text--darken-4"
        case "lg":
          return "grey--text text--darken-4"
        case "xl":
          return "grey--text text--darken-4"
      }
    },
    dotIconColor() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "white--text"
        case "sm":
          return "deep-purple--text text--accent-4"
        case "md":
          return "deep-purple--text text--accent-4"
        case "lg":
          return "deep-purple--text text--accent-4"
        case "xl":
          return "deep-purple--text text--accent-4"
      }
    },
    sectionClass() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "deep-purple accent-4"
        case "sm":
          return "transparent"
        case "md":
          return "transparent"
        case "lg":
          return "transparent"
        case "xl":
          return "transparent"
      }
    },
  },
}
</script>
