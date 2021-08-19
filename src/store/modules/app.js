export default {
  state: {
    app_theme: "",
  },
  getters: {},
  mutations: {
    dark_mode: (state) => {
      localStorage.setItem("trustpaddi_app_theme", "dark");
      setTimeout(() => {
        state.app_theme = localStorage.getItem("trustpaddi_app_theme");
        console.log(state.app_theme);
      }, 1000);
    },
    light_mode: (state) => {
      localStorage.setItem("trustpaddi_app_theme", "light");
      setTimeout(() => {
        state.app_theme = localStorage.getItem("trustpaddi_app_theme");
        console.log(state.app_theme);
      }, 1000);
    },
  },
  actions: {
    dark_mode({ commit }) {
      commit("dark_mode");
    },
    light_mode({ commit }) {
      commit("light_mode");
    },
  },
};
