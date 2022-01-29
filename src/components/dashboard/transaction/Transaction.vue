<template>
  <v-container>
    <CreateTransaction class="mb-5" />

    <v-tabs>
      <vs-navbar
        square
        hide-scroll
        color="#F8F8FB"
        v-model="active"
        center-collapsed
        target-scroll="#hide-scroll-content"
      >
        <template #left>
          <vs-navbar-item
            id="GoodAndProducts"
            :active="active == 'GoodAndProducts'"
            @click="
              () => {
                active = 'GoodAndProducts'
                showGoodAndProduct = true
                showCrypto = false
                showServices = false
              }
            "
          >
            Good & Products
          </vs-navbar-item>
          <vs-navbar-item
            :active="active == 'Crypto'"
            id="Crypto"
            @click="
              () => {
                active = 'Crypto'
                showGoodAndProduct = false
                showCrypto = true
                showServices = false
              }
            "
          >
            Crypto
          </vs-navbar-item>
          <vs-navbar-item
            :active="active == 'Services'"
            id="Services"
            @click="
              () => {
                active = 'Services'
                showGoodAndProduct = false
                showCrypto = false
                showServices = true
              }
            "
          >
            Services
          </vs-navbar-item>

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
                v-for="(item, index) in transactionFilters"
                :key="index"
                @click="checkList(item)"
              >
                <v-list-item-title
                  class="text-body-2 grey--text text--darken-2 font-weight-light"
                  >{{ item.title }}</v-list-item-title
                >
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
      </vs-navbar>
    </v-tabs>

    <v-fade-transition>
      <GoodsAndProducts v-show="showGoodAndProduct" class="white mt-10" />
    </v-fade-transition>
    <v-fade-transition>
      <Crypto v-show="showCrypto" class="white mt-16" />
    </v-fade-transition>
    <v-fade-transition>
      <Services v-show="showServices" class="white mt-16" />
    </v-fade-transition>

    <UpdateTransaction />
    <ConfirmApprove />
    <ViewDetails />
  </v-container>
</template>

<script>
import GoodsAndProducts from "../transaction/goods and products/GoodsAndProducts.vue"
import Crypto from "../transaction/crypto/Crypto.vue"
import Services from "../transaction/services/Services.vue"
import { mapActions, mapGetters, mapState } from "vuex"
export default {
  data: () => ({
    active: "GoodAndProducts",
    showGoodAndProduct: true,
    showCrypto: false,
    showServices: false,
  }),

  components: {
    GoodsAndProducts,
    Crypto,
    Services,
    ViewDetails: () =>
      import("./ViewDetails.vue"),
    CreateTransaction: () => import("./CreateTransaction.vue"),
    UpdateTransaction: () => import("./UpdateTransaction.vue"),
    ConfirmApprove: () => import("./ConfirmApprove.vue"),
  },

  mounted() {
    this.$nextTick(() => {
      this.getTransactions()
      this.active = "GoodAndProducts"
      const tab = document.querySelector(".v-slide-group__content")

      if (tab) {
        tab.style.overflowX = "auto"
        tab.style.overflowY = "hidden"
      }
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
.v-slide-group__content::-webkit-scrollbar {
  width: 0px;
  height: 0px;
}
</style>
