<template>
  <v-col cols="12" sm="8" class="px-0 px-sm-4">
    <v-data-table
      :page.sync="page"
      :headers="headers"
      class="elevation-0"
      hide-default-footer
      :items="transactions"
      :mobile-breakpoint="0"
      :search="transaction.search"
      :items-per-page="itemsPerPage"
      @page-count="pageCount = $event"
    >
      <template v-slot:item._id="{ item }">
        <span class="grey--text text--darken-4 text-body-2 font-weight-light">{{
          item._id
        }}</span>
      </template>
      <template v-slot:item.recipientPhone="{ item }">
        <span class="grey--text text--darken-4 text-body-2 font-weight-light">{{
          item.recipientPhone
        }}</span>
      </template>
      <template v-slot:item.role="{ item }">
        <span class="grey--text text--darken-4 text-body-2 font-weight-light">{{
          item.role
        }}</span>
      </template>
      <template v-slot:item.price="{ item }">
        <span class="grey--text text--darken-4 text-body-2 font-weight-light">{{
          item.price
        }}</span>
      </template>
      <template v-slot:item.duration="{ item }">
        <span class="grey--text text--darken-4 text-body-2 font-weight-light">{{
          item.duration
        }}</span>
      </template>
      <template v-slot:item.createdAt="{ item }">
        <span class="grey--text text--darken-4 text-body-2 font-weight-light">{{
          new Date(item.createdAt).toLocaleDateString()
        }}</span>
      </template>
      <template v-slot:item.status="{ item }">
        <v-chip
          dark
          small
          depressed
          class="text-capitalize font-weight-bold"
          :class="{
            'orange lighten-5 orange--text text--accent-3':
              item.status == 'pending',
            'teal lighten-5 teal--text text--darken-1': item.status == 'closed',
          }"
          >{{ item.status }}
        </v-chip>
      </template>
      <template v-slot:item.view="{ item }">
        <div class="d-flex">
          <vs-button
            icon
            transparent
            color="#2A00A2"
            @click="viewTransactionDetails(item)"
          >
            <i class="lar la-eye"></i>
          </vs-button>
        </div>
      </template>
    </v-data-table>
  </v-col>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex"
export default {
  data: () => ({
    search: "",
    max: 5,
    page: 1,
    pageCount: 0,
    itemsPerPage: 5,
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

  mounted() {
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
    ...mapActions(["viewTransactionDetails", "viewTransactionDetails"]),
  },

  computed: {
    ...mapState(["viewDetailsDialog", "transaction"]),
    ...mapGetters(["transactions"]),
    tableWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "600px"
        case "sm":
          return 400
        case "md":
          return 500
        case "lg":
          return 600
        case "xl":
          return 800
      }
    },
  },
}
</script>
