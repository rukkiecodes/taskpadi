<template>
  <v-card class="storesCreadedCard rounded-lg">
    <v-card-title> Paddi links </v-card-title>
    <v-card-text>
      <donut-chart
        id="donut2"
        :data="donutData"
        colors='[ "#FF6384", "#36A2EB", "#FFCE56" ]'
        resize="true"
      ></donut-chart>
    </v-card-text>
  </v-card>
</template>

<script>
// @ts-nocheck
import Raphael from "raphael/raphael"
global.Raphael = Raphael
import { DonutChart } from "vue-morris"
export default {
  data: () => ({
    donutData: [
      { label: "In-Store Sales", value: 30 },
      { label: "Download Sales", value: 12 },
      { label: "Mail-Order Sales", value: 20 },
    ],
  }),

  components: {
    DonutChart,
  },

  mounted() {
    this.$nextTick(() => {})
  },
}
</script>

<style scoped>
.storesCreadedCard {
  box-shadow: 0px 0px 20px 0px rgba(5, 16, 26, 0.1) !important;
}
</style>
