import axios from "axios"
import router from "../../router"
import snackbar from "./snackbar";
export default {
  state: {
    credentials: {
      fullName: "",
      email: "",
      phone: "",
      password: "",
    },
    loading: false,
  },

  mutations: {
    signupAsBuyer: (state, response) => {
      if (response.status == 201) {
        router.push("/dashboard/menu")
      } else {
        router.push("/signup_buyer")
      }
    },
  },

  actions: {
    async signupAsBuyer({ commit }) {
      this.state.signup_buyer.loading = true
      if (
        this.state.signup_buyer.credentials.fullName != "" &&
        this.state.signup_buyer.credentials.email != "" &&
        this.state.signup_buyer.credentials.phone != "" &&
        this.state.signup_buyer.credentials.password != ""
      ) {
        try {
          const response = await axios.post(
            "http://localhost:3000/auth/signupBuyer",
            this.state.signup_buyer.credentials
          )
          commit("signupAsBuyer", response)
          this.state.signup_buyer.loading = false
        } catch (error) {
          console.log(error)
          this.state.signup_buyer.loading = false
          this.state.snackbar.snack = true
          this.state.snackbar.text = "ERROR!!! This email is taken try another !"
          this.state.snackbar.color = "error"
          this.state.snackbar.buttonColor = "error"
        }
      } else {
        this.state.signup_buyer.loading = false
        this.state.snackbar.snack = true
        this.state.snackbar.text = "Please complete the form and try again"
        this.state.snackbar.color = "error"
        this.state.snackbar.buttonColor = "error"
      }
    },
  },
}
