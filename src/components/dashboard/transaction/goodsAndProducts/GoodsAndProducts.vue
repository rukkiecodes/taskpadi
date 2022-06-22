<template>
  <v-card flat class="mx-0 px-0 px-lg-2" color="transparent">
    <v-card-text class="mx-0 px-0 px-lg-2">
      <v-data-table :page.sync="page" :headers="headers" class="elevation-0" hide-default-footer :items="transactions"
        :mobile-breakpoint="0" :search="transaction.search" :items-per-page="itemsPerPage"
        @page-count="pageCount = $event">
        <template v-slot:item._id="{ item }">
          <span class="grey--text text--darken-4 text-body-2 font-weight-light">{{ item._id }}</span>
        </template>
        <template v-slot:item.recipientPhone="{ item }">
          <span class="grey--text text--darken-4 text-body-2 font-weight-light">{{ item.recipientPhone }}</span>
        </template>
        <template v-slot:item.role="{ item }">
          <span class="grey--text text--darken-4 text-body-2 font-weight-light">{{ item.role }}</span>
        </template>
        <template v-slot:item.price="{ item }">
          <span class="grey--text text--darken-4 text-body-2 font-weight-light">{{ item.price }}</span>
        </template>
        <template v-slot:item.duration="{ item }">
          <span class="grey--text text--darken-4 text-body-2 font-weight-light">{{ item.duration }}</span>
        </template>
        <template v-slot:item.createdAt="{ item }">
          <span class="grey--text text--darken-4 text-body-2 font-weight-light">{{ new
              Date(item.createdAt).toLocaleDateString()
          }}</span>
        </template>
        <template v-slot:item.status="{ item }">
          <v-chip dark small depressed class="text-capitalize font-weight-bold" :class="{
            'orange lighten-5 orange--text text--accent-3':
              item.status == 'pending',
            'teal lighten-5 teal--text text--darken-1':
              item.status == 'approved',
          }">{{ item.status }}
          </v-chip>
        </template>
        <template v-slot:item.view="{ item }">
          <div class="d-flex">
            <vs-button icon transparent color="#2A00A2" @click="viewTransactionDetails(item)">
              <i class="lar la-eye"></i>
            </vs-button>
          </div>
        </template>
      </v-data-table>
    </v-card-text>

    <div div class="d-flex justify-end align-center pt-2 transparent">
      <vs-pagination square v-model="page" color="#6200EA" :length="pageCount" />
    </div>
  </v-card>
</template>

<script>
// @ts-nocheck
import { mapActions, mapGetters, mapState } from "vuex"
export default {
  data: () => ({
    page: 1,
    pageCount: 0,
    itemsPerPage: 10,
    headers: [
      {
        text: "Id",
        value: "_id",
        align: "start",
        sortable: false,
      },
      { text: "Phone number", value: "recipientPhone", sortable: false },
      { text: "Type", value: "role", sortable: false },
      { text: "Price", value: "price", sortable: false },
      { text: "Duration", value: "duration", sortable: false },
      { text: "Date", value: "createdAt", sortable: false },
      { text: "Status", value: "status", sortable: false },
      { text: "View", value: "view", sortable: false },
    ],
  }),

  mounted () {
    this.$nextTick(() => {
      let border
      let borderInterval = setInterval(() => {
        border = document.querySelectorAll(
          ".theme--light.v-data-table > .v-data-table__wrapper > table > tbody > tr:not(:last-child) > td:not(.v-data-table__mobile-row), .theme--light.v-data-table > .v-data-table__wrapper > table > tbody > tr:not(:last-child) > th:not(.v-data-table__mobile-row)"
        )
        border.forEach((el) => {
          el.style.border = "none"
        })
      }, 10)

      if (border) clearInterval(borderInterval)
    })
  },

  methods: {
    ...mapActions([
      "viewTransactionDetails",
      "openUpdateTransactionDialog",
      "openConfirmTransactionDialog",
      "openDeclineTransactionDialog",
      "openPopTransactionDialog",
      "openDeleteTransactionDialog",
    ]),
  },

  computed: {
    ...mapState(["transaction"]),
    ...mapGetters(["transactions"]),
  },
}
</script>
