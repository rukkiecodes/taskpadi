<template>
  <v-container
    fluid
    style="background: #EFF1FF"
    class="dashboard_menu"
  >
    <v-container class="pa-0">
      <v-row justify="space-between" align="start">
        <v-col cols="12" sm="6">
          <v-card
            height="180"
            class="d-flex flex-column justify-end rounded-xl"
          >
            <v-card-text class="d-flex flex-column">
              <span class="text-h5 grey--text text--darken-4"
                >Current Ballance</span
              >
              <span class="text-body-1 font-weight-bold"
                ><v-icon>mdi-currency-usd</v-icon>5,000,000</span
              >
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6">
          <v-card
            height="180"
            class="d-flex flex-column justify-end rounded-xl"
          >
            <v-card-text class="d-flex flex-column">
              <span class="text-h5 grey--text text--darken-4"
                >Trust Ballance</span
              >
              <span class="text-body-1 font-weight-bold"
                >-<v-icon>mdi-currency-usd</v-icon>3,500,000</span
              >
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {
  data: () => ({}),
};
</script>

<style scoped>
@import url(../../assets/styles/dashboard_menu.css);
</style>