<template>
  <v-card width="100%" outlined class="rounded-lg logout">
    <v-card-text class="font-weight-bold">Logout</v-card-text>

    <v-card-text>
      <v-row justify="space-between" align="start">
        <v-col cols="12">
          <vs-button
            block
            color="danger"
            @click="logoutOfAccount"
            :loading="settings.logoutLoading"
          >
            Logout
            <template #animate>
              <i style="font-size: 1.3rem; transform: scaleX(-1);" class="las la-sign-out-alt"></i>
            </template>
          </vs-button>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState, mapActions } from "vuex"

export default {
  methods: {
    ...mapActions(["logoutOfAccount"]),
  },

  computed: {
    ...mapState(["settings"]),
  },
}
</script>
