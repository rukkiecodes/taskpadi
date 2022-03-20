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
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex"
import CreateTicket from "./CreateTicket.vue"
import SupportTable from "./SupportTable.vue"
export default {
  components: {
    CreateTicket,
    SupportTable,
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
  },
}
</script>
