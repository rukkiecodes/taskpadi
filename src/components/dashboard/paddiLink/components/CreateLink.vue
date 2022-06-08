<template>
  <vs-dialog prevent-close not-center blur v-model="paddiLink.dialog" width="500px">
    <template #header>
      <h4 class="not-margin">Create Paddi link</h4>
    </template>

    <div>
      <v-row justify="space-between" align="start">
        <v-col cols="12" sm="6">
          <vs-input block v-model="paddiLink.paddiLinkInputs.title" placeholder="Product title" />
        </v-col>
        <v-col cols="12" sm="6">
          <vs-input block v-model="paddiLink.paddiLinkInputs.price" placeholder="Price" />
        </v-col>
        <v-col cols="12">
          <v-textarea flat solo no-resize full-width hide-details :maxlength="max" class="rounded-lg"
            background-color="#F4F7F8" placeholder="Product Description"
            v-model="paddiLink.paddiLinkInputs.description"></v-textarea>
        </v-col>
        <v-col cols="12" sm="6">
          <vs-select block placeholder="Select" v-model="value">
            <vs-option v-for="(item, i) in items" :key="i" :label="item" :value="item">
              {{ item }}
            </vs-option>
          </vs-select>
        </v-col>
        <v-col cols="12" sm="6">
          <v-file-input class="addImage" style="display: none" @change="onFileChange" background-color="#EFF0F6">
          </v-file-input>
          <vs-input @click="clickOnFileChange" v-model="fileName" readonly block placeholder="Add image" />
        </v-col>
      </v-row>
    </div>

    <template #footer>
      <div class="con-footer">
        <v-spacer />
        <div class="con-footer d-flex justify-end">
          <vs-button color="#7E2DEE" @click="createPaddiLink" class="text-body-2 font-weight-bold text-capitalize">
            Create paddi link
          </vs-button>
        </div>
      </div>
    </template>
  </vs-dialog>
</template>

<script>
// @ts-nocheck
import { mapActions, mapState } from "vuex"
export default {
  data: () => ({
    max: 130,
    value: "",
    fileName: "",
    items: ["Foo", "Bar", "Fizz", "Buzz"],
  }),

  methods: {
    clickOnFileChange () {
      document.querySelector(".addImage input[type='file']").click()
    },

    onFileChange (image) {
      if (image) {
        this.fileName = image.name
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
