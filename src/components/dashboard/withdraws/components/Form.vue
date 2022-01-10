<template>
  <v-col cols="12" sm="7">
    <v-card flat :loading="formLoader">
      <v-card-text>
        <v-row justify="space-between" align="start">
          <v-col cols="12" sm="6">
            <v-text-field
              label="Name of bank"
              color="deep-purple accent-4"
              outlined
              dense
              hide-details
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              label="Account number"
              color="deep-purple accent-4"
              outlined
              dense
              hide-details
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              label="Account name"
              color="deep-purple accent-4"
              disabled
              outlined
              dense
              hide-details
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              label="Amount to be withdrawn"
              color="deep-purple accent-4"
              outlined
              dense
              hide-details
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-btn
              class="text-capitalize"
              color="deep-purple accent-4"
              dark
              depressed
              @click="processTransaction"
              >Withdraw</v-btn
            >
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
import { mapState } from "vuex";
export default {
  data: () => ({
    formLoader: false,
  }),
  methods: {
    processTransaction() {
      this.formLoader = true;
      setTimeout(() => {
        this.snackbar.snack = true
        this.snackbar.text = `Your withdrawal was successful. Your payments will be in your account any moment now.`
        this.snackbar.color = "success"
        this.snackbar.buttonColor = "success"
        this.formLoader = false;
      }, 1000);
    },
  },
  computed: {
    ...mapState(["snackbar"]),
  },
};
</script>
