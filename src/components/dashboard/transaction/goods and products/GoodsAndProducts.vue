<template>
  <v-row justify="start">
    <v-col cols="12">
      <v-data-table
        :headers="header"
        :page.sync="page"
        :items="transaction"
        hide-default-footer
        :mobile-breakpoint="0"
        class="elevation-0 transparent"
        :items-per-page="itemsPerPage"
        @page-count="pageCount = $event"
      >
        <template v-slot:item.productStatus="{ item }">
          <v-btn
            dark
            small
            depressed
            class="text-capitalize"
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
          <v-btn
            class="mr-0 mr-sm-2 text-capitalize"
            color="#1CC8EE"
            darkg
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
        </template>
      </v-data-table>
      <div class="d-flex justify-end align-center pt-2 transparent">
        <v-pagination
          v-model="page"
          :length="pageCount"
          color="deep-purple accent-4"
        ></v-pagination>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions } from "vuex"
import header from "./header"
import transaction from "./transaction"
export default {
  data: () => ({
    header,
    transaction,
    page: 1,
    pageCount: 0,
    itemsPerPage: 8,
  }),

  methods: {
    ...mapActions(["viewTransactionDetails"]),
  },

  mounted() {
    const border = document.querySelectorAll(
      ".theme--light.v-data-table > .v-data-table__wrapper > table > tbody > tr:not(:last-child) > td:not(.v-data-table__mobile-row), .theme--light.v-data-table > .v-data-table__wrapper > table > tbody > tr:not(:last-child) > th:not(.v-data-table__mobile-row)"
    )

    for (let i = 0; i <= border.length; i++) {
      border[i].style.border = "none"
    }
  },
}
</script>
