<template>
  <vs-dialog scroll not-center blur width="460px" prevent-close overflow-hidden class="editProduct"
    v-model="product.editProductDialog">
    <template #header>
      <h4 class="not-margin">Edit product</h4>
    </template>

    <div class="con-form">
      <v-row id="overRow" justify="space-between" align="start">
        <v-col cols="12">
          <vs-input block placeholder="Product name" v-model="product.editProductCredential.name">
          </vs-input>
        </v-col>
        <v-col cols="12" sm="6">
          <vs-input block placeholder="Product quantity" v-model="product.editProductCredential.quantity">
          </vs-input>
        </v-col>
        <v-col cols="12" sm="6">
          <vs-input block placeholder="Product price" v-model="product.editProductCredential.price">
          </vs-input>
        </v-col>
        <v-col cols="12">
          <v-textarea flat solo counter no-resize full-width height="100" :rules="rules" :maxlength="max"
            class="rounded-lg" background-color="#F4F7F8" placeholder="Product Description"
            v-model="product.editProductCredential.description"></v-textarea>
        </v-col>
        <v-col cols="12">
          <v-file-input solo flat dense placeholder="Image" class="realFileInput" background-color="#F4F7F8"
            @change="setEditProductImage" />
        </v-col>
      </v-row>
    </div>

    <template #footer>
      <v-spacer />
      <div class="con-footer d-flex justify-end">
        <vs-button transparent @click="product.editProductDialog = false">
          Cancel
        </vs-button>
        <vs-button color="#6200EA" transparent @click="editProduct" :loading="product.editProductLoading">
          Edit product</vs-button>
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
    ...mapActions(["setEditProductImage", "editProduct"]),

    clickOnInput() {
      document.querySelector(".realFileInput [type='file']").click()
    },
  },

  computed: {
    ...mapState(["product"]),
  },
}
</script>
