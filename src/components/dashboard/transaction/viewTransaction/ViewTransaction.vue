<template>
  <v-container>
    <v-row :class="rowClass" justify="start" align="start">
      <ProductImages />
      <ProductDetails />
    </v-row>
  </v-container>
</template>

<script>
// @ts-nocheck
import { mapActions, mapState } from "vuex"
import ProductImages from "./components/ProductImages.vue"
import ProductDetails from "./components/ProductDetails.vue"
export default {
  components: {
    ProductImages,
    ProductDetails,
  },

  mounted() {
    this.$nextTick(() => {
      this.viewSingleTransaction()
    })
  },

  methods: {
    ...mapActions(["viewSingleTransaction"]),
  },

  computed: {
    ...mapState(["transaction"]),

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
