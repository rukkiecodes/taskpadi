<template>
  <v-stepper
    :width="width"
    class="mx-auto"
    v-model="proofOfPayment.steps"
    vertical
  >
    <!-- Upload screenshot STEP -->
    <v-stepper-step
      color="deep-purple accent-4"
      :complete="proofOfPayment.steps > 1"
      editable
      step="1"
    >
      Upload screenshot
    </v-stepper-step>

    <v-stepper-content step="1">
      <UploadScreenshot />
      <v-btn @click="toproofOfPaymentOtherProof" class="mr-4" color="deep-purple accent-4" dark>
        Continue
      </v-btn>
      <v-btn text>
        Cancel
      </v-btn>
    </v-stepper-content>

    <!-- OtherProof STEP -->
    <v-stepper-step
      color="deep-purple accent-4"
      :complete="proofOfPayment.steps > 2"
      editable
      step="2"
    >
      Other proof of payment
    </v-stepper-step>

    <v-stepper-content step="2">
      <OtherProof />
      <v-btn class="mr-4" color="deep-purple accent-4" dark>
        Continue
      </v-btn>
      <v-btn text>
        Cancel
      </v-btn>
    </v-stepper-content>
  </v-stepper>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  components: {
    UploadScreenshot: () => import("./components/UploadScreenshot.vue"),
    OtherProof: () => import("./components/OtherProof.vue"),
  },
  methods: {
    ...mapActions(["toproofOfPaymentOtherProof"]),
  },
  computed: {
    ...mapState(["proofOfPayment"]),
    width() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "92%";
        case "sm":
          return "60%";
        case "md":
          return "50%";
        case "lg":
          return 500;
        case "xl":
          return 800;
      }
    },
  },
};
</script>
