<template>
  <v-col cols="12" sm="8">
    <v-card width="100%" class="tableCard" flat>
      <v-card-title> Transaction Summary </v-card-title>
      <v-data-table
        :search="search"
        :headers="headers"
        :page.sync="page"
        :items="transactions"
        hide-default-footer
        class="elevation-0"
        :items-per-page="itemsPerPage"
        @page-count="pageCount = $event"
      >
        <template v-slot:item.status="{ item }">
          <v-btn
            dark
            small
            depressed
            class="text-capitalize"
            :class="{
              'orange lighten-5 orange--text text--accent-3':
                item.status == 'Pending',
              'teal lighten-5 teal--text text--darken-1':
                item.status == 'Successful',
              'red lighten-5 red--text text--darken-1': item.status == 'Failed',
            }"
          >
            {{ item.status }}
          </v-btn>
        </template>
        <template v-slot:item.action="{ item }">
          <v-btn
            dark
            icon
            x-small
            depressed
            color="grey darken-2"
            @click="viewTransactionDetails(item)"
          >
            <v-icon>{{ item.action }}</v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </v-card>
  </v-col>
</template>

<script>
import { mapActions, mapState } from "vuex"
export default {
  data: () => ({
    search: "",
    headers: [
      {
        text: "Transaction ID",
        align: "start",
        sortable: false,
        value: "id",
      },
      { text: "Amount", value: "amount" },
      { text: "Date & Time", value: "dateTime" },
      { text: "Status", value: "status" },
      { text: "Action", value: "action", sortable: false },
    ],
    transactions: [
      {
        id: "12625juf",
        amount: "#45,000",
        dateTime: "2021-10-24",
        status: "Pending",
        action: "mdi-eye-outline",
      },
      {
        id: "15695juf",
        amount: "#25,000",
        dateTime: "2021-10-21",
        status: "Failed",
        action: "mdi-eye-outline",
      },
      {
        id: "12691juf",
        amount: "#25,900",
        dateTime: "2021-10-21",
        status: "Successful",
        action: "mdi-eye-outline",
      },
      {
        id: "12645juf",
        amount: "#45,000",
        dateTime: "2021-10-24",
        status: "Pending",
        action: "mdi-eye-outline",
      },
      {
        id: "15695juf",
        amount: "#25,000",
        dateTime: "2021-10-21",
        status: "Failed",
        action: "mdi-eye-outline",
      },
      {
        id: "15695juf",
        amount: "#25,000",
        dateTime: "2021-10-21",
        status: "Successful",
        action: "mdi-eye-outline",
      },
      {
        id: "15695juf",
        amount: "#25,000",
        dateTime: "2021-10-21",
        status: "Failed",
        action: "mdi-eye-outline",
      },
    ],
    page: 1,
    pageCount: 0,
    itemsPerPage: 7,
  }),

  mounted() {
    const border = document.querySelectorAll(
      ".theme--light.v-data-table > .v-data-table__wrapper > table > tbody > tr:not(:last-child) > td:not(.v-data-table__mobile-row), .theme--light.v-data-table > .v-data-table__wrapper > table > tbody > tr:not(:last-child) > th:not(.v-data-table__mobile-row)"
    )

    if (border)
      for (let i = 0; i <= border.length; i++) {
        border[i].style.borderColor = "transparent"
      }
  },

  methods: {
    ...mapActions(["viewTransactionDetails"]),
  },

  computed: {
    ...mapState(["viewDetailsDialog"]),
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
