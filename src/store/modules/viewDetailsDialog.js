export default {
  state: {
    dialog: false,
  },

  mutations: {
    viewTransactionDetails: (state, transaction) => {
      console.log("viewTransactionDetails: ", transaction)
      state.dialog = true
    },
  },

  actions: {
    viewTransactionDetails({ commit }, transaction) {
      commit("viewTransactionDetails", transaction)
    },
  },
}
