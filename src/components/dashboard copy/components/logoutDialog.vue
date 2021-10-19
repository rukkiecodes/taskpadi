<template>
  <v-dialog v-model="logout.logoutDialog" max-width="290">
    <v-card>
      <v-card-title class="text-h5">
        Are you sure you want to logout?
      </v-card-title>

      <v-card-text>
        Please not that your saved cookies and sessions will be deleted
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn color="grey darken-2" text @click="logout.logoutDialog = false">
          Disagree
        </v-btn>

        <v-btn color="warning" text @click="logoutUser">
          Agree
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState, mapActions } from "vuex"
export default {
  methods: {
    ...mapActions(["logoutUser"]),
  },
  computed: {
    ...mapState(["logout"]),
  },
}
</script>
