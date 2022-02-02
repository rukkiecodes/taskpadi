import vueCookies from "vue-cookies"
import router from "../../router"
import Vue from "vue"

export default {
  state: {
    logoutDialog: false,
    logoutLoading: false,
  },
  actions: {
    logoutUser() {
      this.state.logout.logoutLoading = true
      let token = Vue.prototype.$cookies.get("PaddiData").access_token
      fetch(`${location.origin}/user/logout`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((response) => {
          vueCookies.remove("PaddiData")
          this.state.logout.logoutDialog = false
          this.state.logout.logoutLoading = false
          router.push("/")
        })
        .catch((error) => {
          console.log(error)
          this.state.logout.logoutLoading = false
        })
    },
  },
}
