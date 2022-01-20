<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        text
        v-on="on"
        depressed
        v-bind="attrs"
        color="grey darken-3"
        class="text-capitalize text-body-2 font-weight-regular rounded-pill pl-0 ml-4 ml-sm-0"
      >
        <vs-avatar color="#6E14EC" size="35" class="mr-2">
          <i v-show="account.userData.avatar == ''" class="las la-user"></i>
          <img
            v-show="account.userData.avatar != ''"
            src="../../../../assets/trust/Ellipse3.png"
            alt=""
          />
        </vs-avatar>
        {{ account.userData.firstname }}
        <v-icon right>mdi-chevron-down</v-icon>
      </v-btn>
    </template>
    <v-list class="py-0" dense>
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
  </v-menu>
</template>

<script>
import { mapState } from "vuex"
export default {
  computed: {
    ...mapState(["logout", "account"]),
  },
}
</script>
