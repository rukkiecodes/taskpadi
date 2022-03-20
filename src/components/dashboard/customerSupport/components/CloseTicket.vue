<template>
  <v-dialog
    v-model="customerSupport.closeTicketDialog"
    max-width="360"
    persistent
  >
    <v-card>
      <v-card-title class="text-h6 grey--text text--darken-4">
        Confirm close
      </v-card-title>

      <v-card-text class="py-0">
        Are you sure you want to delete this ticket?
      </v-card-text>

      <v-card-actions>
        <v-spacer />

        <vs-button shadow @click="customerSupport.closeTicketDialog = false">
          Cancel
        </vs-button>
        <vs-button
          flat
          active
          color="#6200EA"
          @click="closeTicket"
          :loading="customerSupport.closeTicketLoading"
        >
          Close ticket
        </vs-button>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions, mapState } from "vuex"
export default {
  methods: {
    ...mapActions(["closeTicket"]),
  },

  computed: {
    ...mapState(["customerSupport"]),
  },
}
</script>
