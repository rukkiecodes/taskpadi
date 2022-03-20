<template>
  <v-dialog
    persistent
    max-width="400"
    v-model="customerSupport.customerDialog"
    :fullscreen="$vuetify.breakpoint.name == 'xs' ? true : false"
  >
    <v-card>
      <v-card-title class="text-h6 grey--text text--darken-3">
        Create support ticket
      </v-card-title>
      <v-card-text>
        <v-row justify="space-between" align="start">
          <v-col cols="12" sm="6">
            <v-text-field
              flat
              solo
              hide-details
              label="Subject"
              background-color="#F4F7F8"
              v-model="customerSupport.createTicketCredential.subject"
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              flat
              solo
              hide-details
              label="Department"
              background-color="#F4F7F8"
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
              @change="setImage"
              truncate-length="15"
              background-color="#F4F7F8"
            ></v-file-input>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          text
          color="grey darken-3"
          class="text-capitalize font-weight-bold"
          @click="customerSupport.customerDialog = false"
        >
          Close
        </v-btn>
        <v-btn
          dark
          depressed
          color="#7E2DEE"
          @click="createTicket"
          class="text-capitalize font-weight-bold"
          :loading="customerSupport.createLoading"
        >
          Create ticket
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
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
