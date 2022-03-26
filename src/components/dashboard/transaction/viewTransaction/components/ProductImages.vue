<template>
  <v-col cols="12" sm="6" lg="4">
    <v-row justify="space-between" align="start">
      <v-col cols="12">
        <v-card
          flat
          :key="i"
          height="300"
          color="#F8F8FB"
          max-height="400"
          v-for="(transaction, i) in singleTransactions"
        >
          <img style="width: 100%" :src="transaction.image" />
        </v-card>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
import { mapGetters, mapState } from "vuex"

export default {
  computed: {
    ...mapState(["transaction"]),
    ...mapGetters(["singleTransactions"]),
  },
}
</script>
