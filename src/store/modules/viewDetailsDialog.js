export default {
  state: {
    dialog: false,
  },

  mutations: {
    viewTransactionDetails: (state, item) => {
      console.log("viewTransactionDetails: ", item)
      state.dialog = true
    },
  },

  actions: {
    viewTransactionDetails({ commit }, item) {
      commit("viewTransactionDetails", item)
    },
  },
}
