<template>
  <nav>
    <v-app-bar fixed flat :color="appBarColor">
      <v-avatar tile>
        <img src="../../../assets/paddi.png" alt="" />
      </v-avatar>
      <v-spacer />

      <v-btn
        text
        link
        :dark="dark"
        depressed
        v-for="(route, i) in appRoutes"
        :key="i"
        :to="route.to"
        v-text="route.title"
        class="ml-3 text-capitalize hidden-md-and-down rounded-pill"
        active-class="deep-purple accent-4 white--text"
      />
      <Menu />
      <Drawer />
    </v-app-bar>
  </nav>
</template>

<script>
import Drawer from "./Drawer.vue"
import { mapGetters, mapActions, mapState } from "vuex"
export default {
  data: () => ({
    appBarColor: "transparent",
    dark: true,
  }),
  components: {
    Drawer,
    Menu: () => import("./Menu.vue"),
  },
  methods: {
    ...mapActions(["toggleDrawer"]),

    colorNav() {
      document.addEventListener("scroll", () => {
        // console.log(window.scrollY);
        if (window.scrollY >= 600) {
          this.appBarColor = "white"
          this.dark = false
        } else {
          this.appBarColor = "transparent"
          this.dark = true
        }
      })
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.colorNav()
    })
  },
  computed: {
    ...mapGetters(["appRoutes"]),
    ...mapState(["nav"]),
    nav: {
      get() {
        return this.$store.state.nav
      },
      set(new_value) {
        this.$store.state.nav = new_value
      },
    },
  },
}
</script>
