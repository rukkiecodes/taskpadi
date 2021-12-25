<template>
  <v-card class="transactionDetailes" flat>
    <v-card-text>
      <v-card flat>
        <v-row no-gutters align="center">
          <v-col cols="3">
            <v-avatar color="#ECFFF6" size="60" rounded>
              <v-icon color="#65F9B3" size="34">mdi-bank-transfer</v-icon>
            </v-avatar>
          </v-col>
          <v-col cols="9">
            <v-row no-gutters justify="space-between" align="center">
              <v-col class="d-flex justify-start">
                <span class="grey--text text--darken-4 text-body-2">Dailly expenses</span>
              </v-col>
              <v-col class="d-flex justify-end">
                <span class="grey--text text--darken-3 text-body-2 font-weight-bold">$ 620</span>
              </v-col>
            </v-row>
            <v-row no-gutters justify="space-between" align="center">
              <v-col cols="12" class="d-flex justify-start">
                <v-slider
                  v-model="value"
                  thumb-color="transparent"
                  height="10"
                  track-color="#FAFAFB"
                  color="#65F9B3"
                  step="1"
                  hide-details
                  dense
                ></v-slider>
              </v-col>
            </v-row>
            <v-row no-gutters justify="space-between" align="center">
              <v-col class="d-flex justify-start">
                <span class="grey--text text--darken-2 text-body-2">45 Transaction</span>
              </v-col>
              <v-col class="d-flex justify-end">
                <span class="grey--text text--darken-2 text-body-2">67%</span>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    value: 10,

    transactionDetailes: [
      {
        icon: "mdi-bank-transfer",
        title: "Dailly expenses",
        amount: "$ 620"
      }
    ]
  }),

  mounted() {
    this.$nextTick(() => {
      const sliders = document.querySelectorAll(".transactionDetailes .v-slider--horizontal .v-slider__track-container")

      for(let i = 0; i <= sliders.length; i++) {
        sliders[i].style.height = "5px"
      }
    })
  }
}
</script>

<style scoped>
.transactionDetailes {
  box-shadow: 0px 0px 20px 0px rgba(44, 101, 144, 0.1) !important;
}
</style>
