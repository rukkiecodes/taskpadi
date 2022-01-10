<template>
  <v-container class="py-9 px-8">
    <v-row justify="space-between" align="start">
      <AllTransactionCarousel />
      <Activities />
      <Actions />
      <TransactionTable />
    </v-row>
    <ViewDetails />
  </v-container>
</template>

<script>
export default {
  components: {
    Actions: () => import("./components/Actions.vue"),
    Activities: () => import("./components/Activities.vue"),
    AllTransactionCarousel: () =>
      import("./components/AllTransactionCarousel.vue"),
    TransactionTable: () => import("./components/TransactionTable.vue"),
    ViewDetails: () =>
      import("../../../components/app components/ViewDetails.vue"),
  },
}
</script>
