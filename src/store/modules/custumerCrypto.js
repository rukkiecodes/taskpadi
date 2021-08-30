import snackbar from "./snackbar";
export default {
  state: {
    steps: 1,
    custumerCryptoInputs: {
      email: "",
      phone: "",
      currency: "",
      agreedAmount: "",
      price: "",
      duration: "",
      tradersWalletAddress: "",
    },
  },
  mutations: {
    tocustumerCryptoProductPhone: (state) => {
      const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (state.custumerCryptoInputs.email.match(emailRegex)) {
        state.steps = 2;
      } else {
        snackbar.state.snack = true;
        snackbar.state.text = `Please enter a valid email`;
        snackbar.state.color = "error";
        snackbar.state.buttonColor = "error";
        state.steps = 1;
      }
    },
    tocustumerCryptoProductCurrency: (state) => {
      if (state.custumerCryptoInputs.phone != "") {
        state.steps = 3;
      } else {
        snackbar.state.snack = true;
        snackbar.state.text = `Please enter a phone number`;
        snackbar.state.color = "error";
        snackbar.state.buttonColor = "error";
        state.steps = 2;
      }
    },
    tocustumerCryptoProductAgreedAmount: (state) => {
      if (state.custumerCryptoInputs.currency != "") {
        state.steps = 4;
      } else {
        snackbar.state.snack = true;
        snackbar.state.text = `Please select a currency`;
        snackbar.state.color = "error";
        snackbar.state.buttonColor = "error";
        state.steps = 3;
      }
    },
    tocustumerCryptoProductPrice: (state) => {
      if (state.custumerCryptoInputs.agreedAmount != "") {
        state.steps = 5;
      } else {
        snackbar.state.snack = true;
        snackbar.state.text = `Please enter Agreed amount`;
        snackbar.state.color = "error";
        snackbar.state.buttonColor = "error";
        state.steps = 4;
      }
    },
    tocustumerCryptoProductDuration: (state) => {
      if (state.custumerCryptoInputs.price != "") {
        state.steps = 6;
      } else {
        snackbar.state.snack = true;
        snackbar.state.text = `Please enter a price`;
        snackbar.state.color = "error";
        snackbar.state.buttonColor = "error";
        state.steps = 5;
      }
    },
    tocustumerCryptoTradersWalletAddress: (state) => {
      if (state.custumerCryptoInputs.duration != "") {
        state.steps = 7;
      } else {
        snackbar.state.snack = true;
        snackbar.state.text = `Please pick a duration`;
        snackbar.state.color = "error";
        snackbar.state.buttonColor = "error";
        state.steps = 6;
      }
    },
  },
  actions: {
    tocustumerCryptoProductPhone({ commit }) {
      commit("tocustumerCryptoProductPhone");
    },
    tocustumerCryptoProductCurrency({ commit }) {
      commit("tocustumerCryptoProductCurrency");
    },
    tocustumerCryptoProductAgreedAmount({ commit }) {
      commit("tocustumerCryptoProductAgreedAmount");
    },
    tocustumerCryptoProductPrice({ commit }) {
      commit("tocustumerCryptoProductPrice");
    },
    tocustumerCryptoProductDuration({ commit }) {
      commit("tocustumerCryptoProductDuration");
    },
    tocustumerCryptoTradersWalletAddress({ commit }) {
      commit("tocustumerCryptoTradersWalletAddress");
    },
  },
};
