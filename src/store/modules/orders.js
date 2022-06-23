import Vue from "vue"
import axios from 'axios'
import router from '../../router'

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

    userOrders: [],

    search: '',

    order: {},
    verifyOrderLoading: false
  },

  getters: {
    userOrders: state => state.userOrders
  },

  mutations: {
    getOrders: (state, response) => {
      state.userOrders = []
      if (response.data.message == 'Orders found') {
        state.userOrders.push(...response.data.data)

        state.userOrders
      }
    },

    createOrder: (state, response) => {
      Vue.prototype.$vs.notification({
        icon: `<i class="lar la-check-circle"></i>`,
        border: "#46C93A",
        position: "top-right",
        title: "Yippee!!!",
        text: response.data.message,
      })
    },

    viewOrderDetails: (state, order) => router.push(`/dashboard/orders/${order._id}`),

    viewSingleOrder: (state, order) => {
      state.order = []
      state.order = order.data.data
    },

    verifyOrder: (state, order) => {
      Vue.prototype.$vs.notification({
        border: "#46C93A",
        position: "top-right",
        text: order.data.message,
      })
    }
  },

  actions: {
    async getOrders ({ commit }) {
      let token = Vue.prototype.$cookies.get("PaddiData").access_token

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
    },

    async createOrder ({ commit, dispatch }) {
      let token = Vue.prototype.$cookies.get("PaddiData").token
      this.state.orders.createOrderLoading = true

      let input = this.state.orders.createOrderCredential

      let order = await axios({
        url: `https://trustpaddi.herokuapp.com/order/create-order/${input.productId}/${input.buyerEmail}/${input.buyerPhone}/${input.sellerId}/${input.quantity}`,
        method: 'post',
        headers: { 'Authorization': `Bearer ${token}` }
      })
      return dispatch("getOrders")
        .then(() => {
          commit("createOrder", order)
          this.state.orders.createOrderLoading = false
          this.state.orders.createOrderDialog = false
        }).catch(() => {
          this.state.orders.createOrderLoading = false
          this.state.orders.createOrderDialog = false
        })
    },

    async getOrders ({ commit }) {
      let token = Vue.prototype.$cookies.get("PaddiData").token
      let userId = Vue.prototype.$cookies.get("PaddiData").user._id

      let orders = await axios({
        method: 'get',
        url: `https://trustpaddi.herokuapp.com/order/get-user-orders/${userId}`,
        headers: { 'Authorization': `Bearer ${token}` }
      })
      commit("getOrders", orders)
    },

    viewOrderDetails ({ commit }, order) {
      commit("viewOrderDetails", order)
    },

    async viewSingleOrder ({ commit }) {
      let token = Vue.prototype.$cookies.get("PaddiData").token
      let orderId = router.currentRoute.params._id

      axios({
        method: 'get',
        url: `https://trustpaddi.herokuapp.com/order/get-order/${orderId}`,
        headers: { 'Authorization': `Bearer ${token}` },
      }).then(response => commit("viewSingleOrder", response))
    },

    verifyOrder ({ commit, dispatch }, reference) {
      let token = Vue.prototype.$cookies.get("PaddiData").token

      this.state.orders.verifyOrderLoading = true

      axios({
        method: 'post',
        url: `https://trustpaddi.herokuapp.com/order/verify-order/${reference}`,
        headers: { 'Authorization': `Bearer ${token}` },
      }).then(order => {
        dispatch('viewSingleOrder')
          .then(() => commit("verifyOrder", order))
      }).finally(() => this.state.orders.verifyOrderLoading = false)
    }
  },
}
