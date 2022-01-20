<template>
  <v-card flat width="500" class="mx-auto settings">
    <v-row class="mb-3" justify="space-between" align="start">
      <v-col cols="12">
        <v-card width="100%" outlined class="rounded-lg">
          <v-card-text class="font-weight-bold">Change Password</v-card-text>

          <v-card-text>
            <v-row justify="space-between" align="start">
              <v-col cols="12">
                <vs-input
                  v-model="settings.credential.old_password"
                  type="password"
                  label-placeholder="Old Password"
                >
                  <template #icon>
                    <i class="las la-lock"></i>
                  </template>
                </vs-input>
              </v-col>
              <v-col cols="12">
                <vs-input
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
              <v-col cols="12">
                <vs-input
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
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { mapState, mapActions } from "vuex"

export default {
  data: () => ({
    hasVisiblePassword: false,
  }),

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
