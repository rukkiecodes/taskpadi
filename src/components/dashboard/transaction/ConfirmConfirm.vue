<template>
  <vs-dialog
    not-center
    width="400px"
    v-model="transaction.confirmTransactionDialog"
  >
    <template #header>
      <h4 class="not-margin">Confirm transaction</h4>
    </template>

    <div class="con-content">
      <p>Are you sure you want to confirm this transaction?</p>
    </div>

    <template #footer>
      <div
        :key="i"
        class="d-flex justify-end"
        v-for="(transaction, i) in selectedTransactionToConfirm"
      >
        <vs-button
          color="#6200EA"
          @click="confirmConfirm(transaction)"
          :loading="transaction.confirmTransactionLoading"
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
    clickOnFileChange() {
      document.querySelector(".addImage input[type='file']").click()
    },

    onFileChange(image) {
      if (image) {
        this.showImageDialoge = true
        this.fileName = image.name
      }
    },

    ...mapActions(["confirmConfirm"]),
  },

  computed: {
    ...mapState(["transaction"]),
    ...mapGetters(["selectedTransactionToConfirm"]),
  },
}
</script>
