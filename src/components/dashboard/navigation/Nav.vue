<template>
  <nav>
    <v-app-bar app flat color="#F8F8FB">
      <v-app-bar-nav-icon @click="drawer = !drawer" class="hidden-lg-and-up" />

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
      <v-btn
        dark
        depressed
        to="/dashboard/paddiLink"
        color="deep-purple accent-4"
        class="mx-3 text-capitalize text-body-2 font-weight-bold hidden-xs-only"
        >Create paddi link</v-btn
      >
      <ProfileMenu />
    </v-app-bar>

    <v-navigation-drawer app color="white" v-model="drawer" :width="210">
      <v-list-item dense>
        <v-card
          flat
          width="100%"
          height="200"
          color="transparent"
          class="d-flex flex-column justify-center align-center"
        >
          <v-avatar tile size="60">
            <img src="../../../assets/paddi.png" />
          </v-avatar>
          <span
            class="text-body-1 mt-4 grey--text text--darken-4 text-uppercase font-weight-bold"
          >
            TrustPaddi
          </span>
          <span class="text-caption text-center mt-0 grey--text text--darken-3">
            Safer Transactions, Happy people
          </span>
        </v-card>
      </v-list-item>

      <v-list dense flat>
        <v-list-item-group v-model="selectedItem" color="deep-purple accent-4">
          <v-list-item
            dense
            v-for="(route, i) in dashboardRoutes"
            :key="i"
            :to="route.route"
          >
            <v-list-item-icon>
              <v-icon v-text="route.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="route.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>

      <template v-slot:append>
        <v-list class="py-0" dense>
          <v-list-item dense @click="logout.logoutDialog = true">
            <v-list-item-icon>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </template>
      <LogoutDialog />
    </v-navigation-drawer>
  </nav>
</template>

<script>
import { mapState, mapGetters } from "vuex"
import LogoutDialog from "../components/logoutDialog.vue"
export default {
  data: () => ({
    selectedItem: 1,
    drawer: true,
  }),
  components: {
    ProfileMenu: () => import("./components/ProfileMenu.vue"),
    LogoutDialog,
  },
  mounted() {
    this.$nextTick(() => {
      this.drawerVisibility()
      this.removeBorder()
    })
  },
  methods: {
    setCurrentRoute() {
      this.dashboardNavigation.currentRoute = window.location.pathname
    },
    removeBorder() {
      const border = document.querySelector(".v-navigation-drawer__border")
      if (border) border.style.display = "none"
    },

    drawerVisibility() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return (this.drawer = false)
        case "sm":
          return (this.drawer = false)
        case "md":
          return (this.drawer = false)
        case "lg":
          return (this.drawer = true)
        case "xl":
          return (this.drawer = true)
      }
    },
  },
  computed: {
    ...mapGetters(["dashboardRoutes"]),
    ...mapState(["dashboardNavigation", "logout"]),
  },
}
</script>
