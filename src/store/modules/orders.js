import Vue from "vue"
import axios from 'axios'

export default {
  state: {
    createOrderDialog: false,

    createOrderLoading: false,

    createOrderCredential: {
      productId: '623e843ea6aec805908ec79a',
      buyerEmail: 'rukkiecodes@gmail.com',
      buyerPhone: '08071657443',
      sellerId: '6227ff95bf412c6e44b4aa34',
      quantity: '2'
    },
  },

  getters: {},

  mutations: {
    getOrders: (state, response) => {
      console.log("Orders: ", response)
    },

    createOrder: (state, response) => {
      console.log("Orders: ", response)
    },
  },

  actions: {
    async getOrders ({ commit }) {
      let token = Vue.prototype.$cookies.get("PaddiData").access_token
      console.log(token)
      fetch("/api/user/orders", {
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

    setOrderImage ({ commit }) { },

    createOrder ({ commit, dispatch }) {
      let token = Vue.prototype.$cookies.get("PaddiData").token
      // this.state.orders.createOrderLoading = true

      let input = this.state.orders.createOrderCredential

      axios({
        url: `https://trustpaddi.herokuapp.com/order/create-order/${input.productId}/${input.buyerEmail}/${input.buyerPhone}/${input.sellerId}/${input.quantity}`,
        method: 'post',
        headers: { 'Authorization': `Bearer ${token}` }
      })
      return dispatch("getOrders").then(() => {
        commit("createOrder", order)
        this.state.orders.createOrderLoading = false
      }).catch(() => {
        this.state.orders.createOrderLoading = false
      })
    },
  },
}
