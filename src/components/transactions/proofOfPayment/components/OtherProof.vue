<template>
  <v-card flat>
    <v-card-text class="mx-0 px-0">
      <v-file-input
        dense
        outlined
        clearable
        full-width
        truncate-length="15"
        color="deep-purple accent-4"
        label="Other proof of payment"
        prepend-icon="mdi-image-outline"
        @change="setProofOfPaymentOtherProof"
      ></v-file-input>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
export default {
  methods: {
    setProofOfPaymentOtherProof(e) {
      this.proofOfPayment.ProofOfPaymentInputs.otherProof.push(e)
    },
  },
  computed: {
    ...mapState(["proofOfPayment"]),
  },
};
</script>
