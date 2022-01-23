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
        <v-icon>mdi-bell-outline</v-icon>
      </v-badge>

      <!-- HERE -->

      <v-speed-dial
        v-model="fab"
        direction="bottom"
        :open-on-hover="true"
        :transition="transition"
      >
        <template v-slot:activator>
          <vs-button
            v-model="fab"
            class="font-weight-bold"
            color="#616161"
            transparent
          >
            <vs-avatar size="30" class="mr-3" color="#6200EA">
              <i class="las la-user" v-if="account.userData.avatar == ''"></i>
              <img :src="account.userData.avatar" v-else alt="" />
            </vs-avatar>
            {{ account.userData.firstname || "User" }}
          </vs-button>
        </template>
        <v-list class="py-0" width="200" dense>
          <v-list-item to="/dashboard/account" dense>
            <v-list-item-icon>
              <v-icon>mdi-account-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item>
          <v-list-item @click="logout.logoutDialog = true" dense>
            <v-list-item-icon>
              <v-icon color="red">mdi-power</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="red--text">Logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-speed-dial>
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
            active-class="font-weight-bold"
          >
            <v-list-item-icon>
              <v-icon v-text="route.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title
                class="text-body-2 font-weight-regular"
                v-text="route.title"
              ></v-list-item-title>
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
import { mapState, mapGetters, mapActions } from "vuex"
import LogoutDialog from "../components/logoutDialog.vue"
export default {
  data: () => ({
    selectedItem: 1,
    drawer: true,
    searchPaddi: "",

    direction: "top",
    fab: false,
    fling: false,
    hover: false,
    tabs: null,
    top: false,
    right: true,
    bottom: true,
    left: false,
    transition: "slide-y-reverse-transition",
  }),

  watch: {
    top(val) {
      this.bottom = !val
    },
    right(val) {
      this.left = !val
    },
    bottom(val) {
      this.top = !val
    },
    left(val) {
      this.right = !val
    },
  },

  components: {
    LogoutDialog,
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

<style>
/* This is for documentation purposes and will not be needed in your application */
#create .v-speed-dial {
  position: absolute;
}

#create .v-btn--floating {
  position: relative;
}
</style>
