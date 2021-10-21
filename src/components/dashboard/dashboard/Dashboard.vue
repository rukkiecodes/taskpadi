<template>
  <v-container class="py-9 px-8">
    <v-row justify="space-between" align="start">
      <TransactionCards />
      <Activities />
      <TransactionTable />
    </v-row>
    <ViewDetails />
  </v-container>
</template>

<script>
export default {
  components: {
    TransactionCards: () => import("./components/TransactionCards.vue"),
    TransactionTable: () => import("./components/TransactionTable.vue"),
    ViewDetails: () => import("../../app components/ViewDetails.vue"),
    Activities: () => import("./components/Activities.vue"),
  },
}
</script>
