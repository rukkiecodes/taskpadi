<template>
  <v-container>
    <v-row justify="space-between" align="start">
      <v-col cols="12" class="py-0 mt-4">
        <span class="font-weight-bold grey--text text--darken-3">Withdraws</span>
      </v-col>
      <Ballance />
      <TotalTransactions />
      <TotalWithdrawals />
      <v-col cols="12" class="py-0 mt-4">
        <v-row justify="space-between" align="start">
          <v-col cols="12" sm="4">
            <vs-button
              icon
              block
              square
              border
              color="#6200EA"
              @click="withdraw.withdrawDialog = true"
              class="text-capitalize font-weight-bold"
            >
              Withdraw
              <i class="las la-arrow-down"></i>
            </vs-button>
          </v-col>
        </v-row>
      </v-col>
      <History />
    </v-row>
    <Form />
  </v-container>
</template>

<script>
import Ballance from "./components/Ballance.vue"
import TotalTransactions from "./components/TotalTransactions.vue"
import TotalWithdrawals from "./components/TotalWithdrawals.vue"
import History from "./components/History.vue"

import { mapActions, mapState } from "vuex"
export default {
  components: {
    Ballance,
    TotalTransactions,
    TotalWithdrawals,
    History,
    Form: () => import("./components/Form.vue"),
  },

  mounted() {
    this.$nextTick(() => {
      this.getBanks()
    })
  },

  methods: {
    ...mapActions(["getBanks"])
  },

  computed: {
    ...mapState(["withdraw"])
  }
}
</script>
