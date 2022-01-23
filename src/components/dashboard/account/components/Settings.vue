<template>
  <v-card flat width="500" class="mx-auto settings">
    <v-row class="mb-3" justify="space-between" align="start">
      <v-col cols="12">
        <ChangePassword />
      </v-col>
      <v-col cols="12">
        <Banks />
      </v-col>
      <v-col cols="12">
        <AddBanksAccount />
      </v-col>
      <v-col cols="12">
        <ResolveBanksAccount />
      </v-col>
      <v-col cols="12">
        <RemoveBanksAccount />
      </v-col>
      <v-col cols="12">
        <Logout />
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { mapState, mapActions } from "vuex"
import Logout from "./Logout.vue"
import ChangePassword from "./ChangePassword.vue"
import Banks from "./Banks.vue"
import AddBanksAccount from "./AddBanksAccount.vue"
import ResolveBanksAccount from "./ResolveBanksAccount.vue"
import RemoveBanksAccount from "./RemoveBanksAccount.vue"
export default {
  data: () => ({
    hasVisiblePassword: false,
  }),

  components: {
    Logout,
    ChangePassword,
    Banks,
    AddBanksAccount,
    ResolveBanksAccount,
    RemoveBanksAccount
  },

  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        const input = document.querySelectorAll(".settings .vs-input")
        if (input)
          for (let i = 0; i <= input.length; i++) {
            input[i].style.width = "100%"
          }
      }, 100)
    })
  },

  methods: {
    ...mapActions(["changePassword"]),
  },

  computed: {
    getProgress() {
      let progress = 0

      // at least one number

      if (/\d/.test(this.settings.credential.password)) {
        progress += 20
      }

      // at least one capital letter

      if (/(.*[A-Z].*)/.test(this.settings.credential.password)) {
        progress += 20
      }

      // at menons a lowercase

      if (/(.*[a-z].*)/.test(this.settings.credential.password)) {
        progress += 20
      }

      // more than 5 digits

      if (this.settings.credential.password.length >= 6) {
        progress += 20
      }

      // at least one special character

      if (/[^A-Za-z0-9]/.test(this.settings.credential.password)) {
        progress += 20
      }

      return progress
    },

    ...mapState(["settings"]),
  },
}
</script>

<style scoped>
.hide {
  display: none;
}
</style>
