import axios from "axios"
import vueCookies from "vue-cookies"
import router from "../../router"

export default {
  state: {
    credentials: {
      email: "",
      password: "",
    },
    loading: false,
  },

  mutations: {
    signinUSer: (state, response) => {
      if (response.status == 200) {
        state.loading = false
        vueCookies.set("trustpaddi token", response.data.token)
        vueCookies.set("trustpaddi user", response.data.user)
        router.push("/dashboard/menu")
      } else {
        state.loading = false
        router.push("/signin")
      }
    },
  },

  actions: {
    async signinUSer({ commit }) {
      this.state.signin.loading = true
      if (
        this.state.signin.credentials.email != "" &&
        this.state.signin.credentials.password != ""
      ) {
        try {
          const response = await axios.post(
            "http://localhost:3000/auth/loggin",
            this.state.signin.credentials
          )
          commit("signinUSer", response)
          this.state.signin.loading = false
        } catch (error) {
          console.log(error)
          this.state.signin.loading = false
          this.state.snackbar.snack = true
          this.state.snackbar.text =
            "ERROR!!! Logging in"
          this.state.snackbar.color = "error"
          this.state.snackbar.buttonColor = "error"
        }
      } else {
        this.state.signin.loading = false
        this.state.snackbar.snack = true
        this.state.snackbar.text = "Please complete the form and try again"
        this.state.snackbar.color = "error"
        this.state.snackbar.buttonColor = "error"
      }
    },
  },
}
