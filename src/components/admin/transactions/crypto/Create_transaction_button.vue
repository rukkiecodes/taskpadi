<template>
  <div>
    <v-btn
      dark
      depressed
      color="indigo accent-4"
      @click="goods_products.dialog = true"
      class="text-capitalize font-weight-bold rounded-lg"
      height="40"
    >
      <v-icon class="mr-2">mdi-bank-transfer</v-icon>
      Create Transaction
    </v-btn>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["goods_products"]),
    goods_products: {
      get() {
        return this.$store.state.goods_products;
      },
      set(new_value) {
        this.$store.state.goods_products = new_value;
      },
    },
  },
};
</script>
