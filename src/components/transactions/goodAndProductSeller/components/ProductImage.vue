<template>
  <v-card flat>
    <v-card-text class="mx-0 px-0">
      <v-file-input
        color="deep-purple accent-4"
        prepend-icon="mdi-image-outline"
        label="Product image"
        full-width
        outlined
        clearable
        dense
        truncate-length="15"
        @change="setGoodAndProductSellerProductImage"
      ></v-file-input>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
export default {
  methods: {
    setGoodAndProductSellerProductImage(e) {
      this.goodAndProductSeller.goodAndProductSellerInputs.productImage.push(e);
    },
  },
  computed: {
    ...mapState(["goodAndProductSeller"]),
  },
};
</script>
