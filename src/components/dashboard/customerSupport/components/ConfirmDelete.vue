<template>
  <vs-dialog
    persistent
    max-width="360px"
    v-model="customerSupport.confirmDeleteDialog"
  >
    <template #header>
      <h4 class="not-margin">Confirm delete</h4>
    </template>

    <div class="con-content">
      <p>Are you sure you want to delete this ticket?</p>
    </div>

    <template #footer>
      <v-card-actions class="con-footer d-flex py-0 my-0">
        <v-spacer />

        <vs-button
          dark
          transparent
          @click="customerSupport.confirmDeleteDialog = false"
        >
          Cancel
        </vs-button>
        <vs-button
          transparent
          color="#FF4757"
          @click="confirmDeleteTicket"
          :loading="customerSupport.deleteLoading"
        >
          Delete ticket
        </vs-button>
      </v-card-actions>
    </template>
  </vs-dialog>
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
