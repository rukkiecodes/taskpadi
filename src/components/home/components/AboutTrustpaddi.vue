<template>
  <v-row>
    <v-col cols="12">
      <v-row justify="center" align="center">
        <Title title="About Trustpaddi" />
      </v-row>
      <v-row class="flex-column-reverse flex-md-row" justify="space-between" align="center">
        <v-col cols="12" sm="12" md="6">
          <v-card flat color="transparent">
            <v-card-text class="text-body-1 grey--text text--darken-3">
              TrustPaddi is Nigerians most trusted escrow/middleman platform
              built with the latest technology which enables safer transactions
              between online vendors (marketplaces, businesses etc) &
              individuals whether online or offline.
            </v-card-text>
            <v-card-text>
              <v-btn color="deep-purple accent-4" dark depressed>
                About Us
              </v-btn>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="12" md="5">
          <v-img src="../../../assets/trust/about.svg" />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  components: {
    Title: () => import("../../app_components/Title.vue"),
  },
};
</script>
