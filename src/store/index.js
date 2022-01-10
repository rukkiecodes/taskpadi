import Vue from "vue";
import Vuex from "vuex";

import nav from "./modules/nav";
import snackbar from "./modules/snackbar"
import faq from "./modules/faq"
import goodAndProductBuyer from "./modules/goodAndProductBuyer";
import deliveryInfo from "./modules/deliveryInfo";
import traderCrypto from "./modules/traderCrypto";
import clientServices from "./modules/clientServices";
import custumerCrypto from "./modules/custumerCrypto";
import goodAndProductSeller from "./modules/goodAndProductSeller";
import proofOfPayment from "./modules/proofOfPayment";
import providerServices from "./modules/providerServices";
import dashboardNavigation from "./modules/dashboardNavigation";
import signup from "./modules/signup"
import signin from "./modules/signin"
import logout from "./modules/logout"
import restrict from "./modules/restrict"
import viewDetailsDialog from "./modules/viewDetailsDialog"
import paddiLink from "./modules/paddiLink"
import paddiPay from "./modules/paddiPay"
import account from "./modules/account"

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    nav,
    snackbar,
    faq,
    goodAndProductBuyer,
    deliveryInfo,
    traderCrypto,
    clientServices,
    custumerCrypto,
    goodAndProductSeller,
    proofOfPayment,
    providerServices,
    dashboardNavigation,
    signup,
    signin,
    logout,
    restrict,
    viewDetailsDialog,
    paddiLink,
    paddiPay,
    account,
  },
})
