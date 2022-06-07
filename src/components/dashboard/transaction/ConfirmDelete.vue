<template>
  <vs-dialog
    not-center
    width="400px"
    prevent-close
    v-model="transaction.deleteTransactionDialog"
  >
    <template #header>
      <h4 class="not-margin">Delete transaction</h4>
    </template>

    <div class="con-content">
      <p>Are you sure you want to delete this transaction?</p>
    </div>

    <template #footer>
      <div
        :key="i"
        class="d-flex justify-end"
        v-for="(transaction, i) in selectedTransactionToDelete"
      >
        <vs-button
          danger
          class="font-weight-bold"
          @click="confirmDelete(transaction)"
          :loading="transaction.deleteTransactionLoading"
        >
          Delete
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

    ...mapActions(["confirmDelete", "onDeleteChange"]),
  },

  computed: {
    ...mapState(["transaction"]),
    ...mapGetters(["selectedTransactionToDelete"]),
  },
}
</script>
