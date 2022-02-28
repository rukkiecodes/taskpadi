<template>
  <vs-dialog
    blur
    scroll
    not-center
    width="457px"
    prevent-close
    overflow-hidden
    class="updateTransaction"
    v-model="transaction.updateTransactionDialog"
  >
    <template #header>
      <h4 class="not-margin">Update transaction</h4>
    </template>

    <div class="con-form">
      <v-row id="overRow" justify="space-between" align="start">
        <v-col cols="12" sm="6">
          <vs-input
            block
            placeholder="Recipient name"
            v-model="transaction.updateTransactionCredential.recipient_name"
          >
          </vs-input>
        </v-col>
        <v-col cols="12" sm="6">
          <vs-input
            block
            placeholder="Recipient email"
            v-model="transaction.updateTransactionCredential.recipient_email"
          >
          </vs-input>
        </v-col>
        <v-col cols="12" sm="6">
          <vs-input
            block
            placeholder="Recipient phone"
            v-model="transaction.updateTransactionCredential.recipient_phone"
          >
          </vs-input>
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
          >
          </vs-input>
        </v-col>
        <v-col cols="12" sm="6">
          <vs-input
            block
            placeholder="Quantity"
            v-model="transaction.updateTransactionCredential.quantity"
          >
          </vs-input>
        </v-col>
        <v-col cols="12" sm="6">
          <vs-select
            block
            placeholder="Role"
            v-model="transaction.updateTransactionCredential.role"
          >
            <vs-option label="Seller" value="seller"> Seller </vs-option>
            <vs-option label="Buyer" value="buyer"> Buyer </vs-option>
          </vs-select>
        </v-col>
        <v-col cols="12" sm="6">
          <vs-input
            block
            type="number"
            label-placeholder="Duration /*number in days"
            v-model="transaction.updateTransactionCredential.duration"
          >
          </vs-input>
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
            class="rounded-lg"
            background-color="#F4F7F8"
            placeholder="Product Description"
            v-model="transaction.updateTransactionCredential.description"
          ></v-textarea>
        </v-col>
        <v-col cols="12">
          <v-file-input
            @change="setUpdateTransactionImage"
            class="realFileInput"
            style="display: none"
          ></v-file-input>
          <vs-input
            block
            @click="clickOnInput"
            placeholder="Image"
            v-model="transaction.imageName"
          >
          </vs-input>
        </v-col>
      </v-row>
    </div>

    <template #footer>
      <v-spacer />
      <div class="con-footer d-flex justify-end">
        <vs-button
          transparent
          @click="transaction.updateTransactionDialog = false"
        >
          Cancel
        </vs-button>
        <vs-button
          @click="updateTransaction"
          :loading="transaction.updateTransactionLoading"
          color="#6200EA"
        >
          Update transaction</vs-button
        >
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

    clickOnInput() {
      document.querySelector(".realFileInput [type='file']").click()
    },
  },

  computed: {
    ...mapState(["transaction"]),
  },
}
</script>
