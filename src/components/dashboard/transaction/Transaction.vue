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
      <v-btn>Helo</v-btn>

      <v-spacer />

      <CreateTransaction />
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item class="deep-purple lighten-5">
        <GoodsAndProducts class="deep-purple lighten-5" />
      </v-tab-item>
      <v-tab-item class="deep-purple lighten-5">
        <Crypto class="deep-purple lighten-5" />
      </v-tab-item>
      <v-tab-item class="deep-purple lighten-5">
        <Services class="deep-purple lighten-5" />
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
    tab: null,
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
