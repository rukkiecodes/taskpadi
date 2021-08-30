<template>
  <v-card flat>
    <v-card-text class="mx-0 px-0 d-flex">
      <v-select
        :items="duration"
        label="Transaction duration"
        class="mr-4"
        dense
        color="deep-purple accent-4"
        outlined
        hide-details
        @change="setDurationWithSelect"
      ></v-select>
      <v-menu :close-on-content-click="false" offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="deep-purple accent-4"
            class="text-capitalize"
            text
            dark
            v-bind="attrs"
            v-on="on"
          >
            Custom
          </v-btn>
        </template>
        <v-card width="300">
          <v-card-text class="ma-0 pa-0">
            <v-date-picker @change="setDurationWithCalender" full-width color="deep-purple accent-4" v-model="picker"></v-date-picker>
          </v-card-text>
        </v-card>
      </v-menu>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
export default {
  data: () => ({
    duration: ["Less than 30 minutes", "1 houre", "5 hours"],
    picker: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
  }),
  methods: {
    setDurationWithSelect(e) {
      this.traderCrypto.traderCryptoInputs.duration = e
    },
    setDurationWithCalender(e) {
      this.traderCrypto.traderCryptoInputs.duration = e
    }
  },
  computed: {
    ...mapState(["traderCrypto"]),
  },
};
</script>
