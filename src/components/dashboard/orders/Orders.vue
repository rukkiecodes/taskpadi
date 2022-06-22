<template>
  <v-container fluid>
    <CreateOrders class="mb-5" />

    <v-card flat class="mx-0 px-0 px-lg-2" color="transparent">
      <v-card-text class="mx-0 px-0 px-lg-2">
        <v-data-table :page.sync="page" :headers="headers" class="elevation-0" hide-default-footer :items="userOrders"
          :mobile-breakpoint="0" :search="orders.search" :items-per-page="itemsPerPage"
          @page-count="pageCount = $event">
          <template v-slot:item._id="{ item }">
            <span class="grey--text text--darken-4 text-body-2 font-weight-light">{{ item._id }}</span>
          </template>
          <template v-slot:item.buyerPhone="{ item }">
            <span class="grey--text text--darken-4 text-body-2 font-weight-light">{{ item.buyerPhone }}</span>
          </template>
          <template v-slot:item.price="{ item }">
            <span class="grey--text text--darken-4 text-body-2 font-weight-light">{{ item.price }}</span>
          </template>
          <template v-slot:item.charge="{ item }">
            <span class="grey--text text--darken-4 text-body-2 font-weight-light">{{ item.charge }}</span>
          </template>
          <template v-slot:item.totalCost="{ item }">
            <span class="grey--text text--darken-4 text-body-2 font-weight-light">{{ item.totalCost }}</span>
          </template>
          <template v-slot:item.quantity="{ item }">
            <span class="grey--text text--darken-4 text-body-2 font-weight-light">{{ item.quantity }}</span>
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
              <vs-button icon transparent color="#2A00A2" @click="viewOrderDetails(item)">
                <i class="lar la-eye"></i>
              </vs-button>
            </div>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex"
import CreateOrders from "./CreateOrders.vue"

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
      { text: "Phone number", value: "buyerPhone", sortable: false },
      { text: "Price", value: "price", sortable: false },
      { text: "Charge", value: "charge", sortable: false },
      { text: "Total cost", value: "totalCost", sortable: false },
      { text: "Quantity", value: "quantity", sortable: false },
      { text: "Status", value: "status", sortable: false },
      { text: "View", value: "view", sortable: false },
    ],
  }),

  mounted () {
    this.$nextTick(() => {
      this.getOrders()

      console.log('my orders: ', this.userOrders)

      let border
      let borderInterval = setInterval(() => {
        border = document.querySelectorAll(
          ".theme--light.v-data-table > .v-data-table__wrapper > table > tbody > tr:not(:last-child) > td:not(.v-data-table__mobile-row), .theme--light.v-data-table > .v-data-table__wrapper > table > tbody > tr:not(:last-child) > th:not(.v-data-table__mobile-row)"
        )
        border.forEach((el) => {
          el.style.border = "none"
        })
      }, 10)
    })
  },

  methods: {
    ...mapActions(["getOrders"]),

    viewOrderDetails (item) {
      console.log(item)
    }
  },

  components: { CreateOrders },

  computed: {
    ...mapGetters(['userOrders']),
    ...mapState(['orders'])
  }
}
</script>
