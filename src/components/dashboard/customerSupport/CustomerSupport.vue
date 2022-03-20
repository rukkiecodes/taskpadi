<template>
  <v-container>
    <vs-button
      flat
      active
      color="#6200EA"
      class="px-4 mb-5 font-weight-bold"
      @click="customerSupport.customerDialog = true"
      >Submit ticket</vs-button
    >
    <SupportTable />
    <CreateTicket />
    <ViewTicket />
    <ViewSingleTicket />
    <ConfirmDelete />
  </v-container>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex"
import CreateTicket from "./components/CreateTicket.vue"
import SupportTable from "./components/SupportTable.vue"
export default {
  components: {
    CreateTicket,
    SupportTable,
    ViewTicket: () => import("./components/ViewTicket.vue"),
    ViewSingleTicket: () => import("./components/ViewSingleTicket.vue"),
    ConfirmDelete: () => import("./components/ConfirmDelete.vue"),
  },

  mounted() {
    this.$nextTick(() => {
      this.getTickets()
    })
  },

  methods: {
    ...mapActions(["getTickets"]),
  },

  computed: {
    ...mapState(["customerSupport"]),
    ...mapGetters(["tickets"]),
  },
}
</script>
