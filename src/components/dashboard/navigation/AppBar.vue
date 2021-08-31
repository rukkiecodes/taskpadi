<template>
  <v-app-bar dense app flat color="deep-purple lighten-5">
    <v-app-bar-nav-icon
      @click="
        dashboardNavigation.drawerState = !dashboardNavigation.drawerState
      "
      class="hidden-lg-and-up"
    />
    <v-toolbar-title>Dashboard</v-toolbar-title>
  </v-app-bar>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["dashboardNavigation"]),
  },
};
</script>
