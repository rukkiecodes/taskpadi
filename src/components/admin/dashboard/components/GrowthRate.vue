<template>
  <v-row justify="space-between" align="start">
    <v-col cols="12" md="8">
      <v-card flat class="growthCard">
        <v-card-title>Growth rate</v-card-title>
        <v-row justify="space-between" align="center" no-gutters>
          <v-col cols="12" lg="8">
            <v-sparkline
              :value="value"
              color="deep-purple accent-4"
              line-width="2"
              padding="16"
              stroke-linecap="round"
              smooth
              auto-draw
              auto-draw-duration="2000"
              label-size="0"
            ></v-sparkline>
          </v-col>
          <v-col>
            <p class="text-h6">Total</p>
            <p class="text-h4">$49000</p>
            <p class="text-body-2 font-weight-light grey--text text--darken-2">
              Income Top the Last Week
            </p>

            <v-divider class="mb-4"></v-divider>

            <v-row no-gutters>
              <v-col cols="10">
                <p
                  class="
                    text-body-2
                    font-weight-light
                    grey--text
                    text--darken-2
                  "
                >
                  Successful Deals
                </p>
              </v-col>
              <v-col cols="2">
                <span class="font-weight-bold grey--text text--darken-3"
                  >78%</span
                >
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col cols="10">
                <p
                  class="
                    text-body-2
                    font-weight-light
                    grey--text
                    text--darken-2
                  "
                >
                  Failed Deals
                </p>
              </v-col>
              <v-col cols="2">
                <span class="font-weight-bold grey--text text--darken-3"
                  >12%</span
                >
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    value: [200, 675, 410, 390, 310, 460, 250, 240],
  }),
}
</script>

<style scoped>
.v-sheet--offset {
  top: -24px;
  position: relative;
}
.growthCard {
  box-shadow: 0px 0px 20px 0px rgba(44, 101, 144, 0.1) !important;
}
</style>
