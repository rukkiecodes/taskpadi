<template>
  <v-container>
    <NoTicket />
    <CreateTicket />
  </v-container>
</template>

<script>
import { mapState } from "vuex"
import NoTicket from "./components/NoTicket.vue"
import CreateTicket from "./components/CreateTicket.vue"
export default {
  components: {
    NoTicket,
    CreateTicket
  },

  computed: {
    ...mapState(["customerSupport"]),
  },
}
</script>
