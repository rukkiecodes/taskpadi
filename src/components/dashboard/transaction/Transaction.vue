<template>
  <v-container>
    <v-tabs
      v-model="tab"
      color="deep-purple accent-4"
      background-color="transparent"
    >
      <v-tab class="text-capitalize">Good/Products</v-tab>
      <v-tab class="text-capitalize">Crypto</v-tab>
      <v-tab class="text-capitalize">Services</v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-fade-transition>
        <v-tab-item class="deep-purple lighten-5">
          <GoodsAndProducts class="deep-purple lighten-5" />
        </v-tab-item>
      </v-fade-transition>
      <v-fade-transition>
        <v-tab-item class="deep-purple lighten-5">
          <Crypto class="deep-purple lighten-5" />
        </v-tab-item>
      </v-fade-transition>
      <v-fade-transition>
        <v-tab-item class="deep-purple lighten-5">
          <Services class="deep-purple lighten-5" />
        </v-tab-item>
      </v-fade-transition>
    </v-tabs-items>
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
  },
  computed: {
    ...mapState(["dashboardNavigation"]),
    ...mapGetters(["tabs"]),
  },
}
</script>
