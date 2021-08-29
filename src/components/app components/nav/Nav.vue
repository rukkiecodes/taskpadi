<template>
  <nav>
    <v-app-bar app flat color="deep-purple lighten-5">
      <v-avatar tile>
        <img src="../../../assets/paddi.png" alt="" />
      </v-avatar>
      <v-spacer />

      <v-btn
        link
        depressed
        text
        v-for="(route, i) in appRoutes"
        :key="i"
        class="ml-3 text-capitalize hidden-md-and-down"
        active-class="deep-purple accent-4 white--text"
        :to="route.to"
        v-text="route.title"
      />
      <Menu />
      <v-btn
        @click="nav.drawer = true"
        class="hidden-lg-and-up grey--text text--darken-3"
        icon
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
  components: {
    Drawer,
    Menu: () => import("./Menu.vue")
  },
  methods: {
    ...mapActions(["toggleDrawer"]),
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

