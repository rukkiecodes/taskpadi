import snackbar from "./snackbar";
export default {
  state: {
    steps: 1,
    traderCryptoInputs: {
      email: "",
      phone: "",
      currency: "",
      agreedAmount: "",
      price: "",
      duration: "",
    },
  },
  mutations: {
    totraderCryptoProductPhone: (state) => {
      const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (state.traderCryptoInputs.email.match(emailRegex)) {
        state.steps = 2;
      } else {
        snackbar.state.snack = true;
        snackbar.state.text = `Please enter a valid email`;
        snackbar.state.color = "error";
        snackbar.state.buttonColor = "error";
        state.steps = 1;
      }
    },
    totraderCryptoProductCurrency: (state) => {
      if (state.traderCryptoInputs.phone != "") {
        state.steps = 3;
      } else {
        snackbar.state.snack = true;
        snackbar.state.text = `Please enter a phone number`;
        snackbar.state.color = "error";
        snackbar.state.buttonColor = "error";
        state.steps = 2;
      }
    },
    totraderCryptoProductAgreedAmount: (state) => {
      if (state.traderCryptoInputs.currency != "") {
        state.steps = 4;
      } else {
        snackbar.state.snack = true;
        snackbar.state.text = `Please select a currency`;
        snackbar.state.color = "error";
        snackbar.state.buttonColor = "error";
        state.steps = 3;
      }
    },
    totraderCryptoProductPrice: (state) => {
      if (state.traderCryptoInputs.agreedAmount != "") {
        state.steps = 5;
      } else {
        snackbar.state.snack = true;
        snackbar.state.text = `Please enter Agreed amount`;
        snackbar.state.color = "error";
        snackbar.state.buttonColor = "error";
        state.steps = 4;
      }
    },
    totraderCryptoProductDuration: (state) => {
      if (state.traderCryptoInputs.price != "") {
        state.steps = 6;
      } else {
        snackbar.state.snack = true;
        snackbar.state.text = `Please enter a price`;
        snackbar.state.color = "error";
        snackbar.state.buttonColor = "error";
        state.steps = 5;
      }
    },
  },
  actions: {
    totraderCryptoProductPhone({ commit }) {
      commit("totraderCryptoProductPhone");
    },
    totraderCryptoProductCurrency({ commit }) {
      commit("totraderCryptoProductCurrency");
    },
    totraderCryptoProductAgreedAmount({ commit }) {
      commit("totraderCryptoProductAgreedAmount");
    },
    totraderCryptoProductPrice({ commit }) {
      commit("totraderCryptoProductPrice");
    },
    totraderCryptoProductDuration({ commit }) {
      commit("totraderCryptoProductDuration");
    },
  },
};
