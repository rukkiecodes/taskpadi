<template>
  <v-row
    class="flex-column-reverse flex-md-row"
    justify="space-between"
    align="center"
    ref="head"
  >
    <v-col cols="12" sm="12" md="6" lg="5">
      <p class="text-h4 grey--text text--darken-4">
        Safe Transactions,<br />Happy People
      </p>
      <p class="grey--text text--darken-3 text-body-2">
        Transact Securely with online vendors & marketplaces,<br />gain
        customers trust with TrustPaddi
      </p>
      <v-card
        height="45"
        class="pa-1 d-flex justify-space-between"
        style="background: none"
        outlined
      >
        <ImSelling />
        <Accessories />
      </v-card>
      <v-card
        height="45"
        class="pa-1 mt-4 d-flex justify-space-between align-center"
        style="background: none"
        outlined
      >
        <Amount />
      </v-card>
      <v-btn
        height="45"
        color="deep-purple accent-4"
        depressed
        dark
        class="mt-4 px-10"
      >
        Get started
      </v-btn>
    </v-col>
    <v-col cols="12" sm="12" md="6" lg="6">
      <v-img
        lazy-src="../../../../assets/trust/Group 57.png"
        src="../../../../assets/trust/home_phone.png"
      ></v-img>
    </v-col>
  </v-row>
</template>

<script>
export default {
  components: {
    ImSelling: () => import("./components/ImSelling.vue"),
    Accessories: () => import("./components/Accessories.vue"),
    Amount: () => import("./components/Amount.vue"),
  },
};
</script>
