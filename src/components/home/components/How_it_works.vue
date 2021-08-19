<template>
  <v-container class="how_it_works mt-16">
    <v-row justify="space-between" align="start">
      <v-col class="text-center text-heading text-sm-h6 text-md-h5" cols="12">
        <h1>How it works</h1>
        <p class="text-body-1 grey--text text--darken-4 text-center">
          The whole process is Simple, transparent and automated
        </p>
      </v-col>
      <v-col class="text-center" cols="12">
        <v-btn
          @click="tab = 'buyer'"
          :class="{
            'blue darken-3 white--text': tab == 'buyer',
            'blue--text text--darken-3': tab == 'seller',
          }"
          class="rounded-lg mr-3"
          depressed
        >
          Buyer
        </v-btn>
        <v-btn
          @click="tab = 'seller'"
          :class="{
            'blue darken-3 white--text': tab == 'seller',
            'blue--text text--darken-3': tab == 'buyer',
          }"
          class="rounded-lg"
          depressed
        >
          Seller
        </v-btn>
      </v-col>
    </v-row>
    <Buyer_tab v-show="tab == 'buyer'" />
    <Seller_tab v-show="tab == 'seller'" />
  </v-container>
</template>

<script>
import Buyer_tab from "./Buyer_tab.vue";
import Seller_tab from "./Seller_tab.vue";
export default {
  data: () => ({
    tab: "buyer",
  }),
  components: {
    Buyer_tab,
    Seller_tab,
  },
};
</script>
