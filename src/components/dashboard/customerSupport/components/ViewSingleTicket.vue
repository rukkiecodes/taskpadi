<template>
  <vs-dialog
    v-model="customerSupport.viewSingleTicketDialog"
    :not-center="true"
    width="400px"
  >
    <template #header>
      <h4 class="not-margin">Response</h4>
      <span class="not-margin text-caption"
        >{{ customerSupport.viewTicket.name }} (support)</span
      >
    </template>

    <v-row justify="space-between" align="start">
      <v-col cols="12">
        <vs-input
          block
          readonly
          placeholder="Subject"
          v-model="customerSupport.viewTicket.subject"
        />
      </v-col>
      <v-col cols="12" class="py-0">
        <v-divider />
      </v-col>
      <v-col cols="12">
        <p
          v-text="customerSupport.viewTicket.description"
          class="text-body-2 grey--text text--darken-2 font-weight-light"
        />
      </v-col>
      <v-col cols="12">
        <v-file-input
          class="addImage"
          @change="setImage"
          style="display: none"
        ></v-file-input>
        <vs-input
          block
          readonly
          icon-after
          placeholder="Reply"
          @click="clickOnFileChange"
          v-model="customerSupport.fileName"
        >
          <template #icon>
            <i class="lar la-image"></i>
          </template>
        </vs-input>
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
        Reply
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
