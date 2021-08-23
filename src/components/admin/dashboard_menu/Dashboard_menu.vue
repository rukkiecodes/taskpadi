<template>
  <v-container fluid class="pa-0">
    <v-toolbar flat color="transparent">
      <v-spacer />
      <v-btn
        @click="dashboard_menu_drawer = !dashboard_menu_drawer"
        icon
        class="hidden-md-and-up float-right"
        color="indigo accent-4"
      >
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>
    <v-container class="px-4">
      <v-row justify="space-between" align="start">
        <v-col class="pa-0" cols="12" md="8" lg="8" xl="9">
          <v-row class="pa-0 ma-0" justify="space-between" align="start">
            <Wellcome />
            <Create_transaction />
            <Withdraw />
            <Create_paddi_link />
          </v-row>

          <v-row class="pa-0 ma-0" justify="space-between" align="start">
            <Goods_product_stats />
            <Crypto_stats />
          </v-row>
        </v-col>
        <v-col class="pa-0" cols="12" md="4" lg="4" xl="3">
          <v-col
            class="mx-sm-auto mt-sm-8 mt-md-0 hidden-sm-and-down"
            cols="12"
            sm="8"
            md="12"
          >
            <Transaction_dates />
          </v-col>
          <v-col
            class="mx-sm-auto mt-sm-8 mt-md-0 hidden-sm-and-down"
            cols="12"
            sm="8"
            md="12"
          >
            <Current_ballance />
          </v-col>
          <v-col
            class="mx-sm-auto mt-sm-8 mt-md-0 hidden-sm-and-down"
            cols="12"
            sm="8"
            md="12"
          >
            <Trust_ballance />
          </v-col>
          <v-col
            class="mx-sm-auto mt-sm-8 mt-md-0 hidden-sm-and-down"
            cols="12"
            sm="8"
            md="12"
          >
            <Completed />
          </v-col>
          <v-col
            class="mx-sm-auto mt-sm-8 mt-md-0 hidden-sm-and-down"
            cols="12"
            sm="8"
            md="12"
          >
            <Onboarding />
          </v-col>
          <v-col
            class="mx-sm-auto mt-sm-8 mt-md-0 hidden-sm-and-down"
            cols="12"
            sm="8"
            md="12"
          >
            <Paddi_transaction />
          </v-col>
        </v-col>
      </v-row>
    </v-container>

    <v-navigation-drawer
      v-model="dashboard_menu_drawer"
      color="#EFF1FF"
      width="350"
      right
      hide-overlay
      app
    >
      <v-toolbar color="transparent" flat>
        <v-spacer />
        <v-btn @click="dashboard_menu_drawer = !dashboard_menu_drawer" icon>
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card flat color="transparent" class="pa-4">
        <Transaction_dates />
        <Current_ballance class="mt-4" />
        <Trust_ballance class="mt-4" />
        <Onboarding class="mt-4" />
        <Paddi_transaction class="mt-4" />
      </v-card>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
// @ts-nocheck
import Wellcome from "./components/Wellcome.vue";
import Transaction_dates from "./components/Transaction_dates.vue";
import Current_ballance from "./components/Current_ballance.vue";
import Trust_ballance from "./components/Trust_ballance.vue";
import Create_transaction from "./components/Create_transaction.vue";
import Withdraw from "./components/Withdraw.vue";
import Create_paddi_link from "./components/Create_paddi_link.vue";
import Completed from "./components/Completed.vue";
import Onboarding from "./components/Onboarding.vue";
import Paddi_transaction from "./components/Paddi_transaction.vue";
import Goods_product_stats from "./components/Goods_product_stats.vue";
import Crypto_stats from "./components/Crypto_stats.vue";
import { mapState, mapActions } from "vuex";
export default {
  data: () => ({
    dashboard_menu_drawer: false,
  }),
  components: {
    Wellcome,
    Current_ballance,
    Transaction_dates,
    Trust_ballance,
    Create_transaction,
    Withdraw,
    Create_paddi_link,
    Completed,
    Onboarding,
    Paddi_transaction,
    Goods_product_stats,
    Crypto_stats,
  },
  mounted() {
    this.check_dash_active_route();
    this.default_route();
    this.my_logs();
  },
  methods: {
    ...mapActions(["check_dash_active_route"]),
    my_logs() {
      console.log("menu route: ", this.dash_nav.active_dash_route);
    },
    default_route() {
      this.dash_nav.active_dash_route = "/admin/menu";
    },
  },

  computed: {
    ...mapState(["dash_nav"]),
    dash_nav: {
      get() {
        return this.$store.state.dash_nav;
      },
      set(new_value) {
        this.$store.state.dash_nav = new_value;
      },
    },
  },
};
</script>
