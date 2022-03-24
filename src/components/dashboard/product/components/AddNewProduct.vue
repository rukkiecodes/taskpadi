<template>
  <div class="center">
    <vs-button
      flat
      active
      color="#6200EA"
      @click="product.createProductDialog = true"
    >
      Add new product</vs-button
    >

    <vs-dialog
      not-center
      width="460px"
      prevent-close
      v-model="product.createProductDialog"
    >
      <template #header>
        <h4 class="not-margin">Create transaction</h4>
      </template>

      <div class="con-form">
        <v-row justify="space-between" align="start">
          <v-col cols="12">
            <vs-input
              block
              placeholder="Product name"
              v-model="product.createProductCredential.name"
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
              class="rounded-lg"
              background-color="#F4F7F8"
              placeholder="Product Description"
              v-model="product.createProductCredential.description"
            />
          </v-col>
          <v-col cols="12" sm="6">
            <vs-input
              block
              placeholder="Price"
              v-model="product.createProductCredential.price"
            />
          </v-col>
          <v-col cols="12" sm="6">
            <vs-input
              block
              placeholder="Quantity"
              v-model="product.createProductCredential.quantity"
            />
          </v-col>
          <v-col cols="12">
            <v-file-input
              solo
              flat
              placeholder="Image"
              class="realFileInput"
              @change="setProductImage"
              background-color="#F4F7F8"
            />
          </v-col>
        </v-row>
      </div>

      <template #footer>
        <v-spacer />
        <div class="con-footer d-flex justify-end">
          <vs-button @click="product.createProductDialog = false" transparent dark>
            Cancel
          </vs-button>
          <vs-button
            transparent
            color="#6200EA"
            @click="createProduct"
            :loading="product.createProductLoading"
          >
            Add new product</vs-button
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
    ...mapActions(["setProductImage", "createProduct"]),

    clickProductInput() {
      document.querySelector(".realFileInput [type='file']").click()
    },
  },

  computed: {
    ...mapState(["product"]),
  },
}
</script>
