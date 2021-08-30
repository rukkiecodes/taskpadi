import snackbar from "./snackbar";
export default {
  state: {
    steps: 1,
    deliveryInfoInputs: {
      name: "",
      size: "",
      sizeMesurmentUnit: "",
      productImage: [],
      residentialAddress: "",
      stateOfResidence: "",
    },
  },
  mutations: {
    toDeliveryInfoProductSize: (state) => {
      if (state.deliveryInfoInputs.name != "") {
        state.steps = 2;
      } else {
        snackbar.state.snack = true;
        snackbar.state.text = `Please enter product name`;
        snackbar.state.color = "error";
        snackbar.state.buttonColor = "error";
        state.steps = 1;
      }
    },
    toDeliveryInfoProductImage: (state) => {
      if (state.deliveryInfoInputs.size != "") {
        state.steps = 3;
      } else {
        snackbar.state.snack = true;
        snackbar.state.text = `Please enter product size`;
        snackbar.state.color = "error";
        snackbar.state.buttonColor = "error";
        state.steps = 2;
      }
    },
    toDeliveryInfoProductResidentialAddress: (state) => {
      if (state.deliveryInfoInputs.productImage.length != 0) {
        state.steps = 4;
      } else {
        snackbar.state.snack = true;
        snackbar.state.text = `Please enter product image`;
        snackbar.state.color = "error";
        snackbar.state.buttonColor = "error";
        state.steps = 3;
      }
    },
    toDeliveryInfoProductStateOfResidence: (state) => {
      if (state.deliveryInfoInputs.residentialAddress != "") {
        state.steps = 5;
      } else {
        snackbar.state.snack = true;
        snackbar.state.text = `Please enter your Residential address`;
        snackbar.state.color = "error";
        snackbar.state.buttonColor = "error";
        state.steps = 4;
      }
    },
  },
  actions: {
    toDeliveryInfoProductSize({ commit }) {
      commit("toDeliveryInfoProductSize");
    },
    toDeliveryInfoProductImage({ commit }) {
      commit("toDeliveryInfoProductImage");
    },
    toDeliveryInfoProductResidentialAddress({ commit }) {
      commit("toDeliveryInfoProductResidentialAddress");
    },
    toDeliveryInfoProductStateOfResidence({ commit }) {
      commit("toDeliveryInfoProductStateOfResidence");
    },
  },
};
