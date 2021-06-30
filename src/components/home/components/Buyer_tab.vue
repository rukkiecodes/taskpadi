<template>
  <v-card color="basil" flat>
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
            I am buying
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
  </v-card>
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
    tab: null
  }),
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
