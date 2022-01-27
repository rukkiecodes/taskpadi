import Vue from "vue"

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
      { title: "Resolved" },
      { title: "Unresolved" },
    ],

    tickets: [],

    file: "",
    fileName: "",
  },

  getters: {
    ticketFilters: (state) => state.ticketFilters,
    tickets: (state) => state.tickets,
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
  },

  actions: {
    createTicket({ commit }) {
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
        // myHeaders.append("Accept", "application/json")
        myHeaders.append("Authorization", "Bearer " + token)

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

        fetch(location.origin + "/user/ticket", requestOptions)
          .then((response) => response.json())
          .then((response) => {
            commit("createTicket", response)
            this.state.customerSupport.createLoading = false
          })
          .catch((error) => {
            console.log("Error: ", error)
            this.state.customerSupport.createLoading = false
            Vue.prototype.$vs.notification({
              icon: `<i class="las la-exclamation-triangle"></i>`,
              border: "rgb(255, 71, 87)",
              position: "top-right",
              title: "Error !!!",
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
        this.state.customerSupport.fileName = file.name
        console.log(this.state.customerSupport.createTicketCredential.file)
      }
    },
  },
}
