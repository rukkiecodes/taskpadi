<template>
  <v-col class="px-0" cols="12" sm="6">
    <v-carousel
      cycle
      height="300"
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
