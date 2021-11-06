export default {
  state: {
    dialog: false,
    paddiLinkInputs: {
      title: "",
      price: "",
      description: "",
      image: null,
    },
    paddiLinks: [],
  },

  getters: {
    paddiLinks: (state) => state.paddiLinks,
  },

  mutations: {
    createPaddiLink: (state) => {
      if (
        state.paddiLinkInputs.title &&
        state.paddiLinkInputs.price &&
        state.paddiLinkInputs.description &&
        state.paddiLinkInputs.image
      ) {
        state.paddiLinks.push(state.paddiLinkInputs)
        state.paddiLinkInputs = {
          title: "",
          price: "",
          description: "",
          image: null,
        }
        state.dialog = false
      }
    },
  },

  actions: {
    createPaddiLink({ commit }) {
      commit("createPaddiLink")
    },
  },
}
