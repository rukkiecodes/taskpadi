export default {
  state: {
    buyer: {},
  },
  mutations: {
    goto_proceed_to_delivery: state => {
        console.log(state)
    }
  },

  actions: {
    goto_proceed_to_delivery({ commit }) {
      commit("goto_proceed_to_delivery");
    },
  },
};
