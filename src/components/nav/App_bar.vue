<template>
  <v-app-bar flat color="#ffffff" class="app_bar" fixed>
    <v-avatar class="logo_avatar">
      <img :src="logo" :alt="logo" />
    </v-avatar>
    <v-spacer />
    <div class="links hidden-sm-and-down">
      <router-link
        v-for="(route, index) in drawer_routs"
        :key="index"
        :class="{ 'active_route font-weight-bold': app_nav_title == route.to }"
        :to="route.to"
        >{{ route.title }}</router-link
      >
    </div>
    <v-spacer />
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="#4468E2"
          dark
          v-bind="attrs"
          v-on="on"
          class="text-capitalize font-weight-normal rounded-lg"
          depressed
        >
          Get started
          <v-icon right>mdi-chevron-down</v-icon>
        </v-btn>
      </template>
      <v-list dense width="200" class="pa-0">
        <v-list-item
          v-for="(menu, index) in menu_links"
          :key="index"
          :to="menu.to"
          dense
        >
          <v-list-item-title
            class="text-body-2 grey--text text--darken-4"
            v-text="menu.title"
          />
        </v-list-item>
      </v-list>
    </v-menu>
    <v-btn class="hidden-md-and-up ml-2" icon depressed @click="toggle_drawer">
      <v-icon class="white--grey">mdi-menu</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapActions, mapMutations, mapState, mapGetters } from "vuex";
export default {
  data: () => ({
    logo: require("../../assets/paddi.png"),
    menu_links: [
      { title: "Sign In", to: "/signin" },
      { title: "Sign Up", to: "/signup_buyer" },
    ],
  }),

  created() {
    this.app_bar_route();
  },

  methods: {
    ...mapActions(["app_bar_route"]),

    ...mapMutations(["toggle_drawer"]),
  },

  computed: {
    ...mapState(["app_nav_title"]),
    ...mapGetters(["drawer_routs"]),
    app_nav_title: {
      get() {
        return this.$store.state.app_nav_title;
      },
      set(new_value) {
        this.$store.state.app_nav_title = new_value;
      },
    },
  },
};
</script>

<style scoped>
@import url(../../assets/styles/app_bar.css);
</style>
