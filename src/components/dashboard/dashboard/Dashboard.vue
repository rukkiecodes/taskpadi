<template>
  <v-container class="py-9 px-8">
    <v-row justify="space-between" align="start">
      <TransactionCards />
      <Actions />
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
    Activities: () => import("./components/Activities.vue"),
    Actions: () => import("./components/Actions.vue"),
    ViewDetails: () =>
      import("../../../components/app components/ViewDetails.vue"),
  },
}
</script>
