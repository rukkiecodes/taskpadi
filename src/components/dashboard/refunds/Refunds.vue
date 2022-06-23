<template>
  <v-container class="mt-10">
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="grey darken-2" dark text class="text-body-2 font-weight-bold text-capitalize mb-3" v-bind="attrs"
          v-on="on">
          <i style="font-size: 1.1rem" class="las la-filter"></i>
          Filter
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in refundsFilters" :key="index" @click="checkList(item)">
          <v-list-item-title class="text-body-2">{{
              item.title
          }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-row justify="space-between" align="start">
      <v-col cols="12">
        <v-card flat color="transparent">
          <v-data-table :headers="header" :page.sync="page" hide-default-footer class="elevation-0" :items="transaction"
            :mobile-breakpoint="0" :search="refunds.search" :items-per-page="itemsPerPage"
            @page-count="pageCount = $event">
            <template v-slot:item.productStatus="{ item }">
              <v-btn dark small depressed class="text-capitalize font-weight-bold" :class="{
                'orange lighten-5 orange--text text--accent-3':
                  item.productStatus == 'Pending',
                'teal lighten-5 teal--text text--darken-1':
                  item.productStatus == 'Successful',
                'red lighten-5 red--text text--darken-1':
                  item.productStatus == 'Failed',
              }">{{ item.productStatus }}
              </v-btn>
            </template>
            <template v-slot:item.productAction="{ item }">
              <v-btn @click="viewData(item)" icon>
                <!-- <v-icon small v-text="item.productAction" /> -->
              </v-btn>
            </template>
          </v-data-table>
          <div class="d-flex justify-end align-center pt-2 transparent">
            <vs-pagination square color="#6200EA" v-model="page" :length="pageCount" />
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import header from "./data/header"
import transaction from "./data/transaction"
import { mapGetters, mapState } from "vuex"
export default {
  data: () => ({
    search: "",
    header,
    transaction,
    page: 1,
    pageCount: 0,
    itemsPerPage: 10,
  }),

  mounted () {
    this.$nextTick(() => {
      const border = document.querySelectorAll(
        ".theme--light.v-data-table > .v-data-table__wrapper > table > tbody > tr:not(:last-child) > td:not(.v-data-table__mobile-row), .theme--light.v-data-table > .v-data-table__wrapper > table > tbody > tr:not(:last-child) > th:not(.v-data-table__mobile-row)"
      )

      if (border)
        for (let i = 0; i <= border.length; i++) {
          border[i].style.border = "none"
        }
    })
  },

  methods: {
    viewData (item) { },

    checkList (item) {
      if (item.title == "All") {
        this.refunds.search = ""
      } else {
        this.refunds.search = item.title
      }
    },
  },

  computed: {
    ...mapState(["refunds"]),
    ...mapGetters(["refundsFilters"]),
  },
}
</script>
