<template>
  <v-app-bar flat color="#ffffff" class="app_bar" fixed>
    <v-avatar class="logo_avatar">
      <img :src="logo" :alt="logo" />
    </v-avatar>
    <v-spacer />
    <div class="links hidden-sm-and-down">
      <router-link
        :class="{ 'active_route font-weight-bold': app_nav_title == '/' }"
        to="/"
        >Home</router-link
      >
      <router-link
        :class="{ 'active_route font-weight-bold': app_nav_title == '/about' }"
        to="/about"
        >About Us</router-link
      >
      <router-link
        :class="{ 'active_route font-weight-bold': app_nav_title == '/faq' }"
        to="/faq"
        >FAQ</router-link
      >
      <router-link
        :class="{
          'active_route font-weight-bold': app_nav_title == '/contact',
        }"
        to="/"
        >Contact Us</router-link
      >
      <router-link
        :class="{
          'active_route font-weight-bold': app_nav_title == '/pricing',
        }"
        to="/"
        >Pricing</router-link
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
          <v-list-item-avatar>
            <v-avatar size="30">
              <img :src="menu.image" alt="" />
            </v-avatar>
          </v-list-item-avatar>
          <v-list-item-title class="text-body-2 grey--text text--darken-4">{{
            menu.title
          }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-btn class="hidden-md-and-up ml-2" icon depressed @click="toggle_drawer">
      <v-icon class="white--grey">mdi-menu</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
export default {
  data: () => ({
    logo: require("../../assets/paddi.png"),
    menu_links: [
      {
        title: "Sign In",
        to: "/signin",
        image: require("../../assets/trust/password.png"),
      },
      {
        title: "Sign Up",
        to: "/signup_buyer",
        image: require("../../assets/trust/add-user.png"),
      },
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
