<template>
  <v-navigation-drawer
    v-model="dashboardNavigation.drawerState"
    color="deep-purple accent-4"
    hide-overlay
    width="200"
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
        dark
        color="white"
        class="mb-2"
        @click="setCurrentRoute"
      >
        <v-list-item-icon>
          <v-icon v-text="route.icon" />
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title v-text="route.title" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <template v-slot:append>
      <v-list class="py-0" dense>
        <v-list-item link dense dark color="white" @click="logout.logoutDialog = true">
          <v-list-item-icon>
            <v-icon>mdi-logout-variant</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </template>
    <LogoutDialog />
  </v-navigation-drawer>
</template>

<script>
import { mapGetters, mapState } from "vuex"
import LogoutDialog from "../components/logoutDialog.vue"
export default {
  data: () => ({
    drawer: true,
    items: [
      { title: "Home", icon: "mdi-view-dashboard" },
      { title: "About", icon: "mdi-forum" },
    ],
  }),
  components: {
    LogoutDialog,
  },
  methods: {
    setCurrentRoute() {
      this.dashboardNavigation.currentRoute = window.location.pathname
    },
  },
  computed: {
    ...mapGetters(["dashboardRoutes"]),
    ...mapState(["dashboardNavigation", "logout"]),
  },
}
</script>
