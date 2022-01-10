import snackbar from "./snackbar";
export default {
  state: {
    steps: 1,
    goodAndProductSellerInputs: {
      email: "",
      phone: "",
      transactionTitle: "",
      description: "",
      price: "",
      productImage: [],
      productCondition: ""
    },
  },
  mutations: {
    togoodAndProductSellerPhone: (state) => {
      const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (state.goodAndProductSellerInputs.email.match(emailRegex)) {
        state.steps = 2;
      } else {
        snackbar.state.snack = true;
        snackbar.state.text = `Please enter a valid email`;
        snackbar.state.color = "error";
        snackbar.state.buttonColor = "error";
        state.steps = 1;
      }
    },
    togoodAndProductSellerTransactionTitle: (state) => {
      if (state.goodAndProductSellerInputs.phone != "") {
        state.steps = 3;
      } else {
        snackbar.state.snack = true;
        snackbar.state.text = `Please enter a Phone number`;
        snackbar.state.color = "error";
        snackbar.state.buttonColor = "error";
        state.steps = 2;
      }
    },
    togoodAndProductSellerProductDescription: (state) => {
      if (state.goodAndProductSellerInputs.transactionTitle != "") {
        state.steps = 4;
      } else {
        snackbar.state.snack = true;
        snackbar.state.text = `Please enter a transaction title`;
        snackbar.state.color = "error";
        snackbar.state.buttonColor = "error";
        state.steps = 3;
      }
    },
    togoodAndProductSellerPrice: (state) => {
      if (state.goodAndProductSellerInputs.description != "") {
        state.steps = 5;
      } else {
        snackbar.state.snack = true;
        snackbar.state.text = `Please enter the product description`;
        snackbar.state.color = "error";
        snackbar.state.buttonColor = "error";
        state.steps = 4;
      }
    },
    togoodAndProductSellerProductImage: (state) => {
      if (state.goodAndProductSellerInputs.price != "") {
        state.steps = 6;
      } else {
        snackbar.state.snack = true;
        snackbar.state.text = `Please enter agreed price`;
        snackbar.state.color = "error";
        snackbar.state.buttonColor = "error";
        state.steps = 5;
      }
    },
    togoodAndProductSellerProductCondition: (state) => {
      if (state.goodAndProductSellerInputs.productImage.length != 0) {
        state.steps = 7;
      } else {
        snackbar.state.snack = true;
        snackbar.state.text = `Please select a Product image`;
        snackbar.state.color = "error";
        snackbar.state.buttonColor = "error";
        state.steps = 6;
      }
    },
  },
  actions: {
    togoodAndProductSellerPhone({ commit }) {
      commit("togoodAndProductSellerPhone");
    },
    togoodAndProductSellerTransactionTitle({ commit }) {
      commit("togoodAndProductSellerTransactionTitle");
    },
    togoodAndProductSellerProductDescription({ commit }) {
      commit("togoodAndProductSellerProductDescription");
    },
    togoodAndProductSellerPrice({ commit }) {
      commit("togoodAndProductSellerPrice");
    },
    togoodAndProductSellerProductImage({ commit }) {
      commit("togoodAndProductSellerProductImage");
    },
    togoodAndProductSellerProductCondition({ commit }) {
      commit("togoodAndProductSellerProductCondition");
    },
  },
};
