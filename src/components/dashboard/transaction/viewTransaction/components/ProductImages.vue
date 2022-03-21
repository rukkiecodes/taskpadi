<template>
  <v-col cols="12" sm="6" lg="4">
    <v-row justify="space-between" align="start">
      <v-col cols="12">
        <v-card
          flat
          :key="i"
          height="300"
          color="#F8F8FB"
          v-for="(transaction, i) in singleTransactions"
        >
          <v-card-text>
            <v-img
              contain
              height="300"
              :src="`http://localhost:3000/${transaction.image}`"
            ></v-img>
          </v-card-text>
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
