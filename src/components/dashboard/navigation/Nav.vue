<template>
  <nav>
    <v-app-bar app flat color="#F8F8FB">
      <v-app-bar-nav-icon @click="drawer = !drawer" class="hidden-lg-and-up" />

      <vs-input
        shadow
        primary
        icon-after
        autocomplete="off"
        v-model="searchPaddi"
        class="hidden-xs-only"
        placeholder="Search..."
      >
        <template #icon>
          <i class="las la-search"></i>
        </template>
      </vs-input>

      <v-spacer />

      <vs-button
        dark
        depressed
        color="#6200EA"
        to="/dashboard/paddiLink"
        class="text-capitalize text-body-2 font-weight-bold hidden-xs-only"
        >Create paddi link</vs-button
      >

      <v-badge class="mx-5" color="red" dot overlap>
        <i style="font-size: 1.3rem" class="las la-bell"></i>
      </v-badge>

      <ProfileMenu />
    </v-app-bar>

    <v-navigation-drawer app color="transparent" v-model="drawer" :width="200">
      <vs-sidebar
        absolute
        :square="true"
        v-model="active"
        open
        style="width: 100%"
      >
        <template style="height: 400px; background: red" #logo>
          <v-card
            flat
            width="100%"
            height="200"
            color="transparent"
            class="d-flex flex-column justify-center align-center"
          >
            <vs-avatar size="60">
              <img src="../../../assets/paddi.png" />
            </vs-avatar>
            <span
              class="text-body-1 mt-4 grey--text text--darken-4 text-uppercase font-weight-bold"
            >
              TrustPaddi
            </span>
            <span
              class="text-caption text-center mt-0 grey--text text--darken-3"
            >
              Safer Transactions, Happy people
            </span>
          </v-card>
        </template>

        <vs-sidebar-item
          v-for="(route, i) in dashboardRoutes"
          :key="i"
          :id="route.title"
          :to="route.route"
        >
          <template #icon>
            <i style="font-size: 1.3rem" :class="route.icon"></i>
          </template>
          <span class="text-body-2">{{ route.title }}</span>
        </vs-sidebar-item>

        <template #footer>
          <vs-row justify="space-between">
            <vs-avatar size="30" class="mr-3">
              <i class="las la-user" v-if="account.userData.avatar == ''"></i>
              <img
                src="../../../assets/trust/pl.png"
                v-if="account.userData.avatar == ''"
                alt=""
              />
              <img
                :src="
                  'https://dev.trustpaddi.com/public/storage/users/avatars/' +
                  account.userData.avatar
                "
                v-else
                alt=""
              />
            </vs-avatar>

            <vs-avatar badge-color="danger" badge-position="top-right">
              <i class="lar la-bell"></i>

              <template #badge> 28 </template>
            </vs-avatar>

            <vs-button icon danger @click="logout.logoutDialog = true">
              <i style="transform: scaleX(-1);" class="las la-sign-out-alt"></i>
            </vs-button>
          </vs-row>
        </template>
      </vs-sidebar>
      <LogoutDialog />
    </v-navigation-drawer>
  </nav>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex"
import LogoutDialog from "../components/logoutDialog.vue"
import ProfileMenu from "./components/ProfileMenu.vue"
export default {
  data: () => ({
    selectedItem: 1,
    drawer: true,
    searchPaddi: "",
    active: "Dashboard",
  }),

  components: {
    LogoutDialog,
    ProfileMenu,
  },

  mounted() {
    this.$nextTick(() => {
      this.drawerVisibility()
      this.removeBorder()

      document.querySelector(".vs-input").style.width = "300px"
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
    ...mapState(["dashboardNavigation", "logout", "account"]),
  },
}
</script>

<style scoped>
.vs-sidebar-content .vs-sidebar__logo img {
  max-height: 59px;
}

.vs-sidebar__item:after {
  background-color: #6200ea;
}

.vs-sidebar__item.active {
  color: #6200ea;
}
</style>
