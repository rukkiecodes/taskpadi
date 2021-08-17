import router from "../../router/index";
import snackbar_state from "./snackbar_state";
export default {
  state: {
    delivery: {
      track_1: false,
      track_2: false,
      activate_back_button: false,
      activate_next_button: true,
      product_name_input: "",
      product_size: 0,
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
          text: `product size can not be empty`,
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
    go_to_state_residence: (state) => {
      if (state.delivery.delivery_address != "") {
        router.push("state_address");
      } else {
        snackbar_state.state.snackbar = {
          snackbar_state: true,
          text: `Residential address can not be empty`,
          snackbar_color: "red",
          snackbar_button_color: "white",
          snackbar_text_color: "white--text",
        };
      }
    },
    go_back_to_di_product_name: state => {
      router.push("/delivery_info")
      return state
    },
    go_back_to_di_product_size: state => {
      router.push("product_size")
      return state
    },
    go_back_to_di_product_image: state => {
      router.push("product_image")
      return state
    },
    goback_to_di_residential_address: state => {
      router.push("residential_address")
      state.delivery.track_2 = false
      return state
    },
    goback_to_handle_delivery: state => {
      router.push("/good_and_product_buyer/handle_delivery")
      return state
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
    go_to_state_residence({ commit }) {
      commit("go_to_state_residence");
    },
    go_back_to_di_product_name({commit}) {
      commit("go_back_to_di_product_name")
    },
    go_back_to_di_product_size({commit}) {
      commit("go_back_to_di_product_size")
    },
    go_back_to_di_product_image({commit}) {
      commit("go_back_to_di_product_image")
    },
    goback_to_di_residential_address({commit}) {
      commit("goback_to_di_residential_address")
    },
    goback_to_handle_delivery({commit}) {
      commit("goback_to_handle_delivery")
    },
  },
};
