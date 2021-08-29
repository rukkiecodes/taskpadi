import snackbar from "./snackbar";
export default {
  state: {
    steps: 1,
    goodAndProductBuyerInputs: {
      email: "",
      phone: "",
      name: "",
      price: "",
      description: "",
      condition: "",
      handleDelivery: ""
    },
  },
  mutations: {
    toGoodAndProductBuyerPhone: (state) => {
      const email_regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (state.goodAndProductBuyerInputs.email.match(email_regex)) {
        state.steps = 2;
      } else {
        snackbar.state.snack = true;
        snackbar.state.text = `Please enter a valid email`;
        snackbar.state.color = "error";
        snackbar.state.buttonColor = "error";
        state.steps = 1;
      }
    },
    toGoodAndProductBuyerName: (state) => {
      if (state.goodAndProductBuyerInputs.phone != "") {
        state.steps = 3;
      } else {
        snackbar.state.snack = true;
        snackbar.state.text = `Please enter a Phone number`;
        snackbar.state.color = "error";
        snackbar.state.buttonColor = "error";
        state.steps = 2;
      }
    },
    toGoodAndProductBuyerPrice: (state) => {
      if (state.goodAndProductBuyerInputs.name != "") {
        state.steps = 4;
      } else {
        snackbar.state.snack = true;
        snackbar.state.text = `Please enter product name`;
        snackbar.state.color = "error";
        snackbar.state.buttonColor = "error";
        state.steps = 3;
      }
    },
    toGoodAndProductBuyerDescription: (state) => {
      if (state.goodAndProductBuyerInputs.price != "") {
        state.steps = 5;
      } else {
        snackbar.state.snack = true;
        snackbar.state.text = `Please enter product price`;
        snackbar.state.color = "error";
        snackbar.state.buttonColor = "error";
        state.steps = 4;
      }
    },
    toGoodAndProductBuyerCondition: (state) => {
      if (state.goodAndProductBuyerInputs.description != "") {
        state.steps = 6;
      } else {
        snackbar.state.snack = true;
        snackbar.state.text = `Please enter product description`;
        snackbar.state.color = "error";
        snackbar.state.buttonColor = "error";
        state.steps = 5;
      }
    },
    toGoodAndProductBuyerHandleDelivery: (state) => {
      if (state.goodAndProductBuyerInputs.condition != "") {
        state.steps = 7;
      } else {
        snackbar.state.snack = true;
        snackbar.state.text = `Please select the product condition`;
        snackbar.state.color = "error";
        snackbar.state.buttonColor = "error";
        state.steps = 6;
      }
    },
  },
  actions: {
    toGoodAndProductBuyerPhone({ commit }) {
      commit("toGoodAndProductBuyerPhone");
    },
    toGoodAndProductBuyerName({ commit }) {
      commit("toGoodAndProductBuyerName");
    },
    toGoodAndProductBuyerPrice({ commit }) {
      commit("toGoodAndProductBuyerPrice");
    },
    toGoodAndProductBuyerDescription({ commit }) {
      commit("toGoodAndProductBuyerDescription");
    },
    toGoodAndProductBuyerCondition({ commit }) {
      commit("toGoodAndProductBuyerCondition");
    },
    toGoodAndProductBuyerHandleDelivery({ commit }) {
      commit("toGoodAndProductBuyerHandleDelivery");
    },
  },
};
