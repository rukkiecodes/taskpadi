export default {
  state: {
    active_dash_route: "",
  },
  mutations: {
    check_dash_active_route: (state) => {
      console.log("from store: ",location.pathname)
      return state
    },
  },
  actions: {
    check_dash_active_route({ commit }) {
      commit("check_dash_active_route");
    },
  },
};
