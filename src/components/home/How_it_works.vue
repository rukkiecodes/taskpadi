<template>
  <v-container class="how_it_works">
    <div class="head_text">
      <p>How it works</p>
    </div>
    <p class="text-body-1 grey--text text--darken-4 text-center">The whole process is Simple, transparent and automated </p>
    <div class="tab_button mt-5">
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
    </div>
    <div class="how_it_works_cards">
      <Buyer_tab v-show="tab == 'buyer'" />
      <Seller_tab v-show="tab == 'seller'" />
    </div>
  </v-container>
</template>

<script>
import Buyer_tab from "./components/Buyer_tab.vue";
import Seller_tab from "./components/Seller_tab.vue";
export default {
  data: () => ({
    tab: "buyer",
  }),
  components: {
    Buyer_tab,
    Seller_tab
  },
};
</script>

<style scoped>
@import url(../../assets/styles/how_it_works.css);
</style>
