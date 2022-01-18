<template>
  <v-row justify="start">
    <v-col cols="12">
      <v-data-table
        :headers="header"
        :page.sync="page"
        :items="transactionData"
        hide-default-footer
        :mobile-breakpoint="0"
        class="elevation-0 transparent"
        :items-per-page="itemsPerPage"
        @page-count="pageCount = $event"
        :search="transaction.search"
      >
        <template v-slot:item.date="{ item }">
          <span>
            {{ item.date }}
          </span>
        </template>
        <template v-slot:item.productStatus="{ item }">
          <v-btn
            dark
            small
            depressed
            class="text-capitalize font-weight-bold"
            :class="{
              'orange lighten-5 orange--text text--accent-3':
                item.productStatus == 'Pending',
              'teal lighten-5 teal--text text--darken-1':
                item.productStatus == 'Successful',
              'red lighten-5 red--text text--darken-1':
                item.productStatus == 'Failed',
            }"
          >
            {{ item.productStatus }}
          </v-btn>
        </template>
        <template v-slot:item.productAction="{ item }">
          <div class="d-flex">
            <v-btn
              class="mr-2 text-capitalize"
              color="#1CC8EE"
              dark
              small
              depressed
            >
              Report
            </v-btn>
            <v-btn
              class="text-capitalize"
              color="#2A00A2"
              @click="viewTransactionDetails(item)"
              dark
              small
              depressed
            >
              View
            </v-btn>
          </div>
        </template>
      </v-data-table>
      <div class="d-flex justify-end align-center pt-2 transparent">
        <vs-pagination
          square
          color="#6200EA"
          v-model="page"
          :length="pageCount"
        />
      </div>
    </v-col>
  </v-row>
</template>

<script>
// @ts-nocheck
import { mapActions, mapState } from "vuex"
import header from "./header"
import transactionData from "./transaction"
export default {
  data: () => ({
    header,
    transactionData,
    page: 1,
    pageCount: 0,
    itemsPerPage: 8,
  }),

  mounted() {
    const border = document.querySelectorAll(
      ".theme--light.v-data-table > .v-data-table__wrapper > table > tbody > tr:not(:last-child) > td:not(.v-data-table__mobile-row), .theme--light.v-data-table > .v-data-table__wrapper > table > tbody > tr:not(:last-child) > th:not(.v-data-table__mobile-row)"
    )

    if (border)
      for (let i = 0; i <= border.length; i++) {
        border[i].style.border = "none"
      }
  },

  methods: {
    ...mapActions(["viewTransactionDetails"]),
  },

  computed: {
    ...mapState(["transaction"])
  }
}
</script>
