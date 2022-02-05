<template>
  <v-card width="100%" outlined class="rounded-lg removeBankAccount">
    <v-card-text class="font-weight-bold">Remove Bank Account</v-card-text>

    <v-card-text>
      <v-row justify="space-between" align="start">
        <v-col cols="12">
          <vs-input
            block
            label-placeholder="Account number"
            v-model="settings.removeBankAccountCredential.bank_id"
          />
          <!-- <vs-select
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
              :label="bank.abbreviation + ': ' + bank.id"
              :value="bank.id"
            >
              {{ bank.abbreviation }}: {{ bank.id }}
            </vs-option>
          </vs-select> -->
        </v-col>
        <v-col cols="12">
          <vs-button
            block
            color="#6200EA"
            @click="removeBankAccount"
            :loading="settings.removeBankAccountLoading"
            >Remove Account</vs-button
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
  }),

  mounted() {
    this.$nextTick(() => {})
  },

  methods: {
    ...mapActions(["removeBankAccount"]),

    setBankId() {
      this.settings.removeBankAccountCredential.bank_id = this.value
    },
  },

  computed: {
    ...mapState(["settings"]),
  },
}
</script>
