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
      Vue.prototype.$cookies.remove('PaddiData')
      router.push("/")
      this.state.logout.logoutLoading = false
      this.state.logout.logoutDialog = false
    },
  },
}
