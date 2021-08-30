<template>
  <v-stepper
    :width="width"
    class="mx-auto"
    v-model="clientServices.steps"
    vertical
  >
    <!-- EMAIL STEP -->
    <v-stepper-step
      color="deep-purple accent-4"
      :complete="clientServices.steps > 1"
      editable
      step="1"
    >
      Business name
    </v-stepper-step>

    <v-stepper-content step="1">
      <Name />
      <v-btn
        class="mr-4"
        color="deep-purple accent-4"
        dark
        @click="toclientServicesClientsMobileNumber"
      >
        Continue
      </v-btn>
      <v-btn text>
        Cancel
      </v-btn>
    </v-stepper-content>

    <!-- ClientsMobileNumber STEP -->
    <v-stepper-step
      color="deep-purple accent-4"
      :complete="clientServices.steps > 2"
      editable
      step="2"
    >
      Clients mobile number
    </v-stepper-step>

    <v-stepper-content step="2">
      <ClientsMobileNumber />
      <v-btn
        @click="toclientServicesAvailableServicesr"
        class="mr-4"
        color="deep-purple accent-4"
        dark
      >
        Continue
      </v-btn>
      <v-btn text>
        Cancel
      </v-btn>
    </v-stepper-content>

    <!-- AvailableServices STEP -->
    <v-stepper-step
      color="deep-purple accent-4"
      :complete="clientServices.steps > 3"
      editable
      step="3"
    >
      Available services
    </v-stepper-step>

    <v-stepper-content step="3">
      <AvailableServices />
      <v-btn @click="toclientServicesTransactionDuration" class="mr-4" color="deep-purple accent-4" dark>
        Continue
      </v-btn>
      <v-btn text>
        Cancel
      </v-btn>
    </v-stepper-content>

    <!-- TransactionDuration STEP -->
    <v-stepper-step
      color="deep-purple accent-4"
      :complete="clientServices.steps > 4"
      editable
      step="4"
    >
      Transaction duration
    </v-stepper-step>

    <v-stepper-content step="4">
      <TransactionDuration />
      <v-btn @click="toclientServicesAgreedAmount" class="mr-4" color="deep-purple accent-4" dark>
        Continue
      </v-btn>
      <v-btn text>
        Cancel
      </v-btn>
    </v-stepper-content>

    <!-- AgreedAmount STEP -->
    <v-stepper-step
      color="deep-purple accent-4"
      :complete="clientServices.steps > 5"
      editable
      step="5"
    >
      Agreed amount
    </v-stepper-step>

    <v-stepper-content step="5">
      <AgreedAmount />
      <v-btn @click="toclientServicesWhenToPay" class="mr-4" color="deep-purple accent-4" dark>
        Continue
      </v-btn>
      <v-btn text>
        Cancel
      </v-btn>
    </v-stepper-content>

    <!-- WhenToPay STEP -->
    <v-stepper-step
      color="deep-purple accent-4"
      :complete="clientServices.steps > 6"
      editable
      step="6"
    >
      When to pay
    </v-stepper-step>

    <v-stepper-content step="6">
      <WhenToPay />
      <v-btn @click="toclientServicesTermsOfContract" class="mr-4" color="deep-purple accent-4" dark>
        Continue
      </v-btn>
      <v-btn text>
        Cancel
      </v-btn>
    </v-stepper-content>

    <!-- TermsOfContract STEP -->
    <v-stepper-step
      color="deep-purple accent-4"
      :complete="clientServices.steps > 7"
      editable
      step="7"
    >
      Terms of contract
    </v-stepper-step>

    <v-stepper-content step="7">
      <TermsOfContract />
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
    Name: () => import("./components/Name.vue"),
    ClientsMobileNumber: () => import("./components/ClientsMobileNumber.vue"),
    AvailableServices: () => import("./components/AvailableServices.vue"),
    TransactionDuration: () => import("./components/TransactionDuration.vue"),
    AgreedAmount: () => import("./components/AgreedAmount.vue"),
    WhenToPay: () => import("./components/WhenToPay.vue"),
    TermsOfContract: () => import("./components/TermsOfContract.vue"),
  },
  methods: {
    ...mapActions([
      "toclientServicesClientsMobileNumber",
      "toclientServicesAvailableServicesr",
      "toclientServicesTransactionDuration",
      "toclientServicesAgreedAmount",
      "toclientServicesWhenToPay",
      "toclientServicesTermsOfContract"
    ]),
  },
  computed: {
    ...mapState(["clientServices"]),
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
