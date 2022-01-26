<template>
  <v-sheet
    class="d-flex flex-column justify-center align-center text-center"
    min-height="85vh"
    color="transparent"
  >
    <v-card
      class="d-flex flex-column justify-center align-center"
      color="transparent"
      flat
    >
      <v-card-text>
        You have no Support ticket yet.<br />Click on the button bellow to
        create a Support ticket in seconds.
      </v-card-text>
    </v-card>
    <vs-button
      color="#6200EA"
      @click="customerSupport.customerDialog = true"
      class="mt-4 text-body-2 text-capitalize font-weight-bold"
      >Create Support ticket</vs-button
    >
  </v-sheet>
</template>

<script>
import { mapState } from "vuex"
export default {
  computed: {
    ...mapState(["customerSupport"]),
  },
}
</script>
