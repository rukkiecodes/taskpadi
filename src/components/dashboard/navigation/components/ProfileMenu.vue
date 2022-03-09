<template>
  <v-menu
    offset-y
    rounded="lg"
    open-on-hover
    v-model="menu"
    :close-on-content-click="false"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-chip v-on="on" v-bind="attrs" color="transparent" class="pl-0">
        <vs-avatar
          dark
          circle
          size="30"
          class="mr-2"
          @click="menu = !menu"
          badge-position="top-right"
          v-show="!account.userData.avatar"
        >
          <template #text>
            {{ account.userData.firstname }} {{ account.userData.lastname }}
          </template>
        </vs-avatar>
        <vs-avatar
          circle
          size="30"
          class="mr-2"
          @click="menu = !menu"
          badge-position="top-right"
          v-show="account.userData.avatar"
        >
          <img
            alt=""
            :src="`https://trustpaddi.herokuapp.com/${account.userData.avatar}`"
          />
        </vs-avatar>

        {{ account.userData.firstname }}
      </v-chip>
    </template>
    <v-list dense class="py-0">
      <v-list-item dense to="/dashboard/account">
        <v-list-item-icon>
          <v-icon>mdi-account-outline</v-icon>
        </v-list-item-icon>
        <v-list-item-content class="ml-n6">
          <v-list-item-title>My Account</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item @click="logout.logoutDialog = true" dense>
        <v-list-item-icon>
          <v-icon
            class="red--text"
            style="font-size: 1.2rem; transform: scaleX(-1)"
            >mdi-location-exit</v-icon
          >
        </v-list-item-icon>
        <v-list-item-content class="ml-n6">
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import { mapState } from "vuex"
export default {
  data: () => ({
    menu: false,
  }),

  mounted() {
    this.$nextTick(() => {
      console.log(this.account)
    })
  },

  computed: {
    ...mapState(["logout", "account"]),
  },
}
</script>
