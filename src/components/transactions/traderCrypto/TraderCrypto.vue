<template>
  <v-stepper
    :width="width"
    class="mx-auto"
    v-model="traderCrypto.steps"
    vertical
  >
    <!-- EMAIL STEP -->
    <v-stepper-step
      color="deep-purple accent-4"
      :complete="traderCrypto.steps > 1"
      editable
      step="1"
    >
      Email address
    </v-stepper-step>

    <v-stepper-content step="1">
      <Email />
      <v-btn
        @click="totraderCryptoProductPhone"
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

    <!-- PHONE STEP -->
    <v-stepper-step
      color="deep-purple accent-4"
      :complete="traderCrypto.steps > 2"
      editable
      step="2"
    >
      Phone number
    </v-stepper-step>

    <v-stepper-content step="2">
      <Phone />
      <v-btn
        @click="totraderCryptoProductCurrency"
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

    <!-- CURRENCY STEP -->
    <v-stepper-step
      color="deep-purple accent-4"
      :complete="traderCrypto.steps > 3"
      editable
      step="3"
    >
      Trader currency
    </v-stepper-step>

    <v-stepper-content step="3">
      <TraderCurrency />
      <v-btn @click="totraderCryptoProductAgreedAmount" class="mr-4" color="deep-purple accent-4" dark>
        Continue
      </v-btn>
      <v-btn text>
        Cancel
      </v-btn>
    </v-stepper-content>

    <!-- AgreedAmount STEP -->
    <v-stepper-step
      color="deep-purple accent-4"
      :complete="traderCrypto.steps > 4"
      editable
      step="4"
    >
      Agreed amount
    </v-stepper-step>

    <v-stepper-content step="4">
      <AgreedAmount />
      <v-btn @click="totraderCryptoProductPrice" class="mr-4" color="deep-purple accent-4" dark>
        Continue
      </v-btn>
      <v-btn text>
        Cancel
      </v-btn>
    </v-stepper-content>

    <!-- Price STEP -->
    <v-stepper-step
      color="deep-purple accent-4"
      :complete="traderCrypto.steps > 5"
      editable
      step="5"
    >
      Price
    </v-stepper-step>

    <v-stepper-content step="5">
      <Price />
      <v-btn @click="totraderCryptoProductDuration" class="mr-4" color="deep-purple accent-4" dark>
        Continue
      </v-btn>
      <v-btn text>
        Cancel
      </v-btn>
    </v-stepper-content>

    <!-- Duration STEP -->
    <v-stepper-step
      color="deep-purple accent-4"
      :complete="traderCrypto.steps > 6"
      editable
      step="6"
    >
      Transaction duration
    </v-stepper-step>

    <v-stepper-content step="6">
      <Duration />
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
// @ts-nocheck
import { mapState, mapActions } from "vuex";
export default {
  components: {
    Email: () => import("./components/Email.vue"),
    Phone: () => import("./components/Phone.vue"),
    TraderCurrency: () => import("./components/TraderCurrency.vue"),
    AgreedAmount: () => import("./components/AgreedAmount.vue"),
    Price: () => import("./components/Price.vue"),
    Duration: () => import("./components/Duration.vue"),
  },
  methods: {
    ...mapActions([
      "totraderCryptoProductPhone",
      "totraderCryptoProductCurrency",
      "totraderCryptoProductAgreedAmount",
      "totraderCryptoProductPrice",
      "totraderCryptoProductDuration"
    ]),
  },
  computed: {
    ...mapState(["traderCrypto"]),
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
