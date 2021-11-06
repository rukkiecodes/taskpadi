<template>
  <v-container>
    <v-btn
      v-if="paddiLink.paddiLinks.length != 0"
      @click="paddiLink.dialog = true"
      class="text-capitalize mb-4"
      color="deep-purple accent-4"
      dark
      x-large
    >
      <v-icon left>mdi-plus</v-icon>
      Create New Paddi link
    </v-btn>
    <NoLink v-if="paddiLink.paddiLinks.length == 0" />
    <CreateLink />
    <PaddiLinks v-if="paddiLink.paddiLinks.length != 0" />
  </v-container>
</template>

<script>
import { mapState } from "vuex"
export default {
  components: {
    NoLink: () => import("./components/NoLink.vue"),
    CreateLink: () => import("./components/CreateLink.vue"),
    PaddiLinks: () => import("./components/PaddiLinks.vue"),
  },
  computed: {
    ...mapState(["paddiLink"]),
  },
}
</script>
