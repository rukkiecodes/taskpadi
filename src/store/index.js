import Vue from "vue";
import Vuex from "vuex";
import app_drawer from "./modules/app_drawer";
import good_and_product_buyer from "./modules/good_and_product_buyer";
import snackbar_state from "./modules/snackbar_state";
import delivery_info from "./modules/delivery_info";
import good_and_product_seller from "./modules/good_and _product_seller";
import custumers_crypto from "./modules/custumers_crypto";
import trader_crypto from "./modules/traders_crypto";
import provider_services from "./modules/provider_services";
import client_services from "./modules/client_services";
import proof_of_payment from "./modules/proof_of_payment";
import buyer_roles from "./modules/buyer_roles"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    app_nav_title: "",
  },
  actions: {
    app_bar_route() {
      this.state.app_nav_title = location.pathname;
    },
  },
  modules: {
    app_drawer,
    good_and_product_buyer,
    snackbar_state,
    delivery_info,
    good_and_product_seller,
    custumers_crypto,
    trader_crypto,
    provider_services,
    client_services,
    proof_of_payment,
    buyer_roles
  },
});
