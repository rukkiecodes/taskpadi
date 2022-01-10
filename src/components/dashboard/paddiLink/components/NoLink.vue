<template>
  <v-sheet
    class="d-flex flex-column justify-center align-center text-center"
    min-height="85vh"
    color="transparent"
  >
    <v-card
      class="d-flex flex-column justify-center align-center"
      color="transparent"
      flat
    >
      <v-avatar size="110" color="transparent" rounded>
        <v-icon class="ml-n2 mb-n2" size="90">mdi-dropbox</v-icon>
      </v-avatar>
      <v-card-text>
        You have no Paddi link yet.<br />Click on the button bellow to create a
        Paddi link in seconds.
      </v-card-text>
    </v-card>
    <v-btn
      @click="paddiLink.dialog = true"
      color="deep-purple accent-4"
      class="mt-4"
      dark
      >Create Paddi link</v-btn
    >
  </v-sheet>
</template>

<script>
import { mapState } from "vuex"
export default {
  computed: {
    ...mapState(["paddiLink"]),
  },
}
</script>
