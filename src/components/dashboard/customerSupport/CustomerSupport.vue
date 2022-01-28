<template>
  <v-container>
    <NoTicket v-if="tickets.length == 0"/>
    <SupportTable v-if="tickets.length != 0" />
    <CreateTicket />
    <ViewTicket />
    <ViewSingleTicket />
  </v-container>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex"
import NoTicket from "./components/NoTicket.vue"
import CreateTicket from "./components/CreateTicket.vue"
import SupportTable from "./components/SupportTable.vue"
export default {
  components: {
    NoTicket,
    CreateTicket,
    SupportTable,
    ViewTicket: () => import("./components/ViewTicket.vue"),
    ViewSingleTicket: () => import("./components/ViewSingleTicket.vue")
  },

  mounted() {
    this.$nextTick(() => {
      this.getTickets()
    })
  },

  methods: {
    ...mapActions(["getTickets"])
  },

  computed: {
    ...mapState(["customerSupport"]),
    ...mapGetters(["tickets"])
  },
}
</script>
