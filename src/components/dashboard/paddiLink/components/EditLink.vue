<template>
  <v-dialog v-model="paddiLink.editDialog" max-width="400" scrollable>
    <v-card max-height="500">
      <v-card-title class="grey--text text--darken-4">
        Edit Paddi link
        <v-spacer />
        <v-btn @click="paddiLink.editDialog = false" icon>
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <v-text-field
          color="deep-purple accent-4"
          label="Product Name/Title"
          v-model="paddiLink.paddiLinkInputs.title"
          full-width
          outlined
          dense
        ></v-text-field>
        <v-text-field
          color="deep-purple accent-4"
          v-model="paddiLink.paddiLinkInputs.price"
          label="Product Price"
          full-width
          outlined
          dense
        ></v-text-field>
        <v-textarea
          color="deep-purple accent-4"
          label="Product Product Description"
          :hint="
            `Word limit of ${max} words (${max -
              paddiLink.paddiLinkInputs.description.length} left)`
          "
          v-model="paddiLink.paddiLinkInputs.description"
          :maxlength="max"
          full-width
          outlined
          counter
        ></v-textarea>
        <v-file-input
          full-width
          outlined
          dense
          clearable
          placeholder="upload a photo"
          label="upload a photo"
          @change="onFileChange"
        ></v-file-input>
        <v-img
          class="mx-auto"
          v-show="paddiLink.paddiLinkInputs.image"
          :src="paddiLink.paddiLinkInputs.image"
        ></v-img>
      </v-card-text>
      <v-card-actions>
        <v-btn
          @click="editLink"
          color="deep-purple accent-4"
          dark
          block
          depressed
        >
          Done
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions, mapState } from "vuex"
export default {
  data: () => ({
    max: 130,
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
