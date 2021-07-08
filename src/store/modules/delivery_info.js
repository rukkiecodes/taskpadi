import router from "../../router/index";
import snackbar_state from "./snackbar_state";
export default {
  state: {
    delivery: {
      product_name_input: "",
      product_size: 12,
      mesurment_unit_visibility: false,
      mesurment_unit: "",
      delivery_address: "",
      state_of_residence: "",
    },
  },
  mutations: {
    go_to_product_size: (state) => {
      // console.log(state);
      if (state.delivery.product_name_input != "") {
        // router.push("/product_size");
        router.push("delivery_info/product_size");
        // console.log(state)
      } else {
        // console.log("Hello")
        snackbar_state.state.snackbar = {
          snackbar_state: true,
          text: `product name can not be empty`,
          snackbar_color: "red",
          snackbar_button_color: "white",
          snackbar_text_color: "white--text",
        };
      }
    },
  },
  actions: {
    go_to_product_size({ commit }) {
      commit("go_to_product_size");
    },
  },
  getters: {},
};
