<template>
  <v-row justify="space-between" align="start">
    <v-col v-for="(sell, i) in sales" :key="i" cols="12" sm="4" lg="3">
      <v-card class="salesCard px-2" min-height="120" flat>
        <v-card-title class="text-body-2 grey--text text--darken-1">{{
          sell.title
        }}</v-card-title>

        <v-row no-gutters>
          <v-col cols="2">
            <span class="text-body-1 font-weight-bold">{{ sell.money }}</span>
          </v-col>
          <v-col cols="8">
            <v-sparkline
              :labels="sell.labels"
              :value="sell.value"
              :color="sell.color"
              line-width="7"
              padding="16"
              auto-draw
              auto-draw-duration="2000"
              label-size="0"
              stroke-linecap="round"
            ></v-sparkline>
          </v-col>
          <v-col cols="2">
            <p class="text-body-1" :class="sell.textColor">
              {{ sell.rate }}
              <v-icon :color="sell.color" small>{{ sell.icon }}</v-icon>
            </p>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    sales: [
      {
        title: "Total Transactions",
        money: "$18378",
        label: ["12am", "3am", "6am", "9am"],
        value: [200, 675, 410, 390],
        rate: "+14%",
        color: "deep-purple accent-4",
        textColor: "deep-purple--text text--accent-4",
        icon: "mdi-arrow-up-bold",
      },
      {
        title: "Total Orders",
        money: "$190",
        label: ["12am", "3am", "6am", "9am"],
        value: [200, 675, 410, 390],
        rate: "-6%",
        color: "pink",
        textColor: "pink--text",
        icon: "mdi-arrow-down-bold",
      },
      {
        title: "Seller Revenue",
        money: "$45",
        label: ["12am", "3am", "6am", "9am"],
        value: [200, 675, 410, 390],
        rate: "+0.36%",
        color: "cyan lighten-2",
        textColor: "cyan--text text--lighten-2",
        icon: "mdi-arrow-up-bold",
      },
      {
        title: "TrustPaddi revenue",
        money: "$60",
        label: ["12am", "3am", "6am", "9am"],
        value: [200, 675, 410, 390],
        rate: "+0.45%",
        color: "amber darken-2",
        textColor: "amber--text text--lighten-1",
        icon: "mdi-arrow-up-bold",
      },
    ],
  }),
}
</script>

<style scoped>
.v-sheet--offset {
  top: -24px;
  position: relative;
}

.salesCard {
  box-shadow: 0px 0px 20px 0px rgba(44, 101, 144, 0.1) !important;
}
</style>
