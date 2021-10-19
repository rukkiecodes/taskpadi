<template>
  <v-container class="py-9 px-8">
    <v-row justify="space-between" align="start">
      <TransactionCards />
      <TransactionTable />
    </v-row>
  </v-container>
</template>

<script>
export default {
  components: {
    TransactionCards: () => import("./components/TransactionCards.vue"),
    TransactionTable: () => import("./components/TransactionTable.vue"),
  },
}
</script>
