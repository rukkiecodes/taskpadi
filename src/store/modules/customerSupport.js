import Vue from "vue"
import axios from "axios"
import route from "../../router"

export default {
    state: {
        customerDialog: false,
        createLoading: false,

        search: "",

        createTicketCredential: {
            subject: "",
            description: "",
            department: "",
            file: "",
        },

        ticketFilters: [
            { title: "All" },
            { title: "pending" },
            { title: "successful" },
        ],

        tickets: [],

        confirmDeleteDialog: false,
        deleteLoading: false,

        singleTicket: [],

        closeTicketDialog: false,
        closeTicketLoading: false,
    },

    getters: {
        ticketFilters: (state) => state.ticketFilters,
        tickets: (state) => state.tickets,
        singleTicket: (state) => state.singleTicket,
    },

    mutations: {
        createTicket: (state, response) => {
            console.log(response)
            if (response.success == false) {
                Vue.prototype.$vs.notification({
                    icon: `<i class="las la-exclamation-triangle"></i>`,
                    border: "rgb(255, 71, 87)",
                    position: "top-right",
                    title: "Oops!!!",
                    text: response.message,
                })
            }
            if (response.success == true) {
                state.customerDialog = false
                Vue.prototype.$vs.notification({
                    icon: `<i class="las la-user"></i>`,
                    border: "#46C93A",
                    position: "top-right",
                    title: "Yippee!!!",
                    text: response.message,
                })
            }
        },

        getTickets: (state, response) => {
            state.tickets = []
            state.tickets.push(...response.data.tickets)
        },

        viewTicket: (state, ticket) => {
            console.log("ticket: ", ticket)
            route.push(`/dashboard/support/${ticket._id}`)
        },

        viewSingleTicket: (state, response) => {
            state.singleTicket = []
            if (response.data.success)
                state.singleTicket.push(...response.data.tickets)
            console.log("viewSingleTicket: ", state.singleTicket)
        },

        closeTicket: (state, response) => {
            state.closeTicketDialog = false
            state.closeTicketLoading = false
            console.log("closeTicket: ", response)
        },

        confirmDeleteTicket: (state, response) => {
            state.deleteLoading = false
            state.confirmDeleteDialog = false
            if (response.data.success == true) location.replace(`${location.origin}/dashboard/support`)
        },
    },

    actions: {
        createTicket({ commit, dispatch }) {
            let user = Vue.prototype.$cookies.get("PaddiData").user._id
            let token = Vue.prototype.$cookies.get("PaddiData").token
            if (
                this.state.customerSupport.createTicketCredential.subject != "" &&
                this.state.customerSupport.createTicketCredential.description != "" &&
                this.state.customerSupport.createTicketCredential.department != ""
            ) {
                this.state.customerSupport.createLoading = true
                let token = Vue.prototype.$cookies.get("PaddiData").access_token

                let formData = new FormData()

                let myHeaders = new Headers()
                myHeaders.append("Accept", "multipart/form-data")

                formData.append("user", user)
                formData.append("token", token)
                formData.append(
                    "subject",
                    this.state.customerSupport.createTicketCredential.subject
                )
                formData.append(
                    "description",
                    this.state.customerSupport.createTicketCredential.description
                )
                formData.append(
                    "department",
                    this.state.customerSupport.createTicketCredential.department
                )
                formData.append(
                    "file",
                    this.state.customerSupport.createTicketCredential.file
                )

                let requestOptions = {
                    method: "POST",
                    headers: myHeaders,
                    body: formData,
                }

                fetch(
                        "https://trustpaddi.herokuapp.com/ticket/createTicket",
                        requestOptions
                    )
                    .then((response) => response.json())
                    .then((response) => {
                        return dispatch("getTickets").then(() => {
                            commit("createTicket", response)
                            this.state.customerSupport.createLoading = false
                        })
                    })
                    .catch((error) => {
                        console.log("Error: ", error)
                        this.state.customerSupport.createLoading = false
                        Vue.prototype.$vs.notification({
                            icon: `<i class="las la-exclamation-triangle"></i>`,
                            border: "rgb(255, 71, 87)",
                            position: "top-right",
                            title: "Error!!!",
                            text: `Update error. Check your details the try again.`,
                        })
                    })
            } else {
                this.state.customerSupport.createLoading = false
                Vue.prototype.$vs.notification({
                    icon: `<i class="las la-exclamation-triangle"></i>`,
                    border: "rgb(255, 71, 87)",
                    position: "top-right",
                    title: "Oops!!!",
                    text: `Please complete the form and try again`,
                })
            }
        },

        setImage({ commit }, file) {
            if (file) {
                this.state.customerSupport.createTicketCredential.file = file
            }
        },

        getTickets({ commit }) {
            let user = Vue.prototype.$cookies.get("PaddiData").user._id
            let token = Vue.prototype.$cookies.get("PaddiData").token
            axios
                .post("https://trustpaddi.herokuapp.com/ticket/getTicket", {
                    user,
                    token
                })
                .then((response) => {
                    commit("getTickets", response)
                })
                .catch((error) => {
                    console.log(error)
                })
        },

        viewTicket({ commit }, ticket) {
            commit("viewTicket", ticket)
        },

        viewSingleTicket({ commit }) {
            let user = Vue.prototype.$cookies.get("PaddiData").user._id
            let token = Vue.prototype.$cookies.get("PaddiData").token
            let _id = route.currentRoute.params._id

            axios
                .post("https://trustpaddi.herokuapp.com/ticket/getSingleTicket", {
                    user,
                    _id,
                    token
                })
                .then((response) => {
                    commit("viewSingleTicket", response)
                })
                .catch((error) => {
                    console.log(error)
                })
        },

        closeTicket({ commit, dispatch }) {
            let user = Vue.prototype.$cookies.get("PaddiData").user._id
            let token = Vue.prototype.$cookies.get("PaddiData").token
            let _id = route.currentRoute.params._id

            this.state.customerSupport.closeTicketLoading = true

            axios
                .post("https://trustpaddi.herokuapp.com/ticket/closeTicket", {
                    user,
                    _id,
                    token
                })
                .then((response) => {
                    return dispatch("viewSingleTicket").then(() => {
                        commit("closeTicket", response)
                    })
                })
                .catch((error) => {
                    console.log(error)
                })
        },

        confirmDeleteTicket({ commit, dispatch }, ticket) {
            let user = Vue.prototype.$cookies.get("PaddiData").user._id
            let token = Vue.prototype.$cookies.get("PaddiData").token
            let _id = route.currentRoute.params._id

            this.state.customerSupport.deleteLoading = true

            axios
                .post("https://trustpaddi.herokuapp.com/ticket/deleteTicket", {
                    user,
                    _id,
                    token
                })
                .then((response) => {
                    return dispatch("getTickets").then(() => {
                        commit("confirmDeleteTicket", response)
                    })
                })
                .catch((error) => {
                    console.log(error)
                })
        },
    },
}