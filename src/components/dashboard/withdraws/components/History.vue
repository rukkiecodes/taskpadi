<template>
  <v-col cols="12">
    <v-data-table
      :search="search"
      :headers="headers"
      :page.sync="page"
      :items="transactions"
      :mobile-breakpoint="0"
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
          class="text-capitalize rounded-lg"
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
</template>

<script>
export default {
  data: () => ({
    search: "",
    page: 1,
    pageCount: 0,
    itemsPerPage: 7,
    headers: [
      {
        text: "ID",
        align: "start",
        sortable: false,
        value: "id",
      },
      { text: "Account name", value: "accountName" },
      { text: "Account number", value: "accountNumber" },
      { text: "Date", value: "date" },
      { text: "Status", value: "status" },
    ],
    transactions: [
      {
        id: "12625juf",
        accountName: "James Cannon",
        accountNumber: "0216732026",
        date: "2021-10-21",
        status: "Pending",
      },
      {
        id: "19695juf",
        accountName: "James Cannon",
        accountNumber: "0216732026",
        date: "2021-10-21",
        status: "Failed",
      },
      {
        id: "12691juf",
        accountName: "James Cannon",
        accountNumber: "0216732026",
        date: "2021-10-21",
        status: "Successful",
      },
      {
        id: "12645juf",
        accountName: "James Cannon",
        accountNumber: "0216732026",
        date: "2021-10-21",
        status: "Pending",
      },
      {
        id: "15695juf",
        accountName: "James Cannon",
        accountNumber: "0216732026",
        date: "2021-10-21",
        status: "Failed",
      },
      {
        id: "16695juf",
        accountName: "James Cannon",
        accountNumber: "0216732026",
        date: "2021-10-21",
        status: "Successful",
      },
      {
        id: "17695juf",
        accountName: "James Cannon",
        accountNumber: "0216732026",
        date: "2021-10-21",
        status: "Failed",
      },
    ],
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
}
</script>
