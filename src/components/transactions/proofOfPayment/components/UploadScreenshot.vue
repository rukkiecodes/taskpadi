<template>
  <v-card flat>
    <v-card-text class="mx-0 px-0">
      <v-file-input
        dense
        outlined
        clearable
        full-width
        truncate-length="15"
        label="Upload screenshot"
        color="deep-purple accent-4"
        prepend-icon="mdi-image-outline"
        @change="setProofOfPaymentScreenshot"
      ></v-file-input>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
export default {
  methods: {
    setProofOfPaymentScreenshot(e) {
      this.proofOfPayment.ProofOfPaymentInputs.screenshot.push(e)
    },
  },
  computed: {
    ...mapState(["proofOfPayment"]),
  },
};
</script>
