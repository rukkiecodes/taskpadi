<template>
  <v-container>
    <v-row :class="rowClass" justify="start" align="start">
      <ProductImages />
      <ProductDetails />
    </v-row>
    <Footer />
    <Form />
  </v-container>
</template>

<script>
import Form from "./components/Form.vue"
export default {
  components: {
    ProductImages: () => import("./components/ProductImages.vue"),
    ProductDetails: () => import("./components/ProductDetails.vue"),
    Form,
    Footer: () => import("./components/Footer.vue"),
  },

  computed: {
    rowClass() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "mb-16"
        case "sm":
          return "mb-0"
        case "md":
          return "mb-16"
        case "lg":
          return "mb-16"
        case "xl":
          return "mb-16"
      }
    },
  },
}
</script>
