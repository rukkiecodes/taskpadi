<template>
  <vs-dialog
    not-center
    width="400px"
    v-model="customerSupport.confirmDeleteDialog"
  >
    <template #header>
      <h4 class="not-margin">Confirm delete</h4>
    </template>

    <div class="con-content">
      <p>Are you sure you want to delete this ticket?</p>
    </div>

    <template #footer>
      <div
        class="d-flex justify-end"
        v-for="(ticket, i) in selectedTicketToDelete"
        :key="i"
      >
        <vs-button shadow @click="active = false"> Cancel </vs-button>
        <vs-button
          danger
          transparent
          @click="confirmDelete(ticket)"
          :loading="customerSupport.deleteLoading"
        >
          Delete
        </vs-button>
      </div>
    </template>
  </vs-dialog>
</template>

<script>
// @ts-nocheck
import { mapActions, mapGetters, mapState } from "vuex"
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

    ...mapActions(["createTicket", "setImage", "confirmDelete"]),
  },

  computed: {
    ...mapState(["customerSupport"]),
    ...mapGetters(["selectedTicketToDelete"]),
  },
}
</script>
