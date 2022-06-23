<template>
  <v-container>
    <v-row :class="rowClass" justify="start" align="start">
      <OrderImages />
      <OrderDetails />
    </v-row>
  </v-container>
</template>

<script>
// @ts-nocheck
import { mapActions, mapState } from "vuex"
import OrderDetails from "./components/OrderDetails.vue"
import OrderImages from "./components/OrderImages.vue"
export default {
  components: {
    OrderDetails,
    OrderImages
  },

  mounted () {
    this.$nextTick(() => {
      this.viewSingleOrder()
    })
  },

  methods: {
    ...mapActions(["viewSingleOrder"]),
  },

  computed: {
    ...mapState(["order"]),

    rowClass () {
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
