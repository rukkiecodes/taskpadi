<template>
  <v-app-bar
    app
    flat
    dense
    :height="appBarHeight"
    :prominent="normalizeAppBar"
    color="deep-purple lighten-5"
    :shrink-on-scroll="normalizeAppBar"
  >
    <v-app-bar-nav-icon
      @click="
        dashboardNavigation.drawerState = !dashboardNavigation.drawerState
      "
    />
    <v-app-bar-title>Dashboard</v-app-bar-title>

    <v-spacer></v-spacer>

    <template
      v-if="dashboardNavigation.currentRoute == '/dashboard/transaction'"
      v-slot:extension
    >
      <TabHead />
    </template>
  </v-app-bar>
</template>

<script>
import { mapState } from "vuex";
export default {
  components: {
    TabHead: () => import("../transaction/TabHead.vue")
  },
  computed: {
    normalizeAppBar() {
      // @ts-ignore
      switch (this.dashboardNavigation.currentRoute) {
        case "/dashboard/transaction":
          return true;
      }
    },
    appBarHeight() {
      // @ts-ignore
      switch (this.dashboardNavigation.currentRoute) {
        case "/dashboard/transaction":
          return 20;
      }
    },
    ...mapState(["dashboardNavigation"]),
  },
};
</script>
