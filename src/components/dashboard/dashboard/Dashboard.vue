<template>
  <v-container class="py-9 px-8">
    <v-row justify="space-between" align="start">
      <AllTransactionCarousel />

      <v-row
        class="mt-2 flex-column-reverse flex-sm-row"
        justify="space-between"
        align="start"
      >
        <TransactionTable />
        <Actions />
      </v-row>
    </v-row>
    <ViewDetails />
  </v-container>
</template>

<script>
export default {
  components: {
    Actions: () => import("./components/Actions.vue"),
    AllTransactionCarousel: () =>
      import("./components/AllTransactionCarousel.vue"),
    TransactionTable: () => import("./components/TransactionTable.vue"),
    ViewDetails: () =>
      import("../../../components/app components/ViewDetails.vue"),
  },
}
</script>
