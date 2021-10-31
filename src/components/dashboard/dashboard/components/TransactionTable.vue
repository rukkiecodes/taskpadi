<template>
  <v-card width="1000%" color="transparent" class="mt-7 tableCard" flat>
    <v-card-title>
      Transaction Summary
      <v-spacer></v-spacer>
      <v-text-field
        dense
        outlined
        clearable
        hide-details
        label="Search"
        v-model="search"
        :search="search"
        color="deep-purple accent-4"
        prepend-inner-icon="mdi-magnify"
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :search="search"
      :headers="headers"
      :page.sync="page"
      :items="transactions"
      hide-default-footer
      :mobile-breakpoint="0"
      class="elevation-0 transparent"
      :items-per-page="itemsPerPage"
      @page-count="pageCount = $event"
    >
      <template v-slot:item.status="{ item }">
        <v-chip
          color="transparent"
          :class="{
            'orange--text': item.status == 'Pending',
            'teal--text': item.status == 'Successful',
          }"
          class="px-0"
        >
          {{ item.status }}
        </v-chip>
      </template>
      <template v-slot:item.action="{ item }">
        <v-btn
          dark
          x-small
          depressed
          class="text-capitalize rounded-xl"
          color="deep-purple accent-4"
          @click="viewTransactionDetails(item)"
        >
          {{ item.action }}
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
      { text: "View details", value: "action", sortable: false },
    ],
    transactions: [
      {
        id: "12625juf",
        amount: "#45,000",
        dateTime: "2021-10-24",
        status: "Pending",
        action: "view details",
      },
      {
        id: "12691juf",
        amount: "#25,900",
        dateTime: "2021-10-21",
        status: "Successful",
        action: "view details",
      },
      {
        id: "12645juf",
        amount: "#45,000",
        dateTime: "2021-10-24",
        status: "Pending",
        action: "view details",
      },
      {
        id: "15695juf",
        amount: "#25,000",
        dateTime: "2021-10-21",
        status: "Successful",
        action: "view details",
      },
    ],
    page: 1,
    pageCount: 0,
    itemsPerPage: 5,
  }),

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
