<template>
  <v-container>
    <v-sheet class="my-8 my-sm-15" color="transparent" width="100%">
      <v-row
        class="flex-column-reverse flex-sm-row"
        justify="space-between"
        align="center"
      >
        <v-col cols="12" sm="6" md="5">
          <v-row justify="start" align="center">
            <v-col cols="12">
              <p
                class="main_text text-h4 grey--text text--darken-4 font-weight-medium"
              >
                Safe Transactions,<br />Happy People
              </p>
              <p
                class="text-body-2 font-weight-normal grey--text text--darken-4"
              >
                Transact Securely with online vendors & marketplaces,<br />gain
                customers trust with TrustPaddi
              </p>
            </v-col>
            <v-col cols="12">
              <v-card
                class="d-flex justify-space-between align-center pa-1 rounded-lg"
                color="transparent"
                style="border: 0.5px solid rgba(0,0,0,0.2) !important"
                outlined
              >
                <v-menu offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      color="blue accent-4"
                      class="text-capitalize white--text rounded-lg"
                      depressed
                      v-bind="attrs"
                      v-on="on"
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
                <v-spacer />
                <v-menu offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      color="blue accent-4"
                      class="text-capitalize white--text rounded-lg"
                      depressed
                      v-bind="attrs"
                      v-on="on"
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
              </v-card>

              <v-card
                outlined
                color="transparent"
                class="rounded-lg d-flex justify-space-between align-center pa-1 mt-3"
                style="border: 0.5px solid rgba(0,0,0,0.2) !important"
              >
                <span
                  class="text-body-2 font-weight-bold grey--text text--darken-2 ml-3"
                >
                  For
                </span>
                <input
                  style="outline: none"
                  type="number"
                  placeholder="2,000,000"
                />
                <vue-country-code
                  @onSelect="onSelect"
                  :preferredCountries="['vn', 'us', 'gb']"
                  :enabledCountryCode="true"
                  class="rounded-lg blue accent-4"
                />
              </v-card>
            </v-col>
            <v-col cols="12">
              <v-btn
                depressed
                color="blue accent-4"
                class="white--text rounded-lg font-weight-bold"
                height="45"
              >
                Get started now
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" sm="6">
          <v-img
            lazy-src="../../../assets/trust/home_phone.png"
            src="../../../assets/trust/home_phone.png"
            alt=""
          ></v-img>
        </v-col>
      </v-row>
    </v-sheet>
  </v-container>
</template>

<script>
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
  methods: {
    onSelect({ name, iso2, dialCode }) {
      console.log(name, iso2, dialCode);
    },
  },
  mounted() {
    this.$nextTick(() => {
      console.log(document.querySelector(".country-code"));
      document.querySelector(".country-code, .dropdown-arrow").style.color =
        "#ffffff";
      document.querySelector(".dropdown-arrow").style.color = "#ffffff";
    });
  },
};
</script>
