<template>
  <v-card flat color="transparent">
    <v-data-table
      :search="search"
      :headers="header"
      :page.sync="page"
      :items="transaction"
      hide-default-footer
      :mobile-breakpoint="0"
      class="elevation-0 transparent"
      :items-per-page="itemsPerPage"
      @page-count="pageCount = $event"
    >
      <template v-slot:top>
        <v-toolbar flat dense color="transparent">
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
    <div class="text-center pt-2">
      <v-pagination
        v-model="page"
        :length="pageCount"
        color="deep-purple accent-4"
      ></v-pagination>
    </div>
  </v-card>
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
    page: 1,
    pageCount: 0,
    itemsPerPage: 5,
  }),
  methods: {
    ...mapActions(["viewTransactionDetails"]),
  },
}
</script>
