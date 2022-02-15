<template>
  <div class="center">
    <vs-button
      color="#6200EA"
      style="font-weight: bold"
      @click="product.createProductDialog = true"
    >
      Add new product</vs-button
    >

    <vs-dialog
      blur
      not-center
      width="457px"
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
              v-model="product.createProductCredential.description"
            ></v-textarea>
          </v-col>
          <v-col cols="12" sm="6">
            <vs-input
              block
              placeholder="Price"
              v-model="product.createProductCredential.price"
            >
            </vs-input>
          </v-col>
          <v-col cols="12" sm="6">
            <vs-input
              block
              placeholder="Quantity"
              v-model="product.createProductCredential.quantity"
            >
            </vs-input>
          </v-col>
          <v-col cols="12">
            <v-file-input
              @change="setProductImage"
              class="realFileInput"
              style="display: none"
            ></v-file-input>
            <vs-input
              block
              @click="clickProductInput"
              placeholder="Image"
              v-model="product.imageName"
            >
            </vs-input>
          </v-col>
        </v-row>
      </div>

      <template #footer>
        <v-spacer />
        <div class="con-footer d-flex justify-end">
          <vs-button @click="product.createProductDialog = false" transparent>
            Cancel
          </vs-button>
          <vs-button
            @click="createProduct"
            :loading="product.createProductLoading"
            color="#6200EA"
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
