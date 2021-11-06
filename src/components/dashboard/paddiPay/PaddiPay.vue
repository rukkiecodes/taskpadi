<template>
  <v-container>
    <v-row justify="start" align="start">
      <ProductImages />
      <ProductDetails />
      <MerchantDetails />
    </v-row>
  </v-container>
</template>

<script>
export default {
  components: {
    ProductImages: () => import("./components/ProductImages.vue"),
    ProductDetails: () => import("./components/ProductDetails.vue"),
    MerchantDetails: () => import("./components/MerchantDetails.vue")
  },
}
</script>
