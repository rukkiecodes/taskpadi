<template>
  <v-container class="head_component">
    <div class="head_component_left">
      <p class="main_text text-h4 font-weight-medium grey--text text--darken-3">
        Safe Transactions, Happy People
      </p>
      <p class="text-body-2 font-weight-normal grey--text text--darken-2">
        Transact Securely with online vendors & marketplaces, gain customers
        trust with TrustPaddi...
        <Read_more/>
      </p>
      <v-card flat>
        <v-tabs slider-color="blue darken-3" v-model="tab" grow>
          <v-tab active-class="blue--text text--darken-3">
            Seller
          </v-tab>
          <v-tab active-class="blue--text text--darken-3">
            Buyer
          </v-tab>
        </v-tabs>

        <v-tabs-items class="mt-4" v-model="tab">
          <v-tab-item>
            <Seller_tab />
          </v-tab-item>
          <v-tab-item>
            <Buyer_tab />
          </v-tab-item>
        </v-tabs-items>
      </v-card>
      <div></div>
    </div>

    <div class="head_component_right">
      <img class="head_img" src="../../assets/trust/home_phone.png" alt="" />
    </div>
  </v-container>
</template>

<script>
import Seller_tab from "./components/Seller_tab.vue";
import Buyer_tab from "./components/Buyer_tab.vue";
import Read_more from "./components/Read_more.vue"
export default {
  data: () => ({
    items: [
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2" },
    ],
    selling: [
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2" },
    ],
    tab: null,
  }),
  components: {
    Seller_tab,
    Buyer_tab,
    Read_more
  },
  methods: {
    onSelect({ name, iso2, dialCode }) {
      console.log(name, iso2, dialCode);
    },
  },
  mounted() {
    this.$nextTick(() => {});
  },
};
</script>

<style scoped>
@import url(../../assets/styles/head.css);
.active_route {
  color: #4169e2 !important;
}
</style>
