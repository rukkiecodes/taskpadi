<template>
  <v-card width="100%" outlined class="rounded-lg changePassword">
    <v-card-text class="font-weight-bold">Change Password</v-card-text>

    <v-card-text>
      <v-row justify="space-between" align="start">
        <v-col cols="12">
          <vs-input
            block
            type="password"
            label-placeholder="Old Password"
            v-model="settings.credential.old_password"
          >
            <template #icon>
              <i class="las la-lock"></i>
            </template>
          </vs-input>
        </v-col>
        <v-col cols="12" sm="6">
          <vs-input
            block
            type="password"
            v-model="settings.credential.password"
            label-placeholder="Password"
            :progress="getProgress"
            :visiblePassword="hasVisiblePassword"
            icon-after
            @click-icon="hasVisiblePassword = !hasVisiblePassword"
          >
            <template #icon>
              <i v-if="!hasVisiblePassword" class="las la-eye"></i>
              <i v-else class="las la-eye-slash"></i>
            </template>

            <template v-if="getProgress >= 100" #message-success>
              Secure password
            </template>
          </vs-input>
        </v-col>
        <v-col cols="12" sm="6">
          <vs-input
            block
            type="password"
            label-placeholder="Confirm Password"
            v-model="settings.credential.password_confirmation"
          >
            <template #icon>
              <i class="las la-lock"></i>
            </template>
          </vs-input>
        </v-col>
        <v-col cols="12">
          <vs-button
            block
            color="#6200EA"
            @click="changePassword"
            :loading="settings.loading"
          >
            Change password
          </vs-button>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState, mapActions } from "vuex"

export default {
  data: () => ({
    hasVisiblePassword: false,
  }),

  mounted() {
    this.$nextTick(() => {})
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
