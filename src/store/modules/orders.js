import Vue from "vue"

export default {
  state: {
    // editAvatarDialog: false,
    // credential: {
    //   firstname: "",
    //   lastname: "",
    //   phone_number: "",
    //   country: "",
    //   state: "",
    //   lga: "",
    //   address: "",
    // },
    // userData: {},
    // avatar: "",
    // saveLoading: false,
    // nigerianStates: [],
  },

  getters: {
    // nigerianStates: (state) => state.nigerianStates,
  },

  mutations: {
    getOrders: (state, response) => {
      console.log("Orders: ", response)
    },
  },

  actions: {
    async getOrders({ commit }) {
      let token = Vue.prototype.$cookies.get("PaddiData").access_token
      console.log(token)
      fetch(`${location.origin}/user/orders`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((response) => {
          commit("getOrders", response)
        })
        .catch((error) => {
          console.log("Error: ", error)
        })
    },
  },
}
