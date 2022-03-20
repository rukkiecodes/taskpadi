<template>
  <div>
    <vs-button
      flat
      active
      color="#6200EA"
      style="font-weight: bold"
      @click="transaction.createTransactionDialog = true"
    >
      Create transaction</vs-button
    >

    <v-dialog
      persistent
      scrollable
      max-width="500"
      v-model="transaction.createTransactionDialog"
      :fullscreen="$vuetify.breakpoint.name == 'xs' ? true : false"
    >
      <v-card max-height="500">
        <v-card-title> Create transaction </v-card-title>
        <v-card-text>
          <v-row justify="space-between" align="start">
            <v-col cols="12" sm="6">
              <v-text-field
                solo
                flat
                hide-details
                background-color="#F4F7F8"
                placeholder="Recipient name"
                v-model="transaction.createTransactionCredential.recipient_name"
              />
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                solo
                flat
                hide-details
                background-color="#F4F7F8"
                placeholder="Recipient email"
                v-model="
                  transaction.createTransactionCredential.recipient_email
                "
              />
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                solo
                flat
                hide-details
                background-color="#F4F7F8"
                placeholder="Recipient phone"
                v-model="
                  transaction.createTransactionCredential.recipient_phone
                "
              />
            </v-col>
            <v-col cols="12" sm="6">
              <v-select
                flat
                solo
                hide-details
                :items="['product']"
                background-color="#F4F7F8"
                placeholder="Transaction type"
                v-model="
                  transaction.createTransactionCredential.transaction_type
                "
              />
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                solo
                flat
                hide-details
                placeholder="Price"
                background-color="#F4F7F8"
                v-model="transaction.createTransactionCredential.price"
              />
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                solo
                flat
                hide-details
                placeholder="Quantity"
                background-color="#F4F7F8"
                v-model="transaction.createTransactionCredential.quantity"
              />
            </v-col>
            <v-col cols="12" sm="6">
              <v-select
                flat
                solo
                hide-details
                placeholder="Role"
                background-color="#F4F7F8"
                :items="['seller', 'buyer']"
                v-model="transaction.createTransactionCredential.role"
              />
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                solo
                flat
                hide-details
                type="number"
                background-color="#F4F7F8"
                placeholder="Duration /*number in days"
                v-model="transaction.createTransactionCredential.duration"
              />
            </v-col>
            <v-col cols="12">
              <v-textarea
                flat
                solo
                counter
                no-resize
                full-width
                height="100"
                :rules="rules"
                :maxlength="max"
                background-color="#F4F7F8"
                placeholder="Product Description"
                v-model="transaction.createTransactionCredential.description"
              />
            </v-col>
            <v-col cols="12">
              <v-file-input
                solo
                flat
                hide-details
                placeholder="image"
                class="realFileInput"
                background-color="#F4F7F8"
                @change="setTransactionImage"
              />
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <vs-button
            shadow
            @click="transaction.createTransactionDialog = false"
          >
            Cancel
          </vs-button>
          <vs-button
            flat
            active
            color="#6200EA"
            @click="createTransaction"
            :loading="transaction.createTransactionLoading"
          >
            Create transaction</vs-button
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex"

export default {
  data: () => ({
    max: 180,
    rules: [(v) => v.length <= 180 || "Max 25 characters"],
  }),

  methods: {
    ...mapActions(["setTransactionImage", "createTransaction"]),
  },

  computed: {
    ...mapState(["transaction"]),
  },
}
</script>
