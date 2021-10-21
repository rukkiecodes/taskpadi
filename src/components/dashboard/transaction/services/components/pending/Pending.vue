<template>
  <v-data-table
    :headers="header"
    :items="transaction"
    :search="search"
    :items-per-page="5"
    class="elevation-0"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-spacer />
        <v-spacer />
        <v-spacer />
        <v-text-field
          dense
          clearable
          hide-details
          label="Search"
          v-model="search"
          :search="search"
          color="deep-purple accent-4"
          prepend-inner-icon="mdi-magnify"
        ></v-text-field>
      </v-toolbar>
    </template>
    <template v-slot:item.productStatus="{ item }">
      <v-chip
        color="transparent"
        :class="{
          'primary--text font-weight-bold': item.productStatus == 'Pending',
        }"
        class="px-0"
      >
        {{ item.productStatus }}
      </v-chip>
    </template>
    <template v-slot:item.productAction="{ item }">
      <v-btn @click="viewTransactionDetails(item)" icon>
        <v-icon small>{{ item.productAction }}</v-icon>
      </v-btn>
    </template>
  </v-data-table>
</template>

<script>
import { mapActions } from "vuex"
import header from "./data/header"
import transaction from "./data/transaction"
export default {
  data: () => ({
    search: "",
    header,
    transaction,
  }),
  methods: {
    ...mapActions(["viewTransactionDetails"]),
  },
}
</script>
