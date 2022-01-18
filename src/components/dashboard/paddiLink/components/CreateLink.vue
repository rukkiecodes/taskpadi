<template>
  <vs-dialog v-model="paddiLink.dialog" width="400px">
    <template #header>
      <h4 class="not-margin">Create Paddi link</h4>
    </template>

    <v-card flat>
      <v-card-text>
        <v-row justify="space-between" align="start">
          <v-col cols="12" sm="6">
            <v-text-field
              flat
              solo
              hide-details
              class="rounded-lg"
              label="Product title"
              background-color="#EFF0F6"
              v-model="paddiLink.paddiLinkInputs.title"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              flat
              solo
              hide-details
              label="Price"
              class="rounded-lg"
              background-color="#EFF0F6"
              v-model="paddiLink.paddiLinkInputs.price"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-textarea
              flat
              solo
              no-resize
              full-width
              hide-details
              :maxlength="max"
              class="rounded-lg"
              background-color="#EFF0F6"
              label="Product Product Description"
              v-model="paddiLink.paddiLinkInputs.description"
            ></v-textarea>
          </v-col>
          <v-col cols="12" sm="6">
            <v-select
              flat
              solo
              full-width
              hide-details
              :items="items"
              class="rounded-lg"
              label="Product category"
              background-color="#EFF0F6"
            ></v-select>
          </v-col>
          <v-col cols="12" sm="6">
            <v-file-input
              flat
              solo
              clearable
              full-width
              hide-details
              label="Add image"
              class="rounded-lg"
              truncate-length="8"
              @change="onFileChange"
              background-color="#EFF0F6"
            ></v-file-input>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <vs-dialog auto-width not-padding v-model="showImageDialoge">
      <div class="con-image">
        <img :src="paddiLink.paddiLinkInputs.image" alt="" />
      </div>
    </vs-dialog>

    <template #footer>
      <vs-button
        block
        color="#7E2DEE"
        @click="createPaddiLink"
        class="text-body-2 font-weight-bold text-capitalize"
      >
        Create paddi link
      </vs-button>
    </template>
  </vs-dialog>
</template>

<script>
// @ts-nocheck
import { mapActions, mapState } from "vuex"
export default {
  data: () => ({
    max: 130,
    showImageDialoge: false,
    items: ["Foo", "Bar", "Fizz", "Buzz"],
  }),

  methods: {
    onFileChange(image) {
      if (image) {
        this.showImageDialoge = true
        this.paddiLink.paddiLinkInputs.image = URL.createObjectURL(image)
      }
    },

    ...mapActions(["createPaddiLink"]),
  },

  computed: {
    ...mapState(["paddiLink"]),
  },
}
</script>

<style scoped>
.con-image {
  border-radius: inherit;
}

.con-image img {
  display: block;
  position: relative;
  border-radius: inherit;
  max-width: 350px;
}
</style>
