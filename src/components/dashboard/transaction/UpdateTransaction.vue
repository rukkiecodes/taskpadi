<template>
  <vs-dialog
    scroll
    not-center
    width="500px"
    overflow-hidden
    v-model="transaction.updateTransactionDialog"
  >
    <template #header>
      <h4 class="not-margin">Update transaction</h4>
    </template>

    <div class="con-content">
      <v-row justify="space-between" align="start">
        <v-col cols="12" sm="6">
          <vs-input
            block
            placeholder="Recipient name"
            v-model="transaction.updateTransactionCredential.recipient_name"
          />
        </v-col>
        <v-col cols="12" sm="6">
          <vs-input
            block
            placeholder="Recipient email"
            v-model="transaction.updateTransactionCredential.recipient_email"
          />
        </v-col>
        <v-col cols="12" sm="6">
          <vs-input
            block
            placeholder="Recipient phone"
            v-model="transaction.updateTransactionCredential.recipient_phone"
          />
        </v-col>
        <v-col cols="12" sm="6">
          <vs-select
            block
            placeholder="Transaction type"
            v-model="transaction.updateTransactionCredential.transaction_type"
          >
            <vs-option label="Product" value="product"> Product </vs-option>
          </vs-select>
        </v-col>
        <v-col cols="12" sm="6">
          <vs-input
            block
            placeholder="Price"
            v-model="transaction.updateTransactionCredential.price"
          />
        </v-col>
        <v-col cols="12" sm="6">
          <vs-input
            block
            placeholder="Quantity"
            v-model="transaction.updateTransactionCredential.quantity"
          />
        </v-col>
        <v-col cols="12" sm="6">
          <vs-select
            block
            placeholder="Role"
            v-model="transaction.updateTransactionCredential.role"
          >
            <vs-option label="Buyer" value="buyer"> Buyer </vs-option>
            <vs-option label="Seller" value="seller"> Seller </vs-option>
          </vs-select>
        </v-col>
        <v-col cols="12" sm="6">
          <vs-input
            block
            type="number"
            placeholder="Duration /*number in days"
            v-model="transaction.updateTransactionCredential.duration"
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
            v-model="transaction.updateTransactionCredential.description"
          ></v-textarea>
        </v-col>
        <v-col cols="12">
          <v-file-input
            solo
            flat
            hide-details
            placeholder="image"
            class="realFileInput"
            background-color="#F4F7F8"
            @change="setUpdateTransactionImage"
          />
        </v-col>
      </v-row>
    </div>

    <template #footer>
      <div class="con-footer">
        <v-spacer />
        <div class="con-footer d-flex justify-end">
          <vs-button
            dark
            transparent
            class="font-weight-bold grey--text text--darken-4"
            @click="transaction.updateTransactionDialog = false"
          >
            Cancel
          </vs-button>
          <vs-button
            color="#6200EA"
            class="font-weight-bold"
            @click="updateTransaction"
            :loading="transaction.updateTransactionLoading"
          >
            Update transaction</vs-button
          >
        </div>
      </div>
    </template>
  </vs-dialog>
</template>

<script>
import { mapActions, mapState } from "vuex"

export default {
  data: () => ({
    max: 180,
    rules: [(v) => v.length <= 180 || "Max 25 characters"],
  }),

  methods: {
    ...mapActions(["setUpdateTransactionImage", "updateTransaction"]),
  },

  computed: {
    ...mapState(["transaction"]),
  },
}
</script>
