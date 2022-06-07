<template>
  <vs-dialog
    not-center
    width="400px"
    prevent-close
    v-model="transaction.approveTransactionDialog"
  >
    <template #header>
      <h4 class="not-margin">Confirm approval</h4>
    </template>

    <div class="con-content">
      <p>Are you sure you want to approve this transaction?</p>
    </div>

    <template #footer>
      <div
        :key="i"
        class="d-flex justify-end"
        v-for="(transaction, i) in selectedTransactionToApprove"
      >
        <vs-button
          color="#6200EA"
          class="font-weight-bold"
          @click="confirmApprove(transaction)"
          :loading="transaction.approveTransactionLoading"
        >
          Approve
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
    clickOnFileChange() {
      document.querySelector(".addImage input[type='file']").click()
    },

    onFileChange(image) {
      if (image) {
        this.showImageDialoge = true
        this.fileName = image.name
      }
    },

    ...mapActions(["confirmApprove"]),
  },

  computed: {
    ...mapState(["transaction"]),
    ...mapGetters(["selectedTransactionToApprove"]),
  },
}
</script>
