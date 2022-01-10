<template>
  <v-stepper
    :width="width"
    class="mx-auto"
    v-model="custumerCrypto.steps"
    vertical
  >
    <!-- EMAIL STEP -->
    <v-stepper-step
      color="deep-purple accent-4"
      :complete="custumerCrypto.steps > 1"
      editable
      step="1"
    >
      Email address
    </v-stepper-step>

    <v-stepper-content step="1">
      <Email />
      <v-btn
        @click="tocustumerCryptoProductPhone"
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
      :complete="custumerCrypto.steps > 2"
      editable
      step="2"
    >
      Phone number
    </v-stepper-step>

    <v-stepper-content step="2">
      <Phone />
      <v-btn
        @click="tocustumerCryptoProductCurrency"
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
      :complete="custumerCrypto.steps > 3"
      editable
      step="3"
    >
      Trader currency
    </v-stepper-step>

    <v-stepper-content step="3">
      <TraderCurrency />
      <v-btn @click="tocustumerCryptoProductAgreedAmount" class="mr-4" color="deep-purple accent-4" dark>
        Continue
      </v-btn>
      <v-btn text>
        Cancel
      </v-btn>
    </v-stepper-content>

    <!-- AgreedAmount STEP -->
    <v-stepper-step
      color="deep-purple accent-4"
      :complete="custumerCrypto.steps > 4"
      editable
      step="4"
    >
      Agreed amount
    </v-stepper-step>

    <v-stepper-content step="4">
      <AgreedAmount />
      <v-btn @click="tocustumerCryptoProductPrice" class="mr-4" color="deep-purple accent-4" dark>
        Continue
      </v-btn>
      <v-btn text>
        Cancel
      </v-btn>
    </v-stepper-content>

    <!-- Price STEP -->
    <v-stepper-step
      color="deep-purple accent-4"
      :complete="custumerCrypto.steps > 5"
      editable
      step="5"
    >
      Price
    </v-stepper-step>

    <v-stepper-content step="5">
      <Price />
      <v-btn @click="tocustumerCryptoProductDuration" class="mr-4" color="deep-purple accent-4" dark>
        Continue
      </v-btn>
      <v-btn text>
        Cancel
      </v-btn>
    </v-stepper-content>

    <!-- Duration STEP -->
    <v-stepper-step
      color="deep-purple accent-4"
      :complete="custumerCrypto.steps > 6"
      editable
      step="6"
    >
      Transaction duration
    </v-stepper-step>

    <v-stepper-content step="6">
      <Duration />
      <v-btn @click="tocustumerCryptoTradersWalletAddress" class="mr-4" color="deep-purple accent-4" dark>
        Continue
      </v-btn>
      <v-btn text>
        Cancel
      </v-btn>
    </v-stepper-content>

    <!-- TradersWalletAddress STEP -->
    <v-stepper-step
      color="deep-purple accent-4"
      :complete="custumerCrypto.steps > 7"
      editable
      step="7"
    >
      Traders wallet address
    </v-stepper-step>

    <v-stepper-content step="7">
      <TradersWalletAddress />
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
    TradersWalletAddress: () => import("./components/TradersWalletAddress.vue"),
  },
  methods: {
    ...mapActions([
      "tocustumerCryptoProductPhone",
      "tocustumerCryptoProductCurrency",
      "tocustumerCryptoProductAgreedAmount",
      "tocustumerCryptoProductPrice",
      "tocustumerCryptoProductDuration",
      "tocustumerCryptoTradersWalletAddress"
    ]),
  },
  computed: {
    ...mapState(["custumerCrypto"]),
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
