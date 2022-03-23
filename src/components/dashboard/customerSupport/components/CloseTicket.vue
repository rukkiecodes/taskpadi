<template>
  <vs-dialog
    not-center
    prevent-close
    max-width="360px"
    v-model="customerSupport.closeTicketDialog"
  >
    <template #header>
      <h4 class="not-margin">Confirm close</h4>
    </template>

    <div class="con-content">
      <p>Are you sure you want to close this ticket?</p>
    </div>

    <template #footer>
      <v-card-actions class="con-footer d-flex py-0 my-0">
        <v-spacer />

        <vs-button
          dark
          transparent
          @click="customerSupport.closeTicketDialog = false"
        >
          Cancel
        </vs-button>
        <vs-button
          transparent
          color="#6200EA"
          @click="closeTicket"
          :loading="customerSupport.closeTicketLoading"
        >
          Close ticket
        </vs-button>
      </v-card-actions>
    </template>
  </vs-dialog>
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
