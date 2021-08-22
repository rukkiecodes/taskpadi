<template>
  <v-col cols="12">
    <v-toolbar flat color="transparent">
      <v-toolbar-title class="grey--text text--darken-4">
        Recent activity stats on Crypto
      </v-toolbar-title>
    </v-toolbar>
    <v-card color="white" class="rounded-lg mt-6" flat max-width="100%">
      <v-sheet
        elevation="5"
        color="#F49F1C"
        max-width="calc(100% - 32px)"
        class="v-sheet--offset mx-auto"
      >
        <v-sparkline
          smooth
          padding="16"
          color="white"
          line-width="1"
          label-size="5"
          :value="value"
          :labels="labels"
          :auto-draw="true"
        ></v-sparkline>
      </v-sheet>

      <v-card-title class="py-0 text-h6 font-weight-light mb-2">
        Total Transactions Summary
      </v-card-title>
      <v-card-text class="pt-0 mt-0">
        <v-icon>mdi-clock-time-eight-outline</v-icon>Last updated 3 minutes ago
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
import Completed from "../../transactions/crypto/components/completed/data/transactions";
import Ongoing from "../../transactions/crypto/components/ongoing/data/transactions";
import Pending from "../../transactions/crypto/components/pending/data/transactions";
import Failed from "../../transactions/crypto/components/failed/data/transactions";
import Canceled from "../../transactions/crypto/components/canceled/data/transactions";
export default {
  data: () => ({
    Completed,
    Ongoing,
    labels: ["Completed", "Ongoing", "Pending", "Failed", "Canceled"],
    value: [
      Completed.length,
      Ongoing.length,
      Pending.length,
      Failed.length,
      Canceled.length,
    ],
  }),
};
</script>

<style>
.v-sheet--offset {
  top: -24px;
  position: relative;
}
</style>
