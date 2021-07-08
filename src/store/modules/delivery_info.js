import router from "../../router/index";
import snackbar_state from "./snackbar_state";
export default {
  state: {
    delivery: {
      product_name_input: "",
      product_size: 12,
      mesurment_unit_visibility: false,
      mesurment_unit: "",
      product_image: [],
      delivery_address: "",
      state_of_residence: "",
    },
  },
  mutations: {
    go_to_product_size: (state) => {
      if (state.delivery.product_name_input != "") {
        router.push("delivery_info/product_size");
      } else {
        snackbar_state.state.snackbar = {
          snackbar_state: true,
          text: `product name can not be empty`,
          snackbar_color: "red",
          snackbar_button_color: "white",
          snackbar_text_color: "white--text",
        };
      }
    },
    go_to_product_image: (state) => {
      if (state.delivery.product_size != "" && state.delivery.mesurment_unit != "") {
        router.push("product_image");
      } else {
        snackbar_state.state.snackbar = {
          snackbar_state: true,
          text: `product image can not be empty`,
          snackbar_color: "red",
          snackbar_button_color: "white",
          snackbar_text_color: "white--text",
        };
      }
    },
    go_to_residential_address: (state) => {
      if (state.delivery.product_image.length != 0) {
        router.push("residential_address");
      } else {
        snackbar_state.state.snackbar = {
          snackbar_state: true,
          text: `product image can not be empty`,
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
    go_to_product_image({ commit }) {
      commit("go_to_product_image");
    },
    go_to_residential_address({ commit }) {
      commit("go_to_residential_address");
    },
  },
  getters: {},
};
