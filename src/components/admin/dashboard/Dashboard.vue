<template>
  <v-container>
    <Sales />
    <v-row justify="space-between" align="start">
      <v-col cols="12" md="8">
        <GrowthRate />
      </v-col>
      <v-col cols="12" md="4">
        <TransactionDetails />
        <Despute />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Sales from "./components/Sales.vue"
import GrowthRate from "./components/GrowthRate.vue"
import TransactionDetails from "./components/TransactionDetails.vue"
import Despute from "./components/Despute.vue"
export default {
  components: {
    Sales,
    GrowthRate,
    TransactionDetails,
    Despute
  },
}
</script>

<style></style>
