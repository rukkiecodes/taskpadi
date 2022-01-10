<template>
  <v-app-bar color="#EFF1FF" class="app_bar" flat fixed>
    <v-avatar class="logo_avatar">
      <img :src="logo" :alt="logo" />
    </v-avatar>
    <v-spacer />

    <v-btn
      v-for="(route, index) in drawer_routs"
      :key="index"
      :to="route.to"
      class="ml-2 text-capitalize hidden-sm-and-down rounded-lg"
      active-class="indigo--text text--accent-4 font-weight-bold"
      text
      >{{ route.title }}</v-btn
    >
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
    <v-btn class="hidden-md-and-up" icon depressed @click="toggle_drawer">
      <v-icon class="white--grey">mdi-dots-vertical</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  data: () => ({
    logo: require("../../assets/paddi.png"),
    menu_links: [
      { title: "Sign In", to: "/signin" },
      { title: "Sign Up", to: "/signup_buyer" },
    ],
  }),

  methods: {
    ...mapMutations(["toggle_drawer"]),
  },

  computed: {
    ...mapGetters(["drawer_routs"]),
  },
};
</script>

<style scoped>
@import url(../../assets/icon/css/materialdesignicons.min.css);
</style>
