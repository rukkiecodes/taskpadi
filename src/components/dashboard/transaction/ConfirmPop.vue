<template>
  <vs-dialog
    blur
    not-center
    width="400px"
    prevent-close
    v-model="transaction.popTransactionDialog"
  >
    <template #header>
      <h4 class="not-margin">Proof of payment</h4>
    </template>

    <div class="con-content">
      <p>Are you sure you want to pop this transaction?</p>
    </div>

    <div>
      <vs-input
        block
        @click="clickOnPOPFile"
        v-model="transaction.popName"
        placeholder="Proof of payment"
      />
      <v-file-input
        @change="onPOPChange"
        class="POPFile"
        style="display: none"
      ></v-file-input>
    </div>

    <template #footer>
      <div
        :key="i"
        class="d-flex justify-end"
        v-for="(transaction, i) in selectedTransactionToPop"
      >
        <vs-button
          color="#6200EA"
          @click="confirmPop(transaction)"
          :loading="transaction.popTransactionLoading"
        >
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
  data: () => ({
    max: 191,
    value: "",
    fileName: "",
    showImageDialoge: false,
    rules: [(v) => v.length <= 255 || "Max 25 characters"],
  }),

  methods: {
    clickOnPOPFile() {
      document.querySelector(".POPFile input[type='file']").click()
    },

    ...mapActions(["confirmPop", "onPOPChange"]),
  },

  computed: {
    ...mapState(["transaction"]),
    ...mapGetters(["selectedTransactionToPop"]),
  },
}
</script>
