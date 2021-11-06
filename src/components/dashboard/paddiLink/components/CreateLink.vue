<template>
  <v-dialog v-model="paddiLink.dialog" max-width="400" scrollable>
    <v-card max-height="500">
      <v-card-title class="grey--text text--darken-4">
        Create a Paddi link
        <v-spacer />
        <v-btn @click="paddiLink.dialog = false" icon>
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <v-text-field
          color="deep-purple accent-4"
          label="Product Name/Title"
          full-width
          outlined
          dense
        ></v-text-field>
        <v-text-field
          color="deep-purple accent-4"
          label="Product Price"
          full-width
          outlined
          dense
        ></v-text-field>
        <v-textarea
          color="deep-purple accent-4"
          label="Product Product Description"
          :hint="`Word limit of ${max} words (${max - text.length} left)`"
          :maxlength="max"
          v-model="text"
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
        <v-img class="mx-auto" v-show="url" :src="url"></v-img>
      </v-card-text>
      <v-card-actions>
        <v-btn color="deep-purple accent-4" dark block depressed>
          Done
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState } from "vuex"
export default {
  data: () => ({
    url: null,
    max: 130,
    text: "",
  }),

  computed: {
    ...mapState(["paddiLink"]),
  },

  methods: {
    onFileChange(image) {
      const file = image
      this.url = URL.createObjectURL(file)
    },
  },
}
</script>
