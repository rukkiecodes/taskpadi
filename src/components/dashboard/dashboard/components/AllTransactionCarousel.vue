<template>
  <v-col class="pa-0 pr-sm-3" cols="12" sm="6">
    <v-carousel
      height="300"
      hide-delimiters
      show-arrows-on-hover
      hide-delimiter-background
    >
      <v-carousel-item>
        <CurrentBallance />
      </v-carousel-item>
      <v-carousel-item>
        <TrustBallance />
      </v-carousel-item>
      <v-carousel-item>
        <WithdrawableBallance />
      </v-carousel-item>
    </v-carousel>
  </v-col>
</template>

<script>
export default {
  components: {
    CurrentBallance: () => import("./CurrentBallance.vue"),
    TrustBallance: () => import("./TrustBallance.vue"),
    WithdrawableBallance: () => import("./WithdrawableBallance.vue"),
    // Activities: () => import("./components/Activities.vue"),
    // Actions: () => import("./components/Actions.vue"),
  },
}
</script>
