<template>
  <v-container fluid>
    <CreateTransaction class="mb-5" />
    <v-toolbar v-show="!$route.params._id" flat dense color="transparent">
      <vs-button
        icon
        dark
        transparent
        class="hidden-sm-and-up"
        to="/dashboard/transactions/goods"
      >
        <i class="las la-store-alt"></i>
      </vs-button>
      <vs-button
        icon
        dark
        transparent
        class="hidden-sm-and-up"
        to="/dashboard/transactions/crypto"
      >
        <i class="lab la-bitcoin"></i>
      </vs-button>
      <vs-button
        icon
        dark
        transparent
        class="hidden-sm-and-up"
        to="/dashboard/transactions/services"
      >
        <i class="las la-concierge-bell"></i>
      </vs-button>
      <v-btn
        depressed
        color="transparent"
        to="/dashboard/transactions/goods"
        class="text-capitalize text-body-2 hidden-xs-only"
        >Good/Products</v-btn
      >
      <v-btn
        depressed
        color="transparent"
        to="/dashboard/transactions/crypto"
        class="text-capitalize text-body-2 hidden-xs-only"
        >Crypto</v-btn
      >
      <v-btn
        depressed
        color="transparent"
        to="/dashboard/transactions/services"
        class="text-capitalize text-body-2 hidden-xs-only"
        >Services</v-btn
      >

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
            @click="checkList(item)"
            v-for="(item, index) in transactionFilters"
          >
            <v-list-item-title
              class="text-body-2 grey--text text--darken-2 font-weight-light"
              >{{ item.title }}</v-list-item-title
            >
          </v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar>
    <router-view />
  </v-container>
</template>

<script>
// import Services from "../transaction/services/Services.vue"
import { mapActions, mapGetters, mapState } from "vuex"
export default {
  components: {
    CreateTransaction: () => import("./CreateTransaction.vue"),
  },

  mounted() {
    this.$nextTick(() => {
      this.getTransactions()
    })
  },

  methods: {
    ...mapActions(["getTransactions"]),
    checkList(item) {
      if (item.title == "All") {
        this.transaction.search = ""
      } else {
        this.transaction.search = item.title
      }
    },
  },

  computed: {
    ...mapState(["transaction"]),
    ...mapGetters(["transactionFilters"]),
  },
}
</script>