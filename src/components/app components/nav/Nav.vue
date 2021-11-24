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
        dark
        depressed
        v-for="(route, i) in appRoutes"
        :key="i"
        :to="route.to"
        v-text="route.title"
        class="ml-3 text-capitalize hidden-md-and-down rounded-pill"
        active-class="deep-purple accent-4 white--text"
      />
      <Menu />
      <v-btn
        @click="nav.drawer = true"
        class="hidden-lg-and-up"
        icon
        dark
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <Drawer />
  </nav>
</template>

<script>
import Drawer from "./Drawer.vue";
import { mapGetters, mapActions, mapState } from "vuex";
export default {
  data: () => ({
    appBarColor: "transparent",
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
        if (window.scrollY >= 50) {
          this.appBarColor = "white";
        } else {
          this.appBarColor = "transparent";
        }
      });
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.colorNav();
    });
  },
  computed: {
    ...mapGetters(["appRoutes"]),
    ...mapState(["nav"]),
    nav: {
      get() {
        return this.$store.state.nav;
      },
      set(new_value) {
        this.$store.state.nav = new_value;
      },
    },
  },
};
</script>
