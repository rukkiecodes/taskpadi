<template>
  <v-card width="100%" outlined class="rounded-lg addBankAccount">
    <v-card-text class="font-weight-bold">Add Bank Account</v-card-text>

    <v-card-text>
      <v-row justify="space-between" align="start">
        <v-col cols="12" sm="6">
          <vs-input
            v-model="settings.addBankAccountCredential.bank_id"
            label-placeholder="Bank id"
          />
        </v-col>
        <v-col cols="12" sm="6">
          <vs-input
            v-model="settings.addBankAccountCredential.account_no"
            label-placeholder="Account number"
          />
        </v-col>
        <v-col cols="12">
          <vs-input
            v-model="settings.addBankAccountCredential.account_name"
            label-placeholder="Account name"
          />
        </v-col>
        <v-col cols="12">
          <vs-button
            block
            color="#6200EA"
            @click="addBackAccount"
            :loading="settings.addBankAccountLoading"
            >Add Account</vs-button
          >
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex"

export default {
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        const input = document.querySelectorAll(".addBankAccount .vs-input")
        if (input)
          for (let i = 0; i <= input.length; i++) {
            input[i].style.width = "100%"
          }
      }, 100)
    })
  },
  methods: {
    ...mapActions(["addBackAccount"])
  },

  computed: {
    ...mapState(["settings"]),
  },
}
</script>
