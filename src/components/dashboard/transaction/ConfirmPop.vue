<template>
  <vs-dialog blur not-center width="400px" prevent-close v-model="transaction.popTransactionDialog">
    <template #header>
      <h4 class="not-margin">Proof of payment</h4>
    </template>

    <div class="con-content">
      <p>Are you sure you want to proof of payment this transaction?</p>
    </div>

    <div>
      <v-file-input solo flat dense hide-details @change="onPOPChange" background-color="#F4F7F8"
        placeholder="Proof of mayment file"></v-file-input>
    </div>

    <template #footer>
      <div :key="i" class="d-flex justify-end" v-for="(transaction, i) in selectedTransactionToPop">
        <vs-button color="#6200EA" class="font-weight-bold" @click="confirmPop(transaction)"
          :loading="transaction.popTransactionLoading">
          Confirm
        </vs-button>
      </div>
    </template>
  </vs-dialog>
</template>

<script>
// @ts-nocheck
import { mapActions, mapGetters, mapState } from "vuex"
export default {
  methods: {
    ...mapActions(["confirmPop", "onPOPChange"]),
  },

  computed: {
    ...mapState(["transaction"]),
    ...mapGetters(["selectedTransactionToPop"]),
  },
}
</script>
