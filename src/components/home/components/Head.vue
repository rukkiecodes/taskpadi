<template>
  <v-container class="pa-0 head_container" fluid>
    <canvas class="model"></canvas>
    <div class="blurTopOne"></div>
    <div class="blurTopTwo"></div>
    <div class="pinkDiv"></div>

    <v-card :width="textCardWidth" color="transparent" class="hero" flat>
      <v-card-text
        class="text-h4 text-sm-h3 text-lg-h2 font-weight-bold white--text"
        id="quote"
      >
        Safe transactions,<br />Happy People
      </v-card-text>
      <v-card-text class="white--text text-body-1">
        Transact Securely with online vendors & marketplaces, gain customers
        trust with TrustPaddi
      </v-card-text>
      <v-card-actions>
        <v-btn
          dark
          large
          depressed
          width="160"
          color="deep-purple accent-4"
          class="text-capitalize"
          >Get Started</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
// @ts-nocheck
import init from "./three/head"
export default {
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        init()
      }, 2000)
    })
  },

  computed: {
    textCardWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "100%"
        case "sm":
          return "100%"
        case "md":
          return "100%"
        case "lg":
          return "40%"
        case "xl":
          return "40%"
      }
    },
  },
}
</script>

<style scoped>
@import url(./assets/head.css);
</style>
