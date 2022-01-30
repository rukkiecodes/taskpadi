<template>
  <nav>
    <v-app-bar app flat color="#F8F8FB" style="z-index: 101">
      <v-app-bar-nav-icon @click="drawer = !drawer" class="hidden-lg-and-up" />

      <v-list dense class="py-0" color="transparent" v-if="appbarHeadingLogo">
        <v-list-item dense class="py-0">
          <v-avatar size="30" color="transparent" tile>
            <img src="../../../assets/paddi.png" />
          </v-avatar>
          <v-list-item-content>
            <v-list-item-title
              class="text-body-2 font-weight-bold ml-2 grey--text text--darken-3"
              >TrustPaddi</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>

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
        to="/dashboard/createpaddilink"
        class="text-capitalize text-body-2 font-weight-bold hidden-xs-only"
        >Create paddi link</vs-button
      >

      <v-badge class="mx-5" color="red" dot overlap>
        <i style="font-size: 1.3rem" class="las la-bell"></i>
      </v-badge>

      <ProfileMenu />
    </v-app-bar>

    <v-navigation-drawer
      app
      :width="200"
      v-model="drawer"
      color="transparent"
      style="z-index: 101"
    >
      <vs-sidebar
        absolute
        :square="true"
        v-model="active"
        open
        style="width: 100%"
      >
        <template #logo>
          <div class="d-flex flex-column align-start justify-center">
            <v-list
              dense
              class="pa-0 ml-n10 mt-n5"
              color="transparent"
              v-if="navbarHeadingLogo"
            >
              <v-list-item dense class="py-0">
                <v-avatar size="30" color="transparent" tile>
                  <img src="../../../assets/paddi.png" />
                </v-avatar>
                <v-list-item-content>
                  <v-list-item-title
                    class="text-body-2 font-weight-bold ml-2 grey--text text--darken-3"
                    >TrustPaddi</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
            </v-list>

            <v-list
              dense
              class="pa-0"
              v-if="navbarHeadingProfile"
              color="transparent"
            >
              <v-list-item dense class="py-0">
                <vs-avatar size="35" color="transparent" tile>
                  <img
                    :src="`https://dev.trustpaddi.com/public/storage/users/avatars/${account.userData.avatar}`"
                  />
                </vs-avatar>
                <v-list-item-content>
                  <v-list-item-title
                    class="text-body-2 font-weight-bold ml-2 grey--text text--darken-3"
                    >{{ account.userData.firstname }}</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
            </v-list>

            <vs-input
              shadow
              primary
              autocomplete="off"
              v-if="headingSearch"
              v-model="searchPaddi"
              placeholder="Search..."
            >
              <template #icon>
                <i class="las la-search"></i>
              </template>
            </vs-input>
          </div>
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
          <vs-row justify="space-between" align="center">
            <vs-avatar badge-color="danger" badge-position="top-right">
              <i class="lar la-bell"></i>
              <template #badge> 28 </template>
            </vs-avatar>

            <vs-button icon danger @click="logout.logoutDialog = true">
              <i style="transform: scaleX(-1)" class="las la-sign-out-alt"></i>
            </vs-button>

            <vs-switch dark v-model="active5">
              <template #circle>
                <i v-if="!active5" class="lar la-sun"></i>
                <i v-else class="lar la-moon"></i>
              </template>
            </vs-switch>
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
    active: "",
    active5: false,
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

      var fullLocation = location.pathname
      var arr = fullLocation.split("/")
      arr.shift()
      fullLocation = arr.join("/")

      var cutFullLocation = fullLocation
      var arr2 = cutFullLocation.split("/")
      arr2.shift()
      cutFullLocation = arr2.join("/")

      function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
      }

      this.active = capitalizeFirstLetter(cutFullLocation)

      if (this.active == "Createpaddilink") {
        this.active = "Create paddi link"
        console.log(this.active)
      }
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

    appbarHeadingLogo() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return true
        case "sm":
          return true
        case "md":
          return false
        case "lg":
          return false
        case "xl":
          return false
      }
    },

    navbarHeadingLogo() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return false
        case "sm":
          return false
        case "md":
          return true
        case "lg":
          return true
        case "xl":
          return true
      }
    },

    headingSearch() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return true
        case "sm":
          return true
        case "md":
          return false
        case "lg":
          return false
        case "xl":
          return false
      }
    },

    navbarHeadingProfile() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return true
        case "sm":
          return true
        case "md":
          return false
        case "lg":
          return false
        case "xl":
          return false
      }
    },
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
