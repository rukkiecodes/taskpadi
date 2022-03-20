<template>
  <v-dialog
    persistent
    max-width="360"
    v-model="customerSupport.confirmDeleteDialog"
  >
    <v-card>
      <v-card-title class="text-h6 grey--text text--darken-4">
        Confirm delete
      </v-card-title>

      <v-card-text class="py-0">
        Are you sure you want to delete this ticket?
      </v-card-text>

      <v-card-actions>
        <v-spacer />

        <vs-button shadow @click="customerSupport.confirmDeleteDialog = false">
          Cancel
        </vs-button>
        <vs-button
          flat
          active
          color="#FF4757"
          @click="confirmDeleteTicket"
          :loading="customerSupport.deleteLoading"
        >
          Delete ticket
        </vs-button>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions, mapState } from "vuex"
export default {
  methods: {
    ...mapActions(["confirmDeleteTicket"]),
  },

  computed: {
    ...mapState(["customerSupport"]),
  },
}
</script>
