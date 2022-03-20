<template>
  <v-card flat color="transparent">
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <vs-button
          v-on="on"
          transparent
          v-bind="attrs"
          color="#616182"
          class="text-body-2 font-weight-bold text-capitalize mt-2"
        >
          <i style="font-size: 1.1rem" class="las la-filter"></i>
          Filter
        </vs-button>
      </template>
      <v-list dense class="py-0">
        <v-list-item
          dense
          :key="index"
          @click="sortSupport(item)"
          v-for="(item, index) in ticketFilters"
        >
          <v-list-item-title
            class="text-body-2 grey--text text--darken-2 font-weight-light"
            >{{ item.title }}</v-list-item-title
          >
        </v-list-item>
      </v-list>
    </v-menu>
    <v-data-table
      :items="tickets"
      :headers="headers"
      :page.sync="page"
      hide-default-footer
      class="elevation-0"
      :mobile-breakpoint="0"
      :items-per-page="itemsPerPage"
      :search="customerSupport.search"
    >
      <template v-slot:item._id="{ item }">
        <span class="grey--text text--darken-4 text-body-2 font-weight-light">{{
          item._id
        }}</span>
      </template>
      <template v-slot:item.subject="{ item }">
        <span class="grey--text text--darken-4 text-body-2 font-weight-light">{{
          item.subject
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
      <template v-slot:item.action="{ item }">
        <vs-button @click="viewTicket(item)" icon shadow>
          <i class="lar la-eye"></i>
        </vs-button>
      </template>
    </v-data-table>

    <div class="d-flex justify-end align-center pt-2 transparent">
      <vs-pagination
        square
        v-model="page"
        color="#6200EA"
        :length="pageCount"
      />
    </div>
  </v-card>
</template>

<script>
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
      { text: "Subject", value: "subject", sortable: false },
      { text: "Date", value: "createdAt", sortable: false },
      { text: "Status", value: "status", sortable: false },
      { text: "Action", value: "action", sortable: false },
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
    ...mapActions(["viewTicket"]),

    sortSupport(item) {
      if (item.title == "All") this.customerSupport.search = ""
      else this.customerSupport.search = item.title
    },
  },

  computed: {
    ...mapState(["customerSupport"]),
    ...mapGetters(["ticketFilters", "tickets"]),
  },
}
</script>
