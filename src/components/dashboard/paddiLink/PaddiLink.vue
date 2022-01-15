<template>
  <v-container>
    <NoLink v-if="paddiLink.paddiLinks.length == 0" />
    <CreateLink />
    <EditLink />
    <PaddiLinks v-if="paddiLink.paddiLinks.length != 0" />
  </v-container>
</template>

<script>
import { mapState } from "vuex"
export default {
  components: {
    NoLink: () => import("./components/NoLink.vue"),
    CreateLink: () => import("./components/CreateLink.vue"),
    EditLink: () => import("./components/EditLink.vue"),
    PaddiLinks: () => import("./components/PaddiLinks.vue"),
  },
  computed: {
    ...mapState(["paddiLink"]),
  },
}
</script>
