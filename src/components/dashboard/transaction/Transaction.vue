<template>
  <v-container>
    <v-tabs
      v-model="tab"
      color="deep-purple accent-4"
      background-color="transparent"
    >
      <v-tab class="text-capitalize text-body-2 font-weight-bold"
        >Good & Products</v-tab
      >
      <v-tab class="text-capitalize text-body-2 font-weight-bold">Crypto</v-tab>
      <v-tab class="text-capitalize text-body-2 font-weight-bold"
        >Services</v-tab
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
            v-for="(item, index) in transactionFilters"
            :key="index"
            @click="checkList(item)"
          >
            <v-list-item-title class="text-body-2 grey--text text--darken-2 font-weight-light">{{
              item.title
            }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-spacer />

      <CreateTransaction />
    </v-tabs>

    <v-tabs-items class="mt-6" v-model="tab">
      <v-tab-item class="white">
        <GoodsAndProducts class="white" />
      </v-tab-item>
      <v-tab-item class="white">
        <Crypto class="white" />
      </v-tab-item>
      <v-tab-item class="white">
        <Services class="white" />
      </v-tab-item>
    </v-tabs-items>
    <ViewDetails />
  </v-container>
</template>

<script>
import GoodsAndProducts from "../transaction/goods and products/GoodsAndProducts.vue"
import Crypto from "../transaction/crypto/Crypto.vue"
import Services from "../transaction/services/Services.vue"
import { mapGetters, mapState } from "vuex"
export default {
  data: () => ({
    value: "",
    tab: null,
    menu: "",
  }),

  components: {
    GoodsAndProducts,
    Crypto,
    Services,
    ViewDetails: () =>
      import("../../../components/app components/ViewDetails.vue"),
    CreateTransaction: () => import("./CreateTransaction.vue"),
  },

  methods: {
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
