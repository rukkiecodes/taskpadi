<template>
  <v-container>
    <v-row :class="rowClass" justify="start" align="start">
      <ProductImages />
      <ProductDetails />
    </v-row>
  </v-container>
</template>

<script>
import ProductImages from "./components/ProductImages.vue"
import ProductDetails from "./components/ProductDetails.vue"
import { mapActions } from "vuex"
export default {
  components: {
    ProductImages,
    ProductDetails
  },

  created() {
    this.viewSingleProduct()
  },

  methods: {
    ...mapActions(["viewSingleProduct"])
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
