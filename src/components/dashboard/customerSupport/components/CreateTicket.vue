<template>
  <vs-dialog
    not-center
    width="460px"
    prevent-close
    v-model="customerSupport.customerDialog"
  >
    <template #header>
      <h4 class="not-margin">Create support ticket</h4>
    </template>

    <div class="con-content">
      <v-row justify="space-between" align="start">
        <v-col cols="12" sm="6">
          <vs-input
            placeholder="Subject"
            v-model="customerSupport.createTicketCredential.subject"
          />
        </v-col>
        <v-col cols="12" sm="6">
          <vs-input
            placeholder="Department"
            v-model="customerSupport.createTicketCredential.department"
          />
        </v-col>
        <v-col cols="12">
          <v-textarea
            flat
            solo
            counter
            no-resize
            full-width
            hide-details
            :rules="rules"
            :maxlength="max"
            class="rounded-lg"
            placeholder="Description"
            background-color="#F4F7F8"
            v-model="customerSupport.createTicketCredential.description"
          />
        </v-col>
        <v-col cols="12">
          <v-file-input
            solo
            flat
            hide-details
            label="Add image"
            class="rounded-lg"
            @change="setImage"
            truncate-length="15"
            background-color="#F4F7F8"
          />
        </v-col>
      </v-row>
    </div>

    <template #footer>
      <v-card-actions class="con-footer d-flex py-0 my-0">
        <v-spacer />
        <vs-button
          dark
          transparent
          @click="customerSupport.customerDialog = false"
        >
          Close
        </vs-button>
        <vs-button
          transparent
          color="#6200EA"
          @click="createTicket"
          :loading="customerSupport.createLoading"
        >
          Submit ticket
        </vs-button>
      </v-card-actions>
    </template>
  </vs-dialog>
</template>

<script>
import { mapActions, mapState } from "vuex"
export default {
  data: () => ({
    max: 191,
    rules: [(v) => v.length <= 255 || "Max 25 characters"],
  }),

  methods: {
    ...mapActions(["createTicket", "setImage"]),
  },

  computed: {
    ...mapState(["customerSupport"]),
  },
}
</script>
