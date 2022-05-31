<template>
  <div>
    <div class="d-flex">
      <vs-button
        icon
        flat
        active
        color="#6200EA"
        @click="$router.go(-1)"
        v-show="$route.params._id"
      >
        <i class="las la-arrow-left"></i>
      </vs-button>
      <vs-button
        flat
        active
        color="#6200EA"
        style="font-weight: bold"
        v-show="!$route.params._id"
        @click="transaction.createTransactionDialog = true"
      >
        Create transaction</vs-button
      >
    </div>

    <vs-dialog
      scroll
      not-center
      width="500px"
      prevent-close
      overflow-hidden
      v-model="transaction.createTransactionDialog"
    >
      <template #header>
        <h4 class="not-margin">Create transaction</h4>
      </template>

      <div class="con-content">
        <v-row justify="space-between" align="start">
          <v-col cols="12" sm="6">
            <vs-input
              block
              placeholder="Recipient name"
              v-model="transaction.createTransactionCredential.recipient_name"
            />
          </v-col>
          <v-col cols="12" sm="6">
            <vs-input
              block
              placeholder="Recipient email"
              v-model="transaction.createTransactionCredential.recipient_email"
            />
          </v-col>
          <v-col cols="12" sm="6">
            <vs-input
              block
              placeholder="Recipient phone"
              v-model="transaction.createTransactionCredential.recipient_phone"
            />
          </v-col>
          <v-col cols="12" sm="6">
            <vs-input
              block
              placeholder="Product name"
              v-model="transaction.createTransactionCredential.product_name"
            />
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
            />
          </v-col>
          <v-col cols="12" sm="6">
            <vs-input
              block
              placeholder="Quantity"
              v-model="transaction.createTransactionCredential.quantity"
            />
          </v-col>
          <v-col cols="12" sm="6">
            <vs-select
              block
              placeholder="Role"
              v-model="transaction.createTransactionCredential.role"
            >
              <vs-option label="Buyer" value="buyer"> Buyer </vs-option>
              <vs-option label="Seller" value="seller"> Seller </vs-option>
            </vs-select>
          </v-col>
          <v-col cols="12" sm="6">
            <vs-input
              block
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
              class="rounded-xl"
              placeholder="Product Description"
              v-model="transaction.createTransactionCredential.description"
            />
          </v-col>
          <v-col cols="12">
            <v-file-input
              solo
              flat
              dense
              hide-details
              placeholder="image"
              class="realFileInput rounded-lg"
              background-color="#F4F7F8"
              @change="setTransactionImage"
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
              @click="transaction.createTransactionDialog = false"
            >
              Cancel
            </vs-button>
            <vs-button
              color="#6200EA"
              class="font-weight-bold"
              @click="createTransaction"
              :loading="transaction.createTransactionLoading"
            >
              Create transaction</vs-button
            >
          </div>
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
  },

  computed: {
    ...mapState(["transaction"]),
  },
}
</script>
