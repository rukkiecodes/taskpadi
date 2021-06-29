<template>
  <v-container>
    <v-app-bar
      flat
      fixed
      color="#ffffff"
      class="app_bar"
    >
      <v-btn
        class="hidden-md-and-up mr-3"
        icon
        depressed
        @click="toggle_drawer"
      >
        <v-icon class="white--grey ">mdi-menu</v-icon>
      </v-btn>
      <v-avatar class="logo_avatar">
        <img
          :src="logo"
          :alt="logo"
        >
      </v-avatar>
      <v-spacer />
      <div class="links hidden-sm-and-down">
        <router-link
          :class="{ 'active_route': app_nav_title == '/'}"
          to="/"
        >Home</router-link>
        <router-link
          :class="{ 'active_route': app_nav_title == '/about'}"
          to="/about"
        >About Us</router-link>
        <router-link
          :class="{ 'active_route': app_nav_title == '/faq'}"
          to="/"
        >FAQ</router-link>
        <router-link
          :class="{ 'active_route': app_nav_title == '/contact'}"
          to="/"
        >Contact Us</router-link>
        <router-link
          :class="{ 'active_route': app_nav_title == '/pricing'}"
          to="/"
        >Pricing</router-link>
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
        <v-list>
          <v-list-item
            v-for="(menu, index) in menu_links"
            :key="index"
            :to="menu.to"
          >
            <v-list-item-title>{{ menu.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </v-container>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex"
export default {
  data: () => ({
    logo: require("../../assets/paddi.png"),
    menu_links: [
      { title: 'Sign In', to: '/signin' },
      { title: 'Sign Up', to: '/signup' },
    ]
  }),

  created () {
    this.app_bar_route()
  },

  methods: {
    ...mapActions(["app_bar_route"]),

    ...mapMutations(["toggle_drawer"])
  },

  computed: {
    ...mapState(["app_nav_title"]),
    app_nav_title: {
      get () {
        return this.$store.state.app_nav_title;
      },
      set (new_value) {
        this.$store.state.app_nav_title = new_value;
      },
    },
  }
}
</script>

<style scoped>
@import url(../../assets/styles/app_bar.css);
</style>