<template>
  <v-container>
    <v-row justify="start" align="start">
      <ProductImages />
    </v-row>
  </v-container>
</template>

<script>
export default {
  components: {
    ProductImages: () => import("./components/ProductImages.vue")
  },
  computed: {},
}
</script>
