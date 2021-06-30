<template>
  <v-container class="head_component">
    <div class="head_component_left">
      <p class="main_text text-h4 font-weight-medium grey--text text--darken-3">
        Safe Transactions, Happy People
      </p>
      <p class="text-body-2 font-weight-normal grey--text text--darken-2">
        Transact Securely with online vendors & marketplaces, gain customers
        trust with TrustPaddi <br />We know how Devastating it can be losing
        money to an online fraudster, and if not Cash On Delivery, we're sure
        you won't make any purchases....
        <Read_more />
      </p>
      <div>
        <div class="input_one rounded-lg">
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="grey darken-2"
                dark
                depressed
                v-bind="attrs"
                v-on="on"
                text
                style="text-transform: initial"
              >
                I am selling
                <v-icon right>mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item v-for="(sell, index) in selling" :key="index">
                <v-list-item-title>{{ sell.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="grey darken-2"
                dark
                depressed
                v-bind="attrs"
                v-on="on"
                text
                style="text-transform: initial"
              >
                Accessories
                <v-icon right>mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item v-for="(item, index) in items" :key="index">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>

        <div class="input_two mt-3 rounded-lg px-1">
          <div class="text">
            <p class="text-body-2 font-weight-bold grey--text text--darken-3">
              For
            </p>
          </div>
          <input type="number" placeholder="2,000,000" />
          <vue-country-code
            @onSelect="onSelect"
            :preferredCountries="['vn', 'us', 'gb']"
            :enabledCountryCode="true"
            class="country_code rounded-lg blue darken-2"
          />
        </div>

        <v-btn
          block
          depressed
          color="#4169E2"
          class="get_started mt-3 white--text rounded-lg"
        >
          Get started now
        </v-btn>
      </div>
    </div>

    <div class="head_component_right">
      <img class="head_img" src="../../assets/trust/home_phone.png" alt="" />
    </div>
  </v-container>
</template>

<script>
import Read_more from "./components/Read_more.vue";
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
  }),
  components: {
    Read_more,
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
