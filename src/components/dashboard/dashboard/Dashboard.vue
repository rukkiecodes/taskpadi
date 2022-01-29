<template>
  <v-container class="py-9 px-8">
    <v-row justify="space-between" align="start">
      <AllTransactionCarousel />

      <v-row
        class="mt-2 flex-column-reverse flex-sm-row"
        justify="space-between"
        align="start"
      >
        <TransactionTable v-if="tableBig" />
        <Actions />
      </v-row>
      <TransactionTable v-if="tableSmall" />
    </v-row>
  </v-container>
</template>

<script>
export default {
  components: {
    Actions: () => import("./components/Actions.vue"),
    AllTransactionCarousel: () =>
      import("./components/AllTransactionCarousel.vue"),
    TransactionTable: () => import("./components/TransactionTable.vue"),
  },

  computed: {
    tableSmall() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return true
        case "sm":
          return false
        case "md":
          return false
        case "lg":
          return false
        case "xl":
          return false
      }
    },
    tableBig() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return false
        case "sm":
          return true
        case "md":
          return true
        case "lg":
          return true
        case "xl":
          return true
      }
    },
  },
}
</script>
