import axios from "axios"
import router from "../../router"
export default {
  state: {
    credentials: {
      fullName: "",
      email: "",
      phone: "",
      password: "",
      signupAs: "",
    },
    loading: false,
  },

  mutations: {
    signupAsSeller: (state, response) => {
      if (response.status == 201) {
        state.loading = false
        router.push("/signin")
      } else {
        state.loading = false
        router.push("/signup_seller")
      }
    },
  },

  actions: {
    async signupAsSeller({ commit }) {
      this.state.signup_seller.loading = true
      if (
        this.state.signup_seller.credentials.fullName != "" &&
        this.state.signup_seller.credentials.email != "" &&
        this.state.signup_seller.credentials.phone != "" &&
        this.state.signup_seller.credentials.password != "" &&
        this.state.signup_seller.credentials.signupAs != ""
      ) {
        try {
          const response = await axios.post(
            "http://localhost:3000/auth/signupSeller",
            this.state.signup_seller.credentials
          )
          commit("signupAsSeller", response)
          this.state.signup_seller.loading = false
        } catch (error) {
          console.log(error)
          this.state.signup_seller.loading = false
          this.state.snackbar.snack = true
          this.state.snackbar.text =
            "ERROR!!! This email is taken try another !"
          this.state.snackbar.color = "error"
          this.state.snackbar.buttonColor = "error"
        }
      } else {
        this.state.signup_seller.loading = false
        this.state.snackbar.snack = true
        this.state.snackbar.text = "Please complete the form and try again"
        this.state.snackbar.color = "error"
        this.state.snackbar.buttonColor = "error"
      }
    },
  },
}
