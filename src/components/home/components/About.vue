<template>
  <v-container class="mt-16">
    <v-row justify="space-between" align="center">
      <Headings heading="About Trustpaddi" />
    </v-row>
    <v-row
      class="flex-column-reverse flex-sm-row"
      justify="space-between"
      align="center"
    >
      <v-col class="mt-8" cols="12" sm="6">
        <v-card flat color="indigo lighten-5" class="rounded-xl">
          <v-card-text class="text-body-2">
            TrustPaddi is Nigerians most trusted escrow/middleman platform built
            with the latest technology which enables safer transactions between
            online vendors (marketplaces, businesses etc) & individuals whether
            online or offline.
          </v-card-text>
          <v-card-text>
            <v-btn
              to="/about"
              class="rounded-lg white--text text-capitalize"
              color="indigo accent-4"
              depressed
              >About Us</v-btn
            >
          </v-card-text>
        </v-card>
      </v-col>
      <v-col class="mt-8" cols="12" sm="5">
        <v-img
          lazy-src="../../../assets/trust/about.svg"
          src="../../../assets/trust/about.svg"
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  components: {
    Headings: () => import("./Headings.vue")
  }
};
</script>
