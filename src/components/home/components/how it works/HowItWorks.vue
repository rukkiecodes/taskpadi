<template>
  <v-row>
    <v-col cols="12">
      <v-row class="flex-column text-center" justify="center" align="center">
        <Title title="How it works" />
        <p class="grey--text text--darken-3 text-body-1 mt-n3">
          The whole process is Simple, transparent and automated
        </p>
      </v-row>
      <v-row>
        <v-card color="transparent" flat>
          <v-tabs
            v-model="tab"
            centered
            color="deep-purple accent-4"
            background-color="deep-purple lighten-5"
          >
            <v-tab>Buyer</v-tab>
            <v-tab>Seller</v-tab>
          </v-tabs>

          <v-tabs-items v-model="tab">
            <v-tab-item>
              <Buyer />
            </v-tab-item>
            <v-tab-item>
              <Seller />
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    tab: null,
    items: [{ tab: "Buyer" }, { tab: "Seller" }],
  }),
  components: {
    Title: () => import("../../../app_components/Title.vue"),
    Buyer: () => import("./components/Buyer.vue"),
    Seller: () => import("./components/Seller.vue"),
  },
};
</script>
