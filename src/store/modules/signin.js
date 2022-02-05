// @ts-nocheck
import router from "../../router"
import Vue from "vue"

export default {
  state: {
    credential: {
      email: "",
      password: "",
    },

    loading: false,
  },

  mutations: {
    signinUser: (state, response) => {
      state.loading = false
      console.log("login user: ", response)
      Vue.prototype.$cookies.set("PaddiData", response)
      if (response.success == true) {
        state.loading = false
        router.push("/dashboard/dashboard")
      } else {
        state.loading = false
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-exclamation-triangle"></i>`,
          border: "rgb(255, 71, 87)",
          position: "top-right",
          title: "Error !!!",
          text: response.message,
        })
        router.push("/signin")
      }
    },
  },

  actions: {
    async signinUser({ commit }) {
      let emailRegEx = /\S+@\S+\.\S+/
      let input = this.state.signin.credential

      if (emailRegEx.test(input.email) && input.password != "") {
        this.state.signin.loading = true
        let myHeaders = new Headers()
        myHeaders.append("Accept", "application/json")

        let formdata = new FormData()
        formdata.append("email", input.email)
        formdata.append("password", input.password)

        const options = {
          method: "POST",
          headers: myHeaders,
          body: formdata,
        }

        fetch("https://dev.trustpaddi.com/api/v1/login", options)
          .then((response) => response.json())
          .then((response) => {
            commit("signinUser", response)
            this.state.signin.loading = false
          })
          .catch((error) => {
            this.state.signin.loading = false
            Vue.prototype.$vs.notification({
              icon: `<i class="las la-exclamation-triangle"></i>`,
              border: "rgb(255, 71, 87)",
              position: "top-right",
              title: "Error !!!",
              text: error,
            })
          })
      } else {
        this.state.signin.loading = false
        Vue.prototype.$vs.notification({
          icon: `<i class="las la-exclamation-triangle"></i>`,
          border: "rgb(255, 71, 87)",
          position: "top-right",
          title: "Error !!!",
          text: `Please complete the form and try again`,
        })
      }
    },
  },
}
