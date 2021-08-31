<template>
  <v-container>
    <v-tabs-items v-model="dashboardNavigation.transactionTabs">
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
  </v-container>
</template>

<script>
import GoodsAndProducts from "../transaction/goods and products/GoodsAndProducts.vue";
import Crypto from "../transaction/crypto/Crypto.vue";
import Services from "../transaction/services/Services.vue";
import { mapGetters, mapState } from "vuex";
export default {
  components: {
    GoodsAndProducts,
    Crypto,
    Services
  },
  computed: {
    ...mapState(["dashboardNavigation"]),
    ...mapGetters(["tabs"]),
  },
};
</script>
