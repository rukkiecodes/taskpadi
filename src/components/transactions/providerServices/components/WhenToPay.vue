<template>
  <v-card flat>
    <v-card-text class="mx-0 px-0 d-flex">
      <v-select
        dense
        outlined
        color="deep-purple accent-4"
        class="mr-4"
        :items="items"
        label="When to pay"
        @change="setWhenToPayDurationWithSelect"
      ></v-select>
      <v-menu offset-y :close-on-content-click="false">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="deep-purple accent-4"
            class="text-capitalize"
            depressed
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
            <v-time-picker
              color="deep-purple accent-4"
              @change="setDurationWithClock"
              format="ampm"
              full-width
            ></v-time-picker>
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
    items: ["5 minutes", "10 minutes", "20 minutes", "30 minutes", "1 hour"],
  }),
  methods: {
    setWhenToPayDurationWithSelect(e) {
      this.providerServices.providerServicesInputs.whenToPay = e
    },
    setDurationWithClock(e) {
      this.providerServices.providerServicesInputs.whenToPay = e
    }
  },
  computed: {
    ...mapState(["providerServices"]),
  },
};
</script>
