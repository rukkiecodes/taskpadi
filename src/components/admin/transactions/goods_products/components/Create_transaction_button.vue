<template>
  <div>
    <v-btn
      dark
      depressed
      color="blue accent-4"
      @click="goods_products.dialog = true"
      class="mb-2 text-capitalize font-weight-bold rounded-lg"
    >
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