<template>
  <v-container>
    <v-row justify="start" align="start">
      <ProductImages />
      <ProductDetails />
    </v-row>
    <!-- <Footer /> -->
    <Form />
  </v-container>
</template>

<script>
import Form from './components/Form.vue'
export default {
  components: {
    ProductImages: () => import("./components/ProductImages.vue"),
    ProductDetails: () => import("./components/ProductDetails.vue"),
    Form,
    Footer: () => import("./components/Footer.vue"),
  },
}
</script>
