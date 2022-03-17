<template>
  <vs-dialog
    width="400px"
    prevent-close
    v-model="customerSupport.customerDialog"
  >
    <template #header>
      <h4 class="not-margin">Create support ticket</h4>
    </template>

    <v-row justify="space-between" align="start">
      <v-col cols="12" sm="6">
        <vs-input
          block
          placeholder="Subject"
          v-model="customerSupport.createTicketCredential.subject"
        />
      </v-col>
      <v-col cols="12" sm="6">
        <vs-input
          block
          placeholder="Department"
          v-model="customerSupport.createTicketCredential.department"
        />
      </v-col>
      <v-col cols="12">
        <v-textarea
          flat
          solo
          counter
          no-resize
          full-width
          :rules="rules"
          :maxlength="max"
          class="rounded-xl"
          placeholder="Description"
          background-color="#F4F7F8"
          v-model="customerSupport.createTicketCredential.description"
        ></v-textarea>
      </v-col>
      <v-col cols="12">
        <v-file-input
          class="addImage"
          @change="setImage"
          style="display: none"
          background-color="#EFF0F6"
        ></v-file-input>
        <vs-input
          block
          readonly
          @click="clickOnFileChange"
          v-model="customerSupport.fileName"
          placeholder="Add image"
        />
      </v-col>
    </v-row>

    <template #footer>
      <vs-button
        block
        color="#7E2DEE"
        @click="createTicket"
        :loading="customerSupport.createLoading"
        class="text-body-2 font-weight-bold text-capitalize"
      >
        Create support ticket
      </vs-button>
    </template>
  </vs-dialog>
</template>

<script>
// @ts-nocheck
import { mapActions, mapState } from "vuex"
export default {
  data: () => ({
    max: 191,
    value: "",
    fileName: "",
    showImageDialoge: false,
    rules: [(v) => v.length <= 255 || "Max 25 characters"],
  }),

  methods: {
    clickOnFileChange() {
      document.querySelector(".addImage input[type='file']").click()
    },

    onFileChange(image) {
      if (image) {
        this.showImageDialoge = true
        this.fileName = image.name
      }
    },

    ...mapActions(["createTicket", "setImage"]),
  },

  computed: {
    ...mapState(["customerSupport"]),
  },
}
</script>
