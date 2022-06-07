import Vue from "vue"
import axios from "axios"
import router from "../../router"

export default {
    state: {
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

        editProductCredential: {
            name: "",
            description: "",
            quantity: "",
            price: "",
            image: "",
        },

        products: [],

        viewDetailsDialoge: false,

        editProductDialog: false,

        editProductLoading: false,

        selectedProductToEdit: {},

        singleProduct: [],
    },

    getters: {
        products: (state) => state.products,
        singleProduct: (state) => state.singleProduct,
    },

    mutations: {
        createProduct: (state, response) => {
            console.log(response)
            if (response.success == true) {
                state.createProductDialog = false
                Vue.prototype.$vs.notification({
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
            state.products.push(...response.data.product)
            console.log(response.data)
        },

        viewProductDetails: (state, product) => {
            router.push(`/dashboard/product/${product._id}`)
        },

        viewSingleProduct: (state, response) => {
            state.singleProduct = []
            state.singleProduct.push(...response.data.product)
        },

        openEditProductDialog: (state, product) => {
            console.log("update: ", product)

            state.selectedProductToEdit = product

            state.editProductCredential = {
                name: product.name,
                description: product.description,
                quantity: product.quantity,
                price: product.price,
                image: "",
            }
            state.editProductDialog = true
        },

        editProduct: (state, response) => {
            console.log(response)
            if (response.success == true) {
                state.editProductDialog = false
                state.editProductLoading = false
                Vue.prototype.$vs.notification({
                    icon: `<i class="lar la-check-circle"></i>`,
                    border: "#46C93A",
                    position: "top-right",
                    title: "Yippee!!!",
                    text: response.message,
                })
            }
            if (response.success == false) {
                state.editProductDialog = false
                state.editProductLoading = false
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
        setProductImage ({ commit }, image) {
            this.state.product.imageName = image.name
            this.state.product.createProductCredential.image = image
            console.log("state: ", this.state.product.createProductCredential.image)
        },

        async createProduct ({ commit, dispatch }) {
            let user = Vue.prototype.$cookies.get("PaddiData").user._id
            let token = Vue.prototype.$cookies.get("PaddiData").token
            this.state.product.createProductLoading = true

            let formData = new FormData()

            let myHeaders = new Headers()
            myHeaders.append("Accept", "multipart/form-data")
            myHeaders.append('Authorization', `Bearer ${token}`)

            formData.append("user", user)
            formData.append("name", this.state.product.createProductCredential.name)
            formData.append("description", this.state.product.createProductCredential.description)
            formData.append("quantity", this.state.product.createProductCredential.quantity)
            formData.append("price", this.state.product.createProductCredential.price)
            formData.append("image", this.state.product.createProductCredential.image)

            let requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: formData,
            }

            fetch(
                "https://trustpaddi.herokuapp.com/product/createProduct",
                requestOptions
            )
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
                        title: "Error!!!",
                        text: error,
                    })
                })
        },

        async getProducts ({ commit }) {
            let user = Vue.prototype.$cookies.get("PaddiData").user._id
            let token = Vue.prototype.$cookies.get("PaddiData").token

            await axios({
                method: 'get',
                url: `https://trustpaddi.herokuapp.com/product/getProducts/${user}`,
                headers: { 'Authorization': `Bearer ${token}` },
                body: { user }
            }).then(response => {
                commit("getProducts", response)
            }).catch(error => {
                console.log("Error: ", error)
            })
        },

        viewProductDetails ({ commit, dispatch }, product) {
            commit("viewProductDetails", product)
        },

        viewSingleProduct ({ commit }) {
            let user = Vue.prototype.$cookies.get("PaddiData").user._id
            let _id = router.currentRoute.params._id

            axios
                .post("https://trustpaddi.herokuapp.com/product/getSingleProduct", {
                    user,
                    _id,
                })
                .then((response) => {
                    commit("viewSingleProduct", response)
                })
                .catch((error) => {
                    console.log(error)
                })
        },

        openEditProductDialog ({ commit }, product) {
            commit("openEditProductDialog", product)
        },

        setEditProductImage ({ commit }, image) {
            this.state.product.imageName = image.name
            this.state.product.editProductCredential.image = image
            console.log("state: ", image)
        },

        async editProduct ({ commit, dispatch }) {
            let input = this.state.product.editProductCredential
            let user = Vue.prototype.$cookies.get("PaddiData").user._id
            let _id = router.currentRoute.params._id

            if (
                input.name != "" &&
                input.description != "" &&
                input.quantity &&
                input.price != ""
            ) {
                this.state.product.editProductLoading = true

                let formData = new FormData()

                let myHeaders = new Headers()
                myHeaders.append("Accept", "multipart/form-data")

                formData.append("user", user)
                formData.append("_id", _id)
                formData.append("name", input.name)
                formData.append("description", input.description)
                formData.append("quantity", input.quantity)
                formData.append("price", input.price)
                if (input.image) formData.append("image", input.image)

                let requestOptions = {
                    method: "POST",
                    headers: myHeaders,
                    body: formData,
                }

                fetch(
                    "https://trustpaddi.herokuapp.com/product/updateProduct",
                    requestOptions
                )
                    .then((response) => response.json())
                    .then((response) => {
                        return dispatch("viewSingleProduct").then(() => {
                            this.state.product.editProductLoading = false
                            commit("editProduct", response)
                        })
                    })
                    .catch((error) => {
                        console.log("Error: ", error)
                        this.state.product.editProductLoading = false
                        Vue.prototype.$vs.notification({
                            icon: `<i class="las la-exclamation-triangle"></i>`,
                            border: "rgb(255, 71, 87)",
                            position: "top-right",
                            title: "Error!!!",
                            text: error,
                        })
                    })
            } else {
                this.state.transaction.editProductLoading = false
                Vue.prototype.$vs.notification({
                    icon: `<i class="las la-exclamation-triangle"></i>`,
                    border: "rgb(255, 71, 87)",
                    position: "top-right",
                    title: "Error!!!",
                    text: `Please complete the form and try again`,
                })
            }
        },
    },
}