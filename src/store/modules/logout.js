import vueCookies from "vue-cookies"
import router from "../../router"

export default {
  state: {
    logoutDialog: false,
  },
  actions: {
    logoutUser() {
      vueCookies.remove("trustpaddi user")
      vueCookies.remove("trustpaddi token")
      this.state.logout.logoutDialog = false
      router.push("/")
    },
  },
}
