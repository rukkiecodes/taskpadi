<template>
  <v-container>
    <NoTicket v-if="tickets.length == 0"/>
    <SupportTable v-if="tickets.length != 0" />
    <CreateTicket />
  </v-container>
</template>

<script>
import { mapGetters, mapState } from "vuex"
import NoTicket from "./components/NoTicket.vue"
import CreateTicket from "./components/CreateTicket.vue"
import SupportTable from "./components/SupportTable.vue"
export default {
  components: {
    NoTicket,
    CreateTicket,
    SupportTable
  },

  computed: {
    ...mapState(["customerSupport"]),
    ...mapGetters(["tickets"])
  },
}
</script>
