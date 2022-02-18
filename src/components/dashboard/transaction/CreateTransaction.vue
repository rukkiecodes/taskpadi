<template>
  <div class="center">
    <vs-button
      color="#6200EA"
      style="font-weight: bold"
      @click="transaction.createTransactionDialog = true"
    >
      Create transaction</vs-button
    >

    <vs-dialog
      blur
      scroll
      not-center
      width="457px"
      prevent-close
      overflow-hidden
      v-model="transaction.createTransactionDialog"
    >
      <template #header>
        <h4 class="not-margin">Create transaction</h4>
      </template>

      <div class="con-form">
        <v-row justify="space-between" align="start">
          <v-col cols="12" sm="6">
            <vs-input
              block
              placeholder="Recipient name"
              v-model="transaction.createTransactionCredential.recipient_name"
            >
            </vs-input>
          </v-col>
          <v-col cols="12" sm="6">
            <vs-input
              block
              placeholder="Recipient email"
              v-model="transaction.createTransactionCredential.recipient_email"
            >
            </vs-input>
          </v-col>
          <v-col cols="12" sm="6">
            <vs-input
              block
              placeholder="Recipient phone"
              v-model="transaction.createTransactionCredential.recipient_phone"
            >
            </vs-input>
          </v-col>
          <v-col cols="12" sm="6">
            <vs-select
              block
              placeholder="Transaction type"
              v-model="transaction.createTransactionCredential.transaction_type"
            >
              <vs-option label="Product" value="product"> Product </vs-option>
            </vs-select>
          </v-col>
          <v-col cols="12" sm="6">
            <vs-input
              block
              placeholder="Price"
              v-model="transaction.createTransactionCredential.price"
            >
            </vs-input>
          </v-col>
          <v-col cols="12" sm="6">
            <vs-input
              block
              placeholder="Quantity"
              v-model="transaction.createTransactionCredential.quantity"
            >
            </vs-input>
          </v-col>
          <v-col cols="12" sm="6">
            <vs-select
              block
              placeholder="Role"
              v-model="transaction.createTransactionCredential.role"
            >
              <vs-option label="Seller" value="seller"> Seller </vs-option>
              <vs-option label="Buyer" value="buyer"> Buyer </vs-option>
            </vs-select>
          </v-col>
          <v-col cols="12" sm="6">
            <vs-input
              block
              type="number"
              placeholder="Duration /*number in days"
              v-model="transaction.createTransactionCredential.duration"
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
              v-model="transaction.createTransactionCredential.description"
            ></v-textarea>
          </v-col>
          <v-col cols="12">
            <v-file-input
              class="realFileInput"
              style="display: none"
              @change="setTransactionImage"
            ></v-file-input>
            <vs-input
              block
              placeholder="Image"
              @click="clickOnInput"
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
            @click="transaction.createTransactionDialog = false"
          >
            Cancel
          </vs-button>
          <vs-button
            color="#6200EA"
            @click="createTransaction"
            :loading="transaction.createTransactionLoading"
          >
            Create transaction</vs-button
          >
        </div>
      </template>
    </vs-dialog>
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

    clickOnInput() {
      document.querySelector(".realFileInput [type='file']").click()
    },
  },

  computed: {
    ...mapState(["transaction"]),
  },
}
</script>
