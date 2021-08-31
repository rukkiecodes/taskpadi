<template>
  <v-navigation-drawer
    v-model="dashboardNavigation.drawerState"
    color="deep-purple accent-4"
    hide-overlay
    app
  >
    <v-list-item>
      <v-card
        class="d-flex flex-column justify-center align-center"
        width="100%"
        height="200"
        flat
        color="transparent"
      >
        <v-avatar tile size="70">
          <img src="../../../assets/paddi.png" />
        </v-avatar>
        <span class="text-h6 mt-4 white--text">
          TrustPaddi
        </span>
      </v-card>
    </v-list-item>

    <v-list dense>
      <v-list-item
        v-for="(route, i) in dashboardRoutes"
        :key="i"
        :to="route.route"
        link
        dense
        color="white"
      >
        <v-list-item-icon>
          <v-icon v-text="route.icon" />
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title v-text="route.title" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  data: () => ({
    drawer: true,
    items: [
      { title: "Home", icon: "mdi-view-dashboard" },
      { title: "About", icon: "mdi-forum" },
    ],
  }),
  computed: {
    ...mapGetters(["dashboardRoutes"]),
    ...mapState(["dashboardNavigation"])
  },
};
</script>
