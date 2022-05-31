<template>
  <v-container class="account">
    <v-card flat color="transparent">
      <v-toolbar flat color="transparent" dark dense>
        <v-toolbar-title class="grey--text text--darken-3 font-weight-bold"
          >My Account</v-toolbar-title
        >
      </v-toolbar>
      <v-tabs
        color="deep-purple accent-4"
        background-color="transparent"
        :vertical="tabVertical"
        :centered="tabCentered"
        :right="tabRight"
      >
        <v-tab
          active-class="font-weight-bold"
          class="text-capitalize text-body-2"
          v-for="(tab, i) in tabs"
          :key="i"
        >
          <span class="hidden-sm-and-down" v-text="tab.span" />
          <v-icon class="hidden-md-and-up" v-text="tab.icon" />
        </v-tab>

        <v-tab-item class="mt-4 mt-sm-0">
          <UserProfile />
        </v-tab-item>
        <v-tab-item>
          <Settings />
        </v-tab-item>
      </v-tabs>
    </v-card>
    <ViewAvatar />
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex"
import UserProfile from "./components/UserProfile.vue"
import Settings from "./components/Settings.vue"
export default {
  data: () => ({
    tabs: [
      {
        span: "User Profile",
        icon: "mdi-account-outline",
      },
      {
        span: "Settings",
        icon: "mdi-account-cog-outline",
      },
    ],
  }),

  components: {
    ViewAvatar: () => import("./components/ViewAvatar.vue"),
    UserProfile,
    Settings,
  },

  mounted() {
    this.$nextTick(() => {
      const bg = document.querySelectorAll('.theme--light.v-tabs-items')
      bg.forEach(el => {
        el.style.background = 'rgba(0,0,0,0)'
      })
    })
  },

  created() {
    this.getBanks()
    this.getStates()
  },

  methods: {
    avatarAction() {
      this.account.editAvatarDialog = true
    },

    selectImage() {
      document.querySelector(".mainInput [type='file']").click()
    },

    ...mapActions(["setImage", "updateProfile", "getBanks", "getStates"]),
  },

  computed: {
    ...mapState(["account"]),

    tabVertical() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return false
        case "sm":
          return true
        case "md":
          return true
        case "lg":
          return true
        case "xl":
          return true
      }
    },

    tabCentered() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return true
        case "sm":
          return false
        case "md":
          return false
        case "lg":
          return false
        case "xl":
          return false
      }
    },

    tabRight() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return false
        case "sm":
          return true
        case "md":
          return true
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
.hide {
  display: none;
}
</style>
