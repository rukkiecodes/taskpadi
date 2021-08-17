<template>
  <v-card color="grey lighten-3" class="mb-10 rounded-lg" flat max-width="700">
    <v-sheet
      elevation="5"
      color="blue accent-4"
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

    <v-card-text class="pt-0">
      <div class="text-h6 font-weight-light mb-2">
        Total Transactions Summary
      </div>
    </v-card-text>
    <v-card-actions class="mt-n2 px-4 pb-5">
      <Create_transaction_button />
    </v-card-actions>
  </v-card>
</template>

<script>
import Completed from "./components/completed/data/transactions";
import Ongoing from "./components/ongoing/data/transactions";
import Pending from "./components/pending/data/transactions";
import Failed from "./components/failed/data/transactions";
import Canceled from "./components/canceled/data/transactions";
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
  components: {
    Create_transaction_button: () => import("./Create_transaction_button.vue"),
  },
};
</script>

<style>
.v-sheet--offset {
  top: -24px;
  position: relative;
}
</style>
