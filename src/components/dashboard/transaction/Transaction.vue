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
          <v-btn color="grey darken-2" dark text small class="text-body-2 font-weight-bold text-capitalize mt-3" v-bind="attrs" v-on="on">
            <i style="font-size: 1.1rem" class="las la-filter"></i>
            Filter
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index">
            <v-list-item-title class="text-body-2">{{ item.title }}</v-list-item-title>
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

    items: [
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2" },
    ],
  }),
  components: {
    GoodsAndProducts,
    Crypto,
    Services,
    ViewDetails: () =>
      import("../../../components/app components/ViewDetails.vue"),
    CreateTransaction: () => import("./CreateTransaction.vue"),
  },
  computed: {
    ...mapState(["dashboardNavigation"]),
    ...mapGetters(["tabs"]),
  },
}
</script>
