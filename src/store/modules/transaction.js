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

    updateTransactionCredential: {
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

    viewDetailsDialoge: false,

    selectedTransaction: {},

    updateTransactionDialog: false,

    updateTransactionLoading: false,

    selectedTransactionToUpdate: {},

    approveTransactionDialog: false,

    approveTransactionLoading: false,

    selectedTransactionToApprove: [],

    selectedTransactionToConfirm: [],

    confirmTransactionDialog: false,

    confirmTransactionLoading: false,
  },
  getters: {
    transactionFilters: (state) => state.transactionFilters,
    transactions: (state) => state.transactions,
    selectedTransactionToApprove: (state) => state.selectedTransactionToApprove,
    selectedTransactionToConfirm: (state) => state.selectedTransactionToConfirm,
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

    viewTransactionDetails: (state, transaction) => {
      console.log("view transaction details: ", transaction)
      state.selectedTransaction = transaction
      state.viewDetailsDialoge = true
    },

    openUpdateTransactionDialog: (state, transaction) => {
      console.log("update: ", transaction)
      state.selectedTransactionToUpdate = transaction
      var number = transaction.recipientPhone
      var arr = number.split("4")
      arr.shift()
      number = arr.join("4")
      state.updateTransactionCredential = {
        recipient_name: transaction.recipientName,
        recipient_email: transaction.buyerEmail,
        recipient_phone: 0 + number,
        transaction_type: transaction.type,
        price: transaction.price,
        quantity: transaction.quantity,
        role: "",
        description: transaction.description,
        image: "",
        duration: transaction.duration,
      }
      state.updateTransactionDialog = true
    },

    updateTransaction: (state, response) => {
      console.log(response)
      if (response.success == true) {
        state.updateTransactionDialog = false
        state.updateTransactionLoading = false
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
        state.updateTransactionDialog = false
        state.updateTransactionLoading = false
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-exclamation-triangle"></i>`,
          border: "rgb(255, 71, 87)",
          position: "top-right",
          title: "Oops!!!",
          text: response.message,
        })
      }
    },

    openApprovalTransactionDialog: (state, transaction) => {
      console.log(transaction)
      state.selectedTransactionToApprove = []
      state.selectedTransactionToApprove.push(transaction)
      state.approveTransactionDialog = true
    },

    confirmApprove: (state, response) => {
      console.log(response)
      if (response.success == true) {
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
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-exclamation-triangle"></i>`,
          border: "rgb(255, 71, 87)",
          position: "top-right",
          title: "Oops!!!",
          text: response.message,
        })
      }
    },

    openConfirmTransactionDialog: (state, transaction) => {
      console.log(transaction)
      state.selectedTransactionToConfirm = []
      state.selectedTransactionToConfirm.push(transaction)
      state.confirmTransactionDialog = true
    },

    confirmConfirm: (state, response) => {
      console.log(response)
      if (response.success == true) {
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
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-exclamation-triangle"></i>`,
          border: "rgb(255, 71, 87)",
          position: "top-right",
          title: "Oops!!!",
          text: response.message,
        })
      }
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

    viewTransactionDetails({ commit }, transaction) {
      commit("viewTransactionDetails", transaction)
    },

    openUpdateTransactionDialog({ commit }, transaction) {
      commit("openUpdateTransactionDialog", transaction)
    },

    setUpdateTransactionImage({ commit }, image) {
      this.state.transaction.imageName = image.name
      this.state.transaction.updateTransactionCredential.image = image
      console.log("state: ", image)
    },

    async updateTransaction({ commit, dispatch }) {
      let input = this.state.transaction.updateTransactionCredential
      let code = this.state.transaction.selectedTransactionToUpdate.code
      let token = Vue.prototype.$cookies.get("PaddiData").access_token

      if (
        input.recipient_name != "" &&
        input.recipient_email != "" &&
        input.recipient_phone &&
        input.transaction_type != "" &&
        input.price != "" &&
        input.quantity != "" &&
        input.role != "" &&
        input.description != "" &&
        input.image != "" &&
        input.duration != ""
      ) {
        this.state.transaction.updateTransactionLoading = true

        let formData = new FormData()

        let myHeaders = new Headers()
        myHeaders.append("Accept", "multipart/form-data")
        myHeaders.append("Authorization", "Bearer " + token)

        formData.append(
          "recipient_name",
          this.state.transaction.updateTransactionCredential.recipient_name
        )
        formData.append(
          "recipient_email",
          this.state.transaction.updateTransactionCredential.recipient_email
        )
        formData.append(
          "recipient_phone",
          this.state.transaction.updateTransactionCredential.recipient_phone
        )
        formData.append(
          "transaction_type",
          this.state.transaction.updateTransactionCredential.transaction_type
        )
        formData.append(
          "price",
          this.state.transaction.updateTransactionCredential.price
        )
        formData.append(
          "quantity",
          this.state.transaction.updateTransactionCredential.quantity
        )
        formData.append(
          "role",
          this.state.transaction.updateTransactionCredential.role
        )
        formData.append(
          "description",
          this.state.transaction.updateTransactionCredential.description
        )
        formData.append(
          "image",
          this.state.transaction.updateTransactionCredential.image
        )
        formData.append(
          "duration",
          this.state.transaction.updateTransactionCredential.duration
        )

        let requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: formData,
          redirect: "follow",
        }

        fetch(
          `${location.origin}/user/update-transaction/${code}`,
          requestOptions
        )
          .then((response) => response.json())
          .then((response) => {
            return dispatch("getTransactions").then(() => {
              this.state.transaction.updateTransactionLoading = false
              commit("updateTransaction", response)
            })
          })
          .catch((error) => {
            console.log("Error: ", error)
            this.state.transaction.updateTransactionLoading = false
            Vue.prototype.$vs.notification({
              icon: `<i class="las la-exclamation-triangle"></i>`,
              border: "rgb(255, 71, 87)",
              position: "top-right",
              title: "Error !!!",
              text: error,
            })
          })
      } else {
        this.state.transaction.updateTransactionLoading = false
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-exclamation-triangle"></i>`,
          border: "rgb(255, 71, 87)",
          position: "top-right",
          title: "Error !!!",
          text: `Please complete the form and try again`,
        })
      }
    },

    openApprovalTransactionDialog({ commit }, transaction) {
      commit("openApprovalTransactionDialog", transaction)
    },

    openConfirmTransactionDialog({ commit }, transaction) {
      commit("openConfirmTransactionDialog", transaction)
    },

    confirmApprove({ commit, dispatch }, transaction) {
      this.state.transaction.approveTransactionLoading = true
      let code = transaction.code
      let token = Vue.prototype.$cookies.get("PaddiData").access_token
      fetch(`${location.origin}/user/approve-transaction/${code}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((response) => {
          return dispatch("getTransactions").then(() => {
            commit("confirmApprove", response)
            this.state.transaction.approveTransactionLoading = false
            this.state.transaction.approveTransactionDialog = false
          })
        })
        .catch((error) => {
          console.log("Error: ", error)
          this.state.transaction.approveTransactionLoading = false
        })
    },

    confirmConfirm({ commit, dispatch }, transaction) {
      this.state.transaction.confirmTransactionLoading = true
      let code = transaction.code
      let token = Vue.prototype.$cookies.get("PaddiData").access_token
      fetch(`${location.origin}/user/confirm-transaction/${code}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((response) => {
          return dispatch("getTransactions").then(() => {
            commit("confirmConfirm", response)
            this.state.transaction.confirmTransactionLoading = false
            this.state.transaction.confirmTransactionDialog = false
          })
        })
        .catch((error) => {
          console.log("Error: ", error)
          this.state.transaction.confirmTransactionLoading = false
        })
    },
  },
}
