<template>
  <v-container class="account">
    <v-card flat>
      <v-toolbar flat color="white" dark>
        <v-toolbar-title class="grey--text text--darken-3 font-weight-bold"
          >My Account</v-toolbar-title
        >
      </v-toolbar>
      <v-tabs vertical>
        <v-tab
          active-class="font-weight-bold"
          class="text-capitalize text-body-2"
        >
          <span class="hidden-sm-and-down"> User Profile </span>
          <v-icon class="hidden-md-and-up">mdi-account-outline</v-icon>
        </v-tab>
        <v-tab
          active-class="font-weight-bold"
          class="text-capitalize text-body-2"
        >
          <span class="hidden-sm-and-down"> Settings </span>
          <v-icon class="hidden-md-and-up">mdi-account-cog-outline</v-icon>
        </v-tab>

        <v-tab-item>
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
  data: () => ({}),

  components: {
    ViewAvatar: () => import("./components/ViewAvatar.vue"),
    UserProfile,
    Settings,
  },

  mounted() {
    this.$nextTick(() => {
      this.getBanks()
    })
  },

  methods: {
    avatarAction() {
      this.account.editAvatarDialog = true
    },

    selectImage() {
      document.querySelector(".mainInput [type='file']").click()
    },

    ...mapActions(["setImage", "updateProfile", "getBanks"]),
  },

  computed: {
    ...mapState(["account"]),
  },
}
</script>

<style scoped>
.hide {
  display: none;
}
</style>
