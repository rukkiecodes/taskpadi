import router from "../../router/index";
import snackbar_state from "./snackbar_state";
export default {
  state: {
    proof: {
      track_1: false,
      track_2: false,
      activeate_back_button: false,
      activeate_next_button: false,
      wallet_screenshots: [],
    },
  },
  mutations: {
    goto_other_proof: (state) => {
      if (state.proof.wallet_screenshots.length != 0) {
        router.push("/proof_of_payment/other_proof");
      } else {
        snackbar_state.state.snackbar = {
          snackbar_state: true,
          text: `please upload a screenshot`,
          snackbar_color: "red",
          snackbar_button_color: "white",
          snackbar_text_color: "white--text",
        };
      }
    },
    go_back_to_wallet_screenshot: (state) => {
      router.push("/proof_of_payment");
      state.proof.track_2 = false
    },
  },
  actions: {
    goto_other_proof({ commit }) {
      commit("goto_other_proof");
    },
    go_back_to_wallet_screenshot({ commit }) {
      commit("go_back_to_wallet_screenshot");
    },
  },
};
