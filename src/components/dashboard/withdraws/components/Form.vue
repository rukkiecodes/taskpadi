<template>
  <vs-dialog width="457px" not-center v-model="withdraw.withdrawDialog">
    <template #header>
      <h4 class="not-margin">Withdraw</h4>
    </template>

    <div class="con-form">
      <v-row justify="space-between" align="start">
        <v-col cols="12">
          <vs-select
            block
            filter
            color="#6200EA"
            v-model="value"
            class="bankSelect"
            placeholder="Bank name"
          >
            <vs-option
              v-for="bank in banks"
              :key="bank.id"
              :label="bank.abbreviation + ': ' + bank.code"
              :value="bank.code"
            >
              {{ bank.name }}
            </vs-option>
          </vs-select>
        </v-col>
        <v-col cols="12" sm="6">
          <vs-input block v-model="value" placeholder="Account number" />
        </v-col>
        <v-col cols="12" sm="6">
          <vs-input block v-model="value" placeholder="Amount" />
        </v-col>
      </v-row>
    </div>

    <template #footer>
      <vs-button block @click="withdraw.withdrawDialog = false" color="#6200EA">
        Withdraw</vs-button
      >
    </template>
  </vs-dialog>
</template>

<script>
import { mapGetters, mapState } from "vuex"
export default {
  data: () => ({
    value: "",
  }),


  computed: {
    ...mapState(["withdraw"]),
    ...mapGetters(["banks"]),
  },
}
</script>
