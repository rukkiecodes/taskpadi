<template>
  <v-navigation-drawer
    app
    color="white"
    v-model="dashboardNavigation.drawerState"
  >
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
        <span class="text-caption mt-0 grey--text text--darken-3">
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
// @ts-nocheck
import { mapGetters, mapState } from "vuex"
import LogoutDialog from "../components/logoutDialog.vue"
export default {
  data: () => ({
    selectedItem: 1,
    drawer: true,
  }),
  components: {
    LogoutDialog,
  },
  mounted() {
    this.$nextTick(() => {
      this.removeBorder()
    })
  },
  methods: {
    setCurrentRoute() {
      this.dashboardNavigation.currentRoute = window.location.pathname
    },
    removeBorder() {
      const border = document.querySelectorAll(".v-navigation-drawer__border")
      if (border) {
        for (let i = 0; i < border.length; i++) {
          border[i].style.display = "none"
        }
      }
    },
  },
  computed: {
    ...mapGetters(["dashboardRoutes"]),
    ...mapState(["dashboardNavigation", "logout"]),
  },
}
</script>
