<template>
  <vs-dialog not-center width="400px" prevent-close blur v-model="transaction.declineTransactionDialog">
    <template #header>
      <h4 class="not-margin">Decline transaction</h4>
    </template>

    <div class="con-content">
      <p>Are you sure you want to decline this transaction?</p>
    </div>

    <template #footer>
      <div :key="i" class="d-flex justify-end" v-for="(transaction, i) in selectedTransactionToDecline">
        <vs-button color="#6200EA" class="font-weight-bold" @click="confirmDecline(transaction)"
          :loading="transaction.declineTransactionLoading">
          Decline
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
    clickOnFileChange () {
      document.querySelector(".addImage input[type='file']").click()
    },

    onFileChange (image) {
      if (image) {
        this.showImageDialoge = true
        this.fileName = image.name
      }
    },

    ...mapActions(["confirmDecline"]),
  },

  computed: {
    ...mapState(["transaction"]),
    ...mapGetters(["selectedTransactionToDecline"]),
  },
}
</script>
