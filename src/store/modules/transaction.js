import Vue from "vue"

export default {
  state: {
    transactionFilters: [
      { title: "All" },
      { title: "Successful" },
      { title: "Pending" },
      { title: "Failed" },
    ],
    search: "",

    imageName: "",

    createTransactionDialog: false,

    createTransactionLoading: false,

    createTransactionCredential: {
      recipient_name: "",
      recipient_email: "",
      recipient_phone: "",
      transaction_type: "",
      price: "",
      quantity: "",
      role: "",
      description: "",
      image: "",
      duration: "",
    },

    transactions: [],
  },
  getters: {
    transactionFilters: (state) => state.transactionFilters,
    transactions: (state) => state.transactions,
  },

  mutations: {
    createTransaction: (state, response) => {
      console.log(response)
      if (response.success == true) {
        state.createTransactionDialog = false
        Vue.prototype.$vs.notification({
          duration: "none",
          icon: `<i class="lar la-check-circle"></i>`,
          border: "#46C93A",
          position: "top-right",
          title: "Yippee!!!",
          text: response.message,
        })
      }
      if (response.success == false) {
        state.createTransactionDialog = false
        state.createTransactionLoading = false
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-exclamation-triangle"></i>`,
          border: "rgb(255, 71, 87)",
          position: "top-right",
          title: "Oops!!!",
          text: response.message,
        })
      }
    },

    getTransactions: (state, response) => {
      state.transactions = []
      let transactionsData = response.data
      for (let i = 0; i < transactionsData.length; i++) {
        state.transactions.push(transactionsData[i])
      }
      console.log("getTransactions: ", state.transactions)
    },
  },

  actions: {
    setTransactionImage({ commit }, image) {
      this.state.transaction.imageName = image.name
      this.state.transaction.createTransactionCredential.image = image
      console.log("state: ", image)
    },

    async createTransaction({ commit, dispatch }) {
      let token = Vue.prototype.$cookies.get("PaddiData").access_token
      const obj = this.state.transaction.createTransactionCredential

      this.state.transaction.createTransactionLoading = true

      let formData = new FormData()

      let myHeaders = new Headers()
      myHeaders.append("Accept", "multipart/form-data")
      myHeaders.append("Authorization", "Bearer " + token)

      formData.append(
        "recipient_name",
        this.state.transaction.createTransactionCredential.recipient_name
      )
      formData.append(
        "recipient_email",
        this.state.transaction.createTransactionCredential.recipient_email
      )
      formData.append(
        "recipient_phone",
        this.state.transaction.createTransactionCredential.recipient_phone
      )
      formData.append(
        "transaction_type",
        this.state.transaction.createTransactionCredential.transaction_type
      )
      formData.append(
        "price",
        this.state.transaction.createTransactionCredential.price
      )
      formData.append(
        "quantity",
        this.state.transaction.createTransactionCredential.quantity
      )
      formData.append(
        "role",
        this.state.transaction.createTransactionCredential.role
      )
      formData.append(
        "description",
        this.state.transaction.createTransactionCredential.description
      )
      formData.append(
        "image",
        this.state.transaction.createTransactionCredential.image
      )
      formData.append(
        "duration",
        this.state.transaction.createTransactionCredential.duration
      )

      let requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formData,
        redirect: "follow",
      }

      fetch(location.origin + "/user/transaction", requestOptions)
        .then((response) => response.json())
        .then((response) => {
          return dispatch("getTransactions").then(() => {
            this.state.transaction.createTransactionLoading = false
            commit("createTransaction", response)
          })
        })
        .catch((error) => {
          console.log("Error: ", error)
          this.state.transaction.createTransactionLoading = false
          Vue.prototype.$vs.notification({
            icon: `<i class="las la-exclamation-triangle"></i>`,
            border: "rgb(255, 71, 87)",
            position: "top-right",
            title: "Error !!!",
            text: error,
          })
        })
    },

    async getTransactions({ commit }) {
      let token = Vue.prototype.$cookies.get("PaddiData").access_token
      fetch(location.origin + "/user/transactions", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((response) => {
          commit("getTransactions", response)
        })
        .catch((error) => {
          console.log("Error: ", error)
        })
    },
  },
}
