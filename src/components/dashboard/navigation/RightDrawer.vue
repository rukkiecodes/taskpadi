<template>
  <v-navigation-drawer
    app
    right
    color="white"
    v-model="dashboardNavigation.rightDrawerState"
  >
    <template v-slot:prepend>
      <v-toolbar flat>
        <v-spacer></v-spacer>
        <v-badge color="red" dot overlap>
          <v-icon>mdi-bell-outline</v-icon>
        </v-badge>
        <ProfileMenu />
      </v-toolbar>
    </template>
    <Balance />
  </v-navigation-drawer>
</template>

<script>
// @ts-nocheck
import { mapState } from "vuex"
export default {
  data: () => ({
    drawer: true,
  }),
  components: {
    ProfileMenu: () => import("./components/ProfileMenu.vue"),
    Balance: () => import("./components/Balance.vue"),
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
    ...mapState(["dashboardNavigation"]),
  },
}
</script>
