<template>
  <div>
    <vs-button
      @click="customerSupport.customerDialog = true"
      class="px-4 mb-5"
      size="large"
      color="#6200EA"
      >Submit ticket</vs-button
    >
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <vs-button
          transparent
          color="#616182"
          class="text-body-2 font-weight-bold text-capitalize mt-2"
          v-bind="attrs"
          v-on="on"
        >
          <i style="font-size: 1.1rem" class="las la-filter"></i>
          Filter
        </vs-button>
      </template>
      <v-list dense class="py-0">
        <v-list-item
          dense
          v-for="(item, index) in ticketFilters"
          :key="index"
          @click="sortSupport(item)"
        >
          <v-list-item-title
            class="text-body-2 grey--text text--darken-2 font-weight-light"
            >{{ item.title }}</v-list-item-title
          >
        </v-list-item>
      </v-list>
    </v-menu>

    <v-data-table
      :search="customerSupport.search"
      :headers="headers"
      :page.sync="page"
      :items="transactions"
      :mobile-breakpoint="0"
      hide-default-footer
      class="elevation-0"
      :items-per-page="itemsPerPage"
      @page-count="pageCount = $event"
    >
      <template v-slot:item.id="{ item }">
        <span class="text-caption grey--text text--darken-2">{{
          item.id
        }}</span>
      </template>
      <template v-slot:item.subject="{ item }">
        <span class="text-uppercase text-caption grey--text text--darken-2">{{
          item.subject
        }}</span>
      </template>
      <template v-slot:item.date="{ item }">
        <span class="text-uppercase text-caption grey--text text--darken-2">{{
          item.date
        }}</span>
      </template>
      <template v-slot:item.status="{ item }">
        <v-btn
          dark
          small
          depressed
          class="text-capitalize"
          :class="{
            'orange lighten-5 orange--text text--accent-3':
              item.status == 'Unresolved',
            'teal lighten-5 teal--text text--darken-1':
              item.status == 'Resolved',
          }"
        >
          {{ item.status }}
        </v-btn>
      </template>
      <template v-slot:item.action="{ item }">
        <vs-button icon transparent color="#292D32">
          <i class="las la-eye"></i>
        </vs-button>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex"
export default {
  data: () => ({
    headers: [
      {
        text: "ID",
        align: "start",
        sortable: false,
        value: "id",
      },
      { text: "Subject", value: "subject" },
      { text: "Date", value: "date" },
      { text: "Status", value: "status" },
      { text: "Response", value: "action", sortable: false },
    ],
    transactions: [
      {
        id: "12625juf",
        subject: "general complain",
        date: "2021-10-24",
        status: "Unresolved",
        action: "mdi-eye-outline",
      },
      {
        id: "19695juf",
        subject: "general complain",
        date: "2021-10-21",
        status: "Unresolved",
        action: "mdi-eye-outline",
      },
      {
        id: "12691juf",
        subject: "general complain",
        date: "2021-10-21",
        status: "Resolved",
        action: "mdi-eye-outline",
      },
      {
        id: "12645juf",
        subject: "general complain",
        date: "2021-10-24",
        status: "Unresolved",
        action: "mdi-eye-outline",
      },
      {
        id: "15695juf",
        subject: "general complain",
        date: "2021-10-21",
        status: "Unresolved",
        action: "mdi-eye-outline",
      },
      {
        id: "16695juf",
        subject: "general complain",
        date: "2021-10-21",
        status: "Resolved",
        action: "mdi-eye-outline",
      },
      {
        id: "17695juf",
        subject: "general complain",
        date: "2021-10-21",
        status: "Unresolved",
        action: "mdi-eye-outline",
      },
    ],
    page: 1,
    pageCount: 0,
    itemsPerPage: 7,
  }),

  mounted() {
    this.$nextTick(() => {
      const border = document.querySelectorAll(
        ".theme--light.v-data-table > .v-data-table__wrapper > table > tbody > tr:not(:last-child) > td:not(.v-data-table__mobile-row), .theme--light.v-data-table > .v-data-table__wrapper > table > tbody > tr:not(:last-child) > th:not(.v-data-table__mobile-row)"
      )

      if (border)
        for (let i = 0; i <= border.length - 1; i++) {
          setTimeout(() => {
            border[i].style.borderColor = "transparent"
          }, 100)
        }
    })
  },

  methods: {
    sortSupport(item) {
      console.log(item.title)
      if (item.title == "All") {
        this.customerSupport.search = ""
      } else {
        this.customerSupport.search = item.title
      }
    },
  },

  computed: {
    ...mapState(["customerSupport"]),
    ...mapGetters(["ticketFilters"]),
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
