<template>
  <v-card width="100%" outlined class="rounded-lg addBankAccount">
    <v-card-text class="font-weight-bold">Add Bank Account</v-card-text>

    <v-card-text>
      <v-row justify="space-between" align="start">
        <v-col cols="12" sm="6">
          <vs-input
            block
            label-placeholder="Bank id"
            v-model="settings.addBankAccountCredential.account_no"
          />
          <vs-select
            block
            color="#6200EA"
            v-model="value"
            @change="setBankId"
            label-placeholder="Bank id"
          >
            <vs-option
              v-for="bank in settings.banks"
              :key="bank.id"
              :label="bank.abbreviation"
              :value="bank.code"
            >
              {{ bank.abbreviation }}: {{ bank.code }}
            </vs-option>
          </vs-select>
          {{ value }}
        </v-col>
        <v-col cols="12" sm="6">
          <vs-input
            block
            label-placeholder="Account number"
            v-model="settings.addBankAccountCredential.account_no"
          />
        </v-col>
        <v-col cols="12">
          <vs-input
            block
            label-placeholder="Account name"
            v-model="settings.addBankAccountCredential.account_name"
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
  data: () => ({
    value: "",
    bankCode: [],
    bankAbbreviation: [],
  }),

  mounted() {
    this.$nextTick(() => {
      const banks = this.settings.banks

      for (let i = 0; i <= banks.length; i++) {
        this.bankCode.push(banks[i].code)
        this.bankAbbreviation.push(banks[i].abbreviation)
      }
    })
  },
  methods: {
    ...mapActions(["addBackAccount"]),

    setBankId() {
      this.settings.addBankAccountCredential.bank_id = this.value
    },
  },

  computed: {
    ...mapState(["settings"]),
  },
}
</script>
