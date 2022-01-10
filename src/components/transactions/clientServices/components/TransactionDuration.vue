<template>
  <v-card flat>
    <v-card-text class="mx-0 px-0">
      <v-menu :close-on-content-click="false" offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="deep-purple accent-4"
            class="text-capitalize"
            depressed
            dark
            width="200"
            v-bind="attrs"
            v-on="on"
          >
            Duration in days
          </v-btn>
        </template>
        <v-card width="300">
          <v-card-text class="ma-0 pa-0">
            <v-date-picker
              color="deep-purple accent-4"
              full-width
              v-model="picker"
              @change="setTransactionDuration"
            ></v-date-picker>
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
    picker: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
  }),
  methods: {
    setTransactionDuration(e) {
      this.clientServices.clientServicesInputs.transactionDuration = e;
    },
  },
  computed: {
    ...mapState(["clientServices"]),
  },
};
</script>
