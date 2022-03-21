<template>
  <v-container fluid>
    <CreateTransaction class="mb-5" />
    <v-toolbar flat dense color="transparent">
      <v-btn
        depressed
        color="transparent"
        to="/dashboard/transactions/goods"
        class="text-capitalize text-body-2"
        ><span class="hidden-xs-only">Good/</span>Products</v-btn
      >
      <v-btn
        depressed
        color="transparent"
        class="text-capitalize text-body-2"
        to="/dashboard/transactions/crypto"
        >Crypto</v-btn
      >
      <v-btn
        depressed
        color="transparent"
        class="text-capitalize text-body-2"
        to="/dashboard/transactions/services"
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

    <!--
    <v-fade-transition>
      <Crypto v-show="showCrypto" class="white mt-16" />
    </v-fade-transition>
    <v-fade-transition>
      <Services v-show="showServices" class="white mt-16" />
    </v-fade-transition>

    <ConfirmPop />
    <ConfirmDelete />
    <ConfirmDecline />
    <ConfirmConfirm />
    <ConfirmApprove />
    <UpdateTransaction /> -->
  </v-container>
</template>

<script>
// import Crypto from "../transaction/crypto/Crypto.vue"
// import Services from "../transaction/services/Services.vue"
import { mapActions, mapGetters, mapState } from "vuex"
export default {
  data: () => ({
    // active: "GoodAndProducts",
    // showGoodAndProduct: true,
    // showCrypto: false,
    // showServices: false,
  }),

  components: {
    // GoodsAndProducts,
    // Crypto,
    // Services,
    CreateTransaction: () => import("./CreateTransaction.vue"),
    // UpdateTransaction: () => import("./UpdateTransaction.vue"),
    // ConfirmApprove: () => import("./ConfirmApprove.vue"),
    // ConfirmConfirm: () => import("./ConfirmConfirm.vue"),
    // ConfirmDecline: () => import("./ConfirmDecline.vue"),
    // ConfirmPop: () => import("./ConfirmPop.vue"),
    // ConfirmDelete: () => import("./ConfirmDelete.vue"),
  },

  mounted() {
    this.$nextTick(() => {
      this.getTransactions()
      // this.active = "GoodAndProducts"
      // const tab = document.querySelector(".v-slide-group__content")
      // if (tab) {
      //   tab.style.overflowX = "auto"
      //   tab.style.overflowY = "hidden"
      // }
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

<style>
/* .v-slide-group__content::-webkit-scrollbar {
  width: 0px;
  height: 0px;
} */
</style>
