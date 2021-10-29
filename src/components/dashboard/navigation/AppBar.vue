<template>
  <v-app-bar app flat color="deep-purple lighten-5">
    <v-app-bar-nav-icon
      @click="
        dashboardNavigation.drawerState = !dashboardNavigation.drawerState
      "
      class="hidden-lg-and-up"
    />

    <v-text-field
      flat
      solo
      dense
      hide-details
      class="hidden-xs-only"
      placeholder="Search here"
      append-icon="mdi-magnify"
      color="deep-purple accent-4"
    ></v-text-field>

    <v-spacer />
    <v-badge color="red" dot overlap>
      <v-icon>mdi-bell-outline</v-icon>
    </v-badge>
    <ProfileMenu />
  </v-app-bar>
</template>

<script>
import { mapState } from "vuex"
export default {
  components: {
    ProfileMenu: () => import("./components/ProfileMenu.vue"),
  },
  computed: {
    ...mapState(["dashboardNavigation"]),
  },
}
</script>
