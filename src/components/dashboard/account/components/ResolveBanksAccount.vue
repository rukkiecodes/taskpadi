<template>
  <v-card width="100%" outlined class="rounded-lg resolveBankAccount">
    <v-card-text class="font-weight-bold">Resolve Bank Account</v-card-text>
    <v-card-text>
      <v-row justify="space-between" align="start">
        <v-col cols="12">
          <vs-select
            block
            filter
            color="#6200EA"
            v-model="value"
            @change="setBankId"
            label-placeholder="Bank id"
          >
            <vs-option
              v-for="(bank, i) in settings.banks"
              :key="i"
              :label="bank.abbreviation + ': ' + bank.code"
              :value="bank.code"
            >
              {{ bank.abbreviation }}: {{ bank.code }}
            </vs-option>
          </vs-select>
        </v-col>
        <v-col cols="12">
          <vs-input
            block
            label-placeholder="Account number"
            v-model="settings.resolveBankAccountCredential.account_no"
          />
        </v-col>
        <v-col cols="12">
          <vs-button
            block
            color="#6200EA"
            @click="resolveBackAccount"
            :loading="settings.resolveBankAccountLoading"
            >Resolve Account</vs-button
          >
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState, mapActions } from "vuex"

export default {
  data: () => ({
    value: "",
  }),

  mounted() {
    this.$nextTick(() => {})
  },
  
  methods: {
    ...mapActions(["resolveBackAccount"]),

    setBankId() {
      this.settings.resolveBankAccountCredential.bank_id  = this.value
    }
  },

  computed: {
    ...mapState(["settings"]),
  },
}
</script>
