<template>
  <v-navigation-drawer
    app
    right
    color="white"
    width="260"
    class="rightDrawer"
    v-model="dashboardNavigation.rightDrawerState"
  >
    <template v-slot:prepend>
      <v-sheet class="d-flex justify-end align-center px-0 py-3" flat>
        <v-spacer></v-spacer>
        <v-badge color="red" dot overlap>
          <v-icon>mdi-bell-outline</v-icon>
        </v-badge>
        <ProfileMenu />
      </v-sheet>
    </template>
    <Balance />
    <v-card color="transparent mx-2 mt-2 text-center" flat>
      <v-card-text class="pa-0"
        >Money here are available for witdraws</v-card-text
      >
    </v-card>
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

<style>
.v-navigation-drawer__content::-webkit-scrollbar {
  width: 0px;
}
</style>
