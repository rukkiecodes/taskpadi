import vueCookies from "vue-cookies"
import router from "../../router"

export default {
  actions: {
    ifAuth() {
      // @ts-ignore
      const token = vueCookies.get("trustpaddi token")
      if (token) {
        router.push("/dashboard/menu")
      } else {
        router.push("/")
      }
    },
  },
}
