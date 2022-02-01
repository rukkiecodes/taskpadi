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

    createProductDialog: false,

    createProductLoading: false,

    createProductCredential: {
      name: "",
      description: "",
      quantity: "",
      price: "",
      image: "",
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

    products: [],

    viewDetailsDialoge: false,

    selectedTransaction: {},

    updateTransactionDialog: false,

    updateTransactionLoading: false,

    selectedTransactionToUpdate: {},

    approveTransactionDialog: false,

    approveTransactionLoading: false,

    confirmTransactionDialog: false,
    confirmTransactionLoading: false,

    declineTransactionDialog: false,
    declineTransactionLoading: false,

    popTransactionDialog: false,
    popTransactionLoading: false,

    deleteTransactionDialog: false,
    deleteTransactionLoading: false,

    pop: "",
    popName: "",

    delete: "",
    deleteName: "",
  },
  getters: {
    transactionFilters: (state) => state.transactionFilters,
    products: (state) => state.products,
  },

  mutations: {
    createProduct: (state, response) => {
      console.log(response)
      if (response.success == true) {
        state.createProductDialog = false
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
        state.createProductLoading = false
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-exclamation-triangle"></i>`,
          border: "rgb(255, 71, 87)",
          position: "top-right",
          title: "Oops!!!",
          text: response.message,
        })
      }
    },

    getProducts: (state, response) => {
      state.products = []
      let productData = response.data
      for (let i = 0; i < productData.length; i++) {
        state.products.push(productData[i])
      }
      console.log("getProducts: ", state.products)
    },

    viewProductDetails: (state, product) => {
      console.log("view transaction details: ", product)
      state.selectedTransaction = product
      state.viewDetailsDialoge = true
    },

    openUpdateProductDialog: (state, transaction) => {
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
  },

  actions: {
    setProductImage({ commit }, image) {
      this.state.product.imageName = image.name
      this.state.product.createProductCredential.image = image
      console.log("state: ", image)
    },

    async createProduct({ commit, dispatch }) {
      let token = Vue.prototype.$cookies.get("PaddiData").access_token

      this.state.product.createProductLoading = true

      let formData = new FormData()

      let myHeaders = new Headers()
      myHeaders.append("Accept", "multipart/form-data")
      myHeaders.append("Authorization", `Bearer ${token}`)

      formData.append("name", this.state.product.createProductCredential.name)
      formData.append(
        "description",
        this.state.product.createProductCredential.description
      )
      formData.append(
        "quantity",
        this.state.product.createProductCredential.quantity
      )
      formData.append("price", this.state.product.createProductCredential.price)
      formData.append("image", this.state.product.createProductCredential.image)

      let requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formData,
      }

      fetch(`${location.origin}/user/product`, requestOptions)
        .then((response) => response.json())
        .then((response) => {
          return dispatch("getProducts").then(() => {
            this.state.product.createProductLoading = false
            commit("createProduct", response)
          })
        })
        .catch((error) => {
          console.log("Error: ", error)
          this.state.product.createProductLoading = false
          Vue.prototype.$vs.notification({
            icon: `<i class="las la-exclamation-triangle"></i>`,
            border: "rgb(255, 71, 87)",
            position: "top-right",
            title: "Error !!!",
            text: error,
          })
        })
    },

    async getProducts({ commit }) {
      let token = Vue.prototype.$cookies.get("PaddiData").access_token
      fetch(`${location.origin}/user/products`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((response) => {
          commit("getProducts", response)
        })
        .catch((error) => {
          console.log("Error: ", error)
        })
    },

    viewProductDetails({ commit }, product) {
      commit("viewProductDetails", product)
    },

    openUpdateProductDialog({ commit }, transaction) {
      commit("openUpdateProductDialog", transaction)
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
            return dispatch("getProducts").then(() => {
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

    onDeleteChange({ commit }, image) {
      this.state.transaction.delete = image
      this.state.transaction.deleteName = image.name
    },
  },
}
