<template>
  <!-- <v-row justify="start">
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
  </v-row> -->
  <vs-table class="white">
    <template #thead>
      <vs-tr class="white">
        <vs-th class="white"> ID </vs-th>
        <vs-th class="white"> Product </vs-th>
        <vs-th class="white"> Amount </vs-th>
        <vs-th class="white"> Date </vs-th>
        <vs-th class="white"> Status </vs-th>
        <vs-th class="white"> View </vs-th>
      </vs-tr>
    </template>
    <template #tbody>
      <vs-tr
        :key="i"
        :data="transaction"
        v-for="(transaction, i) in $vs.getPage(
          $vs.getSearch(transactionData, transaction.search),
          page,
          max
        )"
      >
        <vs-td>
          {{ transaction.Transaction_id }}
        </vs-td>
        <vs-td>
          {{ transaction.product }}
        </vs-td>
        <vs-td>
          {{ transaction.product_amount }}
        </vs-td>
        <vs-td>
          {{ transaction.date }}
        </vs-td>
        <vs-td>
          <v-btn
            dark
            small
            depressed
            class="text-capitalize rounded-lg"
            :class="{
              'orange lighten-5 orange--text text--accent-3':
                transaction.productStatus == 'Pending',
              'teal lighten-5 teal--text text--darken-1':
                transaction.productStatus == 'Successful',
              'red lighten-5 red--text text--darken-1':
                transaction.productStatus == 'Failed',
            }"
          >
            {{ transaction.productStatus }}
          </v-btn>
        </vs-td>
        <vs-td>
          <div class="d-flex">
            <vs-button icon flat class="mr-2" color="#1CC8EE">
              <i class="las la-reply"></i>
            </vs-button>
            <vs-button
              icon
              flat
              color="#2A00A2"
              @click="viewTransactionDetails(transaction)"
            >
              <i class="lar la-eye"></i>
            </vs-button>
          </div>
        </vs-td>
      </vs-tr>
    </template>

    <template #footer>
      <vs-pagination
        v-model="page"
        color="#6200EA"
        :length="
          $vs.getLength($vs.getSearch(transactionData, transaction.search), max)
        "
      />
    </template>
  </vs-table>
</template>

<script>
// @ts-nocheck
import { mapActions, mapState } from "vuex"
export default {
  data: () => ({
    page: 1,
    max: 7,
    header: [
      {
        text: "Transaction ID",
        value: "Transaction_id",
      },
      { text: "Product", value: "product" },
      { text: "Amount", value: "product_amount" },
      { text: "Date", value: "date" },
      { text: "Status", value: "productStatus" },
      { text: "View", value: "productAction" },
    ],

    transactionData: [
      {
        Transaction_id: "12695juf",
        product: "Shoe",
        product_amount: 4.3,
        date: new Date().toLocaleDateString(),
        productStatus: "Successful",
        productAction: "mdi-eye-outline",
      },
      {
        Transaction_id: "13695juf",
        product: "IPhone X",
        product_amount: 4.3,
        date: new Date().toLocaleDateString(),
        productStatus: "Failed",
        productAction: "mdi-eye-outline",
      },
      {
        Transaction_id: "11695juf",
        product: "Zink",
        product_amount: 4.9,
        date: new Date().toLocaleDateString(),
        productStatus: "Pending",
        productAction: "mdi-eye-outline",
      },
      {
        Transaction_id: "22695juf",
        product: "IPhone X",
        product_amount: 4.3,
        date: new Date().toLocaleDateString(),
        productStatus: "Successful",
        productAction: "mdi-eye-outline",
      },
      {
        Transaction_id: "16695juf",
        product: "Gold bar",
        product_amount: 7,
        date: new Date().toLocaleDateString(),
        productStatus: "Failed",
        productAction: "mdi-eye-outline",
      },
      {
        Transaction_id: "32695juf",
        product: "Broiler Chicken",
        product_amount: 0.0,
        date: new Date().toLocaleDateString(),
        productStatus: "Successful",
        productAction: "mdi-eye-outline",
      },
      {
        Transaction_id: "92695juf",
        product: "Television",
        product_amount: 0,
        date: new Date().toLocaleDateString(),
        productStatus: "Pending",
        productAction: "mdi-eye-outline",
      },
      {
        Transaction_id: "42695juf",
        product: "Refridgirator",
        product_amount: 6.5,
        date: new Date().toLocaleDateString(),
        productStatus: "Successful",
        productAction: "mdi-eye-outline",
      },
      {
        Transaction_id: "52695juf",
        product: "Gold bar",
        product_amount: 7,
        date: new Date().toLocaleDateString(),
        productStatus: "Successful",
        productAction: "mdi-eye-outline",
      },
      {
        Transaction_id: "62695juf",
        product: "Bag",
        product_amount: 4.0,
        date: new Date().toLocaleDateString(),
        productStatus: "Pending",
        productAction: "mdi-eye-outline",
      },
      {
        Transaction_id: "72695juf",
        product: "Apple",
        product_amount: 6.0,
        date: new Date().toLocaleDateString(),
        productStatus: "Pending",
        productAction: "mdi-eye-outline",
      },
      {
        Transaction_id: "15695juf",
        product: "Refridgirator",
        product_amount: 6.5,
        date: new Date().toLocaleDateString(),
        productStatus: "Failed",
        productAction: "mdi-eye-outline",
      },
      {
        Transaction_id: "82695juf",
        product: "Eva wine",
        product_amount: 3.9,
        date: new Date().toLocaleDateString(),
        productStatus: "Pending",
        productAction: "mdi-eye-outline",
      },
      {
        Transaction_id: "14695juf",
        product: "Broiler Chicken",
        product_amount: 0.0,
        date: new Date().toLocaleDateString(),
        productStatus: "Failed",
        productAction: "mdi-eye-outline",
      },
      {
        Transaction_id: "10695juf",
        product: "Zink",
        product_amount: 4.9,
        date: new Date().toLocaleDateString(),
        productStatus: "Pending",
        productAction: "mdi-eye-outline",
      },
      {
        Transaction_id: "12695juf",
        product: "Shoe",
        product_amount: 4.3,
        date: new Date().toLocaleDateString(),
        productStatus: "Failed",
        productAction: "mdi-eye-outline",
      },
    ],
    page: 1,
    pageCount: 0,
    itemsPerPage: 8,
  }),

  mounted() {
    this.$nextTick(() => {
      const footer = document.querySelector(".vs-table__footer")

      if (footer) {
        footer.style.background = "none"
      }
    })
  },

  methods: {
    ...mapActions(["viewTransactionDetails"]),
  },

  computed: {
    ...mapState(["transaction"]),
  },
}
</script>
