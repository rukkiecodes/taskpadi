<template>
  <v-stepper
    :width="width"
    class="mx-auto"
    v-model="goodAndProductBuyer.steps"
    vertical
  >
    <!-- EMAIL STEP -->
    <v-stepper-step
      color="deep-purple accent-4"
      :complete="goodAndProductBuyer.steps > 1"
      step="1"
    >
      Email address
    </v-stepper-step>

    <v-stepper-content step="1">
      <Email />
      <v-btn
        class="mr-4"
        color="deep-purple accent-4"
        dark
        @click="toGoodAndProductBuyerPhone"
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
      :complete="goodAndProductBuyer.steps > 2"
      step="2"
    >
      Phone number
    </v-stepper-step>

    <v-stepper-content step="2">
      <Phone />
      <v-btn
        class="mr-4"
        color="deep-purple accent-4"
        dark
        @click="toGoodAndProductBuyerName"
      >
        Continue
      </v-btn>
      <v-btn text>
        Cancel
      </v-btn>
    </v-stepper-content>

    <!-- PRODUCT NAME STEP -->
    <v-stepper-step
      color="deep-purple accent-4"
      :complete="goodAndProductBuyer.steps > 3"
      step="3"
    >
      Product name
    </v-stepper-step>

    <v-stepper-content step="3">
      <Name />
      <v-btn
        @click="toGoodAndProductBuyerPrice"
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

    <!-- PRODUCT PRICE STEP -->
    <v-stepper-step
      color="deep-purple accent-4"
      :complete="goodAndProductBuyer.steps > 4"
      step="4"
    >
      Product price
    </v-stepper-step>

    <v-stepper-content step="4">
      <Price />
      <v-btn
        @click="toGoodAndProductBuyerDescription"
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

    <!-- PRODUCT DESCRIPTION STEP -->
    <v-stepper-step
      color="deep-purple accent-4"
      :complete="goodAndProductBuyer.steps > 5"
      step="5"
    >
      Product Description
    </v-stepper-step>

    <v-stepper-content step="5">
      <Description />
      <v-btn
        @click="toGoodAndProductBuyerCondition"
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

    <!-- PRODUCT CONDITION STEP -->
    <v-stepper-step
      color="deep-purple accent-4"
      :complete="goodAndProductBuyer.steps > 6"
      step="6"
    >
      Product condition
    </v-stepper-step>

    <v-stepper-content step="6">
      <Condition />
      <v-btn
        @click="toGoodAndProductBuyerHandleDelivery"
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

    <!-- PRODUCT Handle delivery STEP -->
    <v-stepper-step
      color="deep-purple accent-4"
      :complete="goodAndProductBuyer.steps > 7"
      step="7"
    >
      Handle Delivery
    </v-stepper-step>

    <v-stepper-content step="7">
      <HandleDelivery />
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
    Email: () => import("./components/Email.vue"),
    Phone: () => import("./components/Phone.vue"),
    Name: () => import("./components/Name.vue"),
    Price: () => import("./components/Price.vue"),
    Description: () => import("./components/Description.vue"),
    Condition: () => import("./components/Condition.vue"),
    HandleDelivery: () => import("./components/HandleDelivery.vue"),
  },
  methods: {
    ...mapActions([
      "toGoodAndProductBuyerPhone",
      "toGoodAndProductBuyerName",
      "toGoodAndProductBuyerPrice",
      "toGoodAndProductBuyerDescription",
      "toGoodAndProductBuyerCondition",
      "toGoodAndProductBuyerHandleDelivery",
    ]),
  },
  computed: {
    ...mapState(["goodAndProductBuyer"]),
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
