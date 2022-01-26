<template>
  <vs-dialog v-model="customerSupport.customerDialog" width="400px">
    <template #header>
      <h4 class="not-margin">Create support ticket</h4>
    </template>

    <v-card flat>
      <v-card-text>
        <v-row justify="space-between" align="start">
          <v-col cols="12" sm="6">
            <vs-input
              block
              v-model="customerSupport.createTicketCridentials.subject"
              placeholder="Subject"
            />
          </v-col>
          <v-col cols="12" sm="6">
            <vs-input
              block
              v-model="customerSupport.createTicketCridentials.department"
              placeholder="Department"
            />
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
              background-color="#F4F7F8"
              placeholder="Description"
              v-model="customerSupport.createTicketCridentials.description"
            ></v-textarea>
          </v-col>
          <v-col cols="12" sm="6">
            <v-file-input
              class="addImage"
              style="display: none"
              @change="onFileChange"
              background-color="#EFF0F6"
            ></v-file-input>
            <vs-input
              @click="clickOnFileChange"
              v-model="fileName"
              readonly
              block
              placeholder="Add image **/Optional"
            />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <template #footer>
      <vs-button
        block
        color="#7E2DEE"
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
    max: 130,
    value: "",
    fileName: "",
    showImageDialoge: false,
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

    ...mapActions([""]),
  },

  computed: {
    ...mapState(["customerSupport"]),
  },
}
</script>

<style scoped>
