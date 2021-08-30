import snackbar from "./snackbar";
export default {
  state: {
    steps: 1,
    ProofOfPaymentInputs: {
      screenshot: [],
      otherProof: [],
    },
  },
  mutations: {
    toproofOfPaymentOtherProof: (state) => {
      if (state.ProofOfPaymentInputs.screenshot.length != 0) {
        state.steps = 2;
      } else {
        snackbar.state.snack = true;
        snackbar.state.text = `Please select a screenshot`;
        snackbar.state.color = "error";
        snackbar.state.buttonColor = "error";
        state.steps = 1;
      }
    },
  },
  actions: {
    toproofOfPaymentOtherProof({ commit }) {
      commit("toproofOfPaymentOtherProof");
    },
  },
};
