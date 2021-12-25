<template>
  <v-container>
    <Sales />
    <GrowthRate />
  </v-container>
</template>

<script>
import Sales from "./components/Sales.vue"
import GrowthRate from "./components/GrowthRate.vue"
export default {
  components: {
    Sales,
    GrowthRate
  }
}
</script>

<style></style>
