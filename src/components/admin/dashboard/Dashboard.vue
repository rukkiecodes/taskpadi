<template>
  <v-container>
    <Sales />
    <v-row justify="space-between" align="start">
      <v-col cols="12" md="8">
        <GrowthRate />
      </v-col>
      <v-col cols="12" md="4">
        <TransactionDetails />
      </v-col>
      <v-col cols="12" md="4">
        <StoresCreated />
      </v-col>
      <v-col cols="12" md="4">
        <UserStats />
      </v-col>
      <v-col cols="12" md="4">
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
import StoresCreated from "./components/StoresCreated.vue"
import UserStats from "./components/UserStats.vue"
export default {
  components: {
    Sales,
    GrowthRate,
    TransactionDetails,
    Despute,
    StoresCreated,
    UserStats
  },
}
</script>

<style></style>
