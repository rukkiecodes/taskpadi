<template>
  <v-col class="pa-0 pr-sm-3" cols="12">
    <v-row justify="space-between" align="start">
      <v-col cols="12" sm="4">
        <CurrentBallance />
      </v-col>
      <v-col cols="12" sm="4">
        <TrustBallance />
      </v-col>
      <v-col cols="12" sm="4">
        <WithdrawableBallance />
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
export default {
  components: {
    CurrentBallance: () => import("./CurrentBallance.vue"),
    TrustBallance: () => import("./TrustBallance.vue"),
    WithdrawableBallance: () => import("./WithdrawableBallance.vue"),
  },
}
</script>
