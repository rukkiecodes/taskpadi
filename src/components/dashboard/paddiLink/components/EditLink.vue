<template>
  <vs-dialog v-model="paddiLink.editDialog" width="400px">
    <template #header>
      <h4 class="not-margin">Edit Paddi link</h4>
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
              :items="editItems"
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

    <template #footer>
      <vs-button
        block
        color="#7E2DEE"
        @click="editLink"
        class="text-body-2 font-weight-bold text-capitalize"
      >
        Edit paddi link
      </vs-button>
    </template>
  </vs-dialog>
</template>

<script>
import { mapActions, mapState } from "vuex"
export default {
  data: () => ({
    max: 130,
    editItems: ["Foo", "Bar", "Fizz", "Buzz"],
  }),

  methods: {
    onFileChange(image) {
      if (image)
        this.paddiLink.paddiLinkInputs.image = URL.createObjectURL(image)
    },
    ...mapActions(["editLink"]),
  },

  computed: {
    ...mapState(["paddiLink"]),
  },
}
</script>
