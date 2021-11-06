<template>
  <v-dialog v-model="paddiLink.dialog" max-width="400" scrollable>
    <v-card max-height="500">
      <v-card-title>
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
        <v-text-field
          color="deep-purple accent-4"
          label="Product Product Description"
          hint="(with word limit of 30words)"
          full-width
          outlined
          dense
        ></v-text-field>
        <v-file-input
          full-width
          outlined
          dense
          placeholder="upload a photo"
          label="upload a photo"
          @change="onFileChange"
        ></v-file-input>
        <v-img
          class="mx-auto"
          v-show="url"
          :src="url"
        ></v-img>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState } from "vuex"
export default {
  data: () => ({
    url: null
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
