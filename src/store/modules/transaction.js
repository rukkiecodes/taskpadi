import Vue from "vue"
import axios from "axios"
import router from "../../router"

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
            product_name: "",
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

        singleTransactions: [],

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

        declineTransactionDialog: false,
        declineTransactionLoading: false,
        selectedTransactionToDecline: [],

        popTransactionDialog: false,
        popTransactionLoading: false,
        selectedTransactionToPop: [],

        deleteTransactionDialog: false,
        deleteTransactionLoading: false,
        selectedTransactionToDelete: [],

        pop: "",
        popName: "",

        delete: "",
        deleteName: "",
    },
    getters: {
        transactionFilters: (state) => state.transactionFilters,
        transactions: (state) => state.transactions,
        selectedTransactionToApprove: (state) => state.selectedTransactionToApprove,
        selectedTransactionToConfirm: (state) => state.selectedTransactionToConfirm,
        selectedTransactionToDecline: (state) => state.selectedTransactionToDecline,
        selectedTransactionToPop: (state) => state.selectedTransactionToPop,
        selectedTransactionToDelete: (state) => state.selectedTransactionToDelete,
        singleTransactions: (state) => state.singleTransactions,
    },

    mutations: {
        createTransaction: (state, response) => {
            state.createTransactionLoading = false
            state.createTransactionDialog = false
            if (response.success == true) {
                state.createTransactionDialog = false
                Vue.prototype.$vs.notification({
                    icon: `<i class="lar la-check-circle"></i>`,
                    border: "#46C93A",
                    position: "top-right",
                    title: "Yippee!!!",
                    text: response.message,
                })
            }
            if (response.success == false) {
                state.createTransactionLoading = false
                state.createTransactionDialog = false
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
            if (response.data.success == true) {
                state.transactions = []
                state.transactions.push(...response.data.transaction)
            }
        },

        viewTransactionDetails: (state, transaction) => router.push(`/dashboard/transactions/${transaction._id}`),

        viewSingleTransaction: (state, response) => {
            state.singleTransactions = []
            state.singleTransactions.push(...response.data.transaction)
        },

        setTransactionDetails: state =>
            state.selectedTransaction = Vue.prototype.$cookies.get(
                "view transaction details"
            ),

        openUpdateTransactionDialog: (state, transaction) => {
            state.selectedTransactionToUpdate = transaction

            state.updateTransactionCredential = {
                recipient_name: transaction.recipientName,
                recipient_email: transaction.recipientEmail,
                recipient_phone: transaction.recipientPhone,
                transaction_type: transaction.transactionType,
                price: transaction.price,
                quantity: transaction.quantity,
                role: transaction.role,
                description: transaction.description,
                image: "",
                duration: transaction.duration,
            }
            state.updateTransactionDialog = true
        },

        updateTransaction: (state, response) => {
            if (response.success == true) {
                state.updateTransactionDialog = false
                state.updateTransactionLoading = false
                Vue.prototype.$vs.notification({
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
            state.selectedTransactionToApprove = []
            state.selectedTransactionToApprove.push(transaction)
            state.approveTransactionDialog = true
        },

        confirmApprove: (state, response) => {
            if (response.data.success == true)
                Vue.prototype.$vs.notification({
                    icon: `<i class="lar la-check-circle"></i>`,
                    border: "#46C93A",
                    position: "top-right",
                    title: "Yippee!!!",
                    text: response.data.message,
                })

            if (response.data.success == false)
                Vue.prototype.$vs.notification({
                    icon: `<i class="las la-exclamation-triangle"></i>`,
                    border: "rgb(255, 71, 87)",
                    position: "top-right",
                    title: "Oops!!!",
                    text: response.data.message,
                })
        },

        openConfirmTransactionDialog: (state, transaction) => {
            state.selectedTransactionToConfirm = []
            state.selectedTransactionToConfirm.push(transaction)
            state.confirmTransactionDialog = true
        },

        confirmConfirm: (state, response) => {
            if (response.data.success == true)
                Vue.prototype.$vs.notification({
                    icon: `<i class="lar la-check-circle"></i>`,
                    border: "#46C93A",
                    position: "top-right",
                    title: "Yippee!!!",
                    text: response.data.message,
                })

            if (response.data.success == false)
                Vue.prototype.$vs.notification({
                    icon: `<i class="las la-exclamation-triangle"></i>`,
                    border: "rgb(255, 71, 87)",
                    position: "top-right",
                    title: "Oops!!!",
                    text: response.data.message,
                })
        },

        openDeclineTransactionDialog: (state, transaction) => {
            state.selectedTransactionToDecline = []
            state.selectedTransactionToDecline.push(transaction)
            state.declineTransactionDialog = true
        },

        confirmDecline: (state, response) => {
            if (response.data.success == true) {
                Vue.prototype.$vs.notification({
                    icon: `<i class="lar la-check-circle"></i>`,
                    border: "#46C93A",
                    position: "top-right",
                    title: "Yippee!!!",
                    text: response.data.message,
                })
            }
            if (response.data.success == false) {
                Vue.prototype.$vs.notification({
                    icon: `<i class="las la-exclamation-triangle"></i>`,
                    border: "rgb(255, 71, 87)",
                    position: "top-right",
                    title: "Oops!!!",
                    text: response.data.message,
                })
            }
        },

        openPopTransactionDialog: (state, transaction) => {
            state.selectedTransactionToPop = []
            state.selectedTransactionToPop.push(transaction)
            state.pop = transaction.pop
            state.popTransactionDialog = true
        },

        confirmPop: (state, response) => {
            if (response.success == true) {
                state.popTransactionDialog = false
                Vue.prototype.$vs.notification({
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
            if (response.message == "The given data was invalid.") {
                Vue.prototype.$vs.notification({
                    icon: `<i class="las la-exclamation-triangle"></i>`,
                    border: "rgb(255, 71, 87)",
                    position: "top-right",
                    title: "Oops!!!",
                    text: response.errors.pop[0],
                })
            }
        },

        openDeleteTransactionDialog: (state, transaction) => {
            state.selectedTransactionToDelete = []
            state.selectedTransactionToDelete.push(transaction)
            state.pop = transaction.pop
            state.deleteTransactionDialog = true
        },

        confirmDelete: (state, response) => {
            state.popTransactionDialog = false
            if (response.data.success == true) {
                router.go(-1)
                Vue.prototype.$vs.notification({
                    icon: `<i class="lar la-check-circle"></i>`,
                    border: "#46C93A",
                    position: "top-right",
                    title: "Yippee!!!",
                    text: response.data.message,
                })
            }
            if (response.data.success == false) {
                Vue.prototype.$vs.notification({
                    icon: `<i class="las la-exclamation-triangle"></i>`,
                    border: "rgb(255, 71, 87)",
                    position: "top-right",
                    title: "Oops!!!",
                    text: response.data.message,
                })
            }
        },
    },

    actions: {
        setTransactionImage ({ commit }, image) {
            this.state.transaction.createTransactionCredential.image = image
        },

        createTransaction ({ commit, dispatch }) {
            let user = Vue.prototype.$cookies.get("PaddiData").user._id
            let token = Vue.prototype.$cookies.get("PaddiData").token
            this.state.transaction.createTransactionLoading = true

            let input = this.state.transaction.createTransactionCredential

            let myHeaders = new Headers()
            myHeaders.append("Accept", "multipart/form-data")
            myHeaders.append('Authorization', `Bearer ${token}`)

            let formData = new FormData()
            formData.append("user", user)
            formData.append("sellerId", user)
            formData.append("recipientName", input.recipient_name)
            formData.append("recipientEmail", input.recipient_email)
            formData.append("recipientPhone", input.recipient_phone)
            formData.append("productName", input.product_name)
            formData.append("transactionType", input.transaction_type)
            formData.append("price", input.price)
            formData.append("quantity", input.quantity)
            formData.append("role", input.role)
            formData.append("description", input.description)
            formData.append("duration", input.duration)
            formData.append("image", input.image)

            let requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: formData,
            }

            fetch(
                "https://trustpaddi.herokuapp.com/transaction/createTransaction",
                requestOptions
            )
                .then(response => response.json())
                .then(response => {
                    this.state.transaction.createTransactionLoading = false
                    return dispatch("getTransactions").then(() => {
                        commit("createTransaction", response)
                    })
                })
                .catch(error => {
                    this.state.transaction.createTransactionLoading = false
                    Vue.prototype.$vs.notification({
                        icon: `<i class="las la-exclamation-triangle"></i>`,
                        border: "rgb(255, 71, 87)",
                        position: "top-right",
                        title: "Error!!!",
                        text: error,
                    })
                })
        },

        async getTransactions ({ commit }) {
            let user = Vue.prototype.$cookies.get("PaddiData").user
            let token = Vue.prototype.$cookies.get("PaddiData").token

            await axios({
                method: 'get',
                url: `https://trustpaddi.herokuapp.com/transaction/getTransaction/${user._id}`,
                headers: { 'Authorization': `Bearer ${token}` },
                body: { user: user._id }
            }).then(response => commit("getTransactions", response))
        },

        viewTransactionDetails ({ commit }, transaction) {
            commit("viewTransactionDetails", transaction)
        },

        viewSingleTransaction ({ commit }) {
            let user = Vue.prototype.$cookies.get("PaddiData").user._id
            let token = Vue.prototype.$cookies.get("PaddiData").token
            let _id = router.currentRoute.params._id

            axios({
                method: 'post',
                url: "https://trustpaddi.herokuapp.com/transaction/getSingleTransaction",
                headers: { 'Authorization': `Bearer ${token}` },
                data: { user, _id }
            }).then(response => commit("viewSingleTransaction", response))
        },

        setTransactionDetails ({ commit }) {
            commit("setTransactionDetails")
        },

        openUpdateTransactionDialog ({ commit }, transaction) {
            commit("openUpdateTransactionDialog", transaction)
        },

        setUpdateTransactionImage ({ commit }, image) {
            this.state.transaction.imageName = image.name
            this.state.transaction.updateTransactionCredential.image = image
        },

        updateTransaction ({ commit, dispatch }) {
            let input = this.state.transaction.updateTransactionCredential
            let user = Vue.prototype.$cookies.get("PaddiData").user._id
            let token = Vue.prototype.$cookies.get("PaddiData").token
            let _id = router.currentRoute.params._id

            if (
                input.recipient_name != "" &&
                input.recipient_email != "" &&
                input.recipient_phone &&
                input.transaction_type != "" &&
                input.price != "" &&
                input.quantity != "" &&
                input.role != "" &&
                input.description != "" &&
                input.duration != ""
            ) {
                this.state.transaction.updateTransactionLoading = true

                let formData = new FormData()

                let myHeaders = new Headers()
                myHeaders.append("Accept", "multipart/form-data")
                myHeaders.append('Authorization', `Bearer ${token}`)

                formData.append("user", user)
                formData.append("_id", _id)
                formData.append("recipientName", input.recipient_name)
                formData.append("recipientEmail", input.recipient_email)
                formData.append("recipientPhone", input.recipient_phone)
                formData.append("transactionType", input.transaction_type)
                formData.append("price", input.price)
                formData.append("quantity", input.quantity)
                formData.append("role", input.role)
                formData.append("description", input.description)
                formData.append("duration", input.duration)
                if (input.image) formData.append("image", input.image)

                let requestOptions = {
                    method: "POST",
                    headers: myHeaders,
                    body: formData,
                }

                fetch(
                    "https://trustpaddi.herokuapp.com/transaction/updateTransaction",
                    requestOptions
                )
                    .then(response => response.json())
                    .then(response =>
                        dispatch("getTransactions").then(() => {
                            this.state.transaction.updateTransactionLoading = false
                            dispatch("viewSingleTransaction")
                            commit("updateTransaction", response)
                        })
                    ).catch((error) => {
                        this.state.transaction.updateTransactionLoading = false
                        Vue.prototype.$vs.notification({
                            icon: `<i class="las la-exclamation-triangle"></i>`,
                            border: "rgb(255, 71, 87)",
                            position: "top-right",
                            title: "Error!!!",
                            text: error,
                        })
                    })
            } else {
                this.state.transaction.updateTransactionLoading = false
                Vue.prototype.$vs.notification({
                    icon: `<i class="las la-exclamation-triangle"></i>`,
                    border: "rgb(255, 71, 87)",
                    position: "top-right",
                    title: "Error!!!",
                    text: `Please complete the form and try again`,
                })
            }
        },

        openApprovalTransactionDialog ({ commit }, transaction) {
            commit("openApprovalTransactionDialog", transaction)
        },

        openConfirmTransactionDialog ({ commit }, transaction) {
            commit("openConfirmTransactionDialog", transaction)
        },

        confirmApprove ({ commit, dispatch }) {
            this.state.transaction.approveTransactionLoading = true
            let user = Vue.prototype.$cookies.get("PaddiData").user._id
            let token = Vue.prototype.$cookies.get("PaddiData").token
            let _id = router.currentRoute.params._id

            axios({
                method: "post",
                url: "https://trustpaddi.herokuapp.com/transaction/approveTransaction",
                headers: { 'Authorization': `Bearer ${token}` },
                data: { user, _id }
            }).then(response =>
                dispatch("getTransactions").then(() => {
                    dispatch("viewSingleTransaction")
                    commit("confirmApprove", response)
                    this.state.transaction.approveTransactionLoading = false
                    this.state.transaction.approveTransactionDialog = false
                })
            ).catch(() => this.state.transaction.approveTransactionLoading = false)
        },

        confirmConfirm ({ commit, dispatch }) {
            this.state.transaction.confirmTransactionLoading = true
            let user = Vue.prototype.$cookies.get("PaddiData").user._id
            let token = Vue.prototype.$cookies.get("PaddiData").token
            let _id = router.currentRoute.params._id

            axios({
                method: "post",
                url: "https://trustpaddi.herokuapp.com/transaction/confirmTransaction",
                headers: { 'Authorization': `Bearer ${token}` },
                data: { user, _id }
            }).then(response =>
                dispatch("getTransactions").then(() => {
                    dispatch("viewSingleTransaction")
                    commit("confirmConfirm", response)
                    this.state.transaction.confirmTransactionLoading = false
                    this.state.transaction.confirmTransactionDialog = false
                })
            ).catch(() => this.state.transaction.confirmTransactionLoading = false)
        },

        openDeclineTransactionDialog ({ commit }, transaction) {
            commit("openDeclineTransactionDialog", transaction)
        },

        confirmDecline ({ commit, dispatch }, transaction) {
            this.state.transaction.declineTransactionLoading = true
            let user = Vue.prototype.$cookies.get("PaddiData").user._id
            let token = Vue.prototype.$cookies.get("PaddiData").token
            let _id = router.currentRoute.params._id

            axios({
                method: "post",
                url: "https://trustpaddi.herokuapp.com/transaction/declineTransaction",
                headers: { 'Authorization': `Bearer ${token}` },
                data: { user, _id }
            }).then(response =>
                dispatch("getTransactions").then(() => {
                    dispatch("viewSingleTransaction")
                    commit("confirmDecline", response)
                    this.state.transaction.declineTransactionLoading = false
                    this.state.transaction.declineTransactionDialog = false
                })
            ).catch(() => this.state.transaction.declineTransactionLoading = false)
        },

        openPopTransactionDialog ({ commit }, transaction) {
            commit("openPopTransactionDialog", transaction)
        },

        onPOPChange ({ commit }, image) {
            this.state.transaction.pop = image
            this.state.transaction.popName = image.name
        },

        confirmPop ({ commit, dispatch }, transaction) {
            const pop = this.state.transaction.pop
            let user = Vue.prototype.$cookies.get("PaddiData").user._id
            let token = Vue.prototype.$cookies.get("PaddiData").token
            let _id = router.currentRoute.params._id

            if (pop != "") {
                this.state.transaction.popTransactionLoading = true

                let formData = new FormData()

                let myHeaders = new Headers()
                myHeaders.append("Accept", "multipart/form-data")
                myHeaders.append('Authorization', `Bearer ${token}`)

                formData.append("user", user)
                formData.append("_id", _id)
                formData.append("pop", pop)

                let requestOptions = {
                    method: "POST",
                    headers: myHeaders,
                    body: formData,
                }

                fetch(
                    "https://trustpaddi.herokuapp.com/transaction/transactionProofOfPayment",
                    requestOptions
                ).then((response) => response.json())
                    .then((response) =>
                        dispatch("getTransactions").then(() => {
                            dispatch("viewSingleTransaction")
                            commit("confirmPop", response)
                            this.state.transaction.popTransactionDialog = false
                            this.state.transaction.popTransactionLoading = false
                        })
                    ).catch(() => this.state.transaction.popTransactionLoading = false)
            } else {
                Vue.prototype.$vs.notification({
                    icon: `<i class="las la-exclamation-triangle"></i>`,
                    border: "rgb(255, 71, 87)",
                    position: "top-right",
                    title: "Error!!!",
                    text: `Please complete the form and try again`,
                })
            }
        },

        openDeleteTransactionDialog ({ commit }, transaction) {
            commit("openDeleteTransactionDialog", transaction)
        },

        onDeleteChange ({ commit }, image) {
            this.state.transaction.delete = image
            this.state.transaction.deleteName = image.name
        },

        confirmDelete ({ commit, dispatch }) {
            let user = Vue.prototype.$cookies.get("PaddiData").user._id
            let token = Vue.prototype.$cookies.get("PaddiData").token
            let _id = router.currentRoute.params._id

            axios({
                method: "post",
                url: "https://trustpaddi.herokuapp.com/transaction/deleteTransaction",
                headers: { 'Authorization': `Bearer ${token}` },
                data: { user, _id }
            }).then((response) =>
                dispatch("getTransactions").then(() => {
                    commit("confirmDelete", response)
                    this.state.transaction.deleteTransactionDialog = false
                    this.state.transaction.deleteTransactionLoading = false
                })
            ).catch(() => this.state.transaction.deleteTransactionLoading = false)
        },
    },
}