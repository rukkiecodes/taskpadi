<template>
  <v-stepper
    :width="width"
    class="mx-auto"
    v-model="deliveryInfo.steps"
    vertical
  >
    <!-- EMAIL STEP -->
    <v-stepper-step
      color="deep-purple accent-4"
      :complete="deliveryInfo.steps > 1"
      editable
      step="1"
    >
      Product name
    </v-stepper-step>

    <v-stepper-content step="1">
      <Name />
      <v-btn
        @click="toDeliveryInfoProductSize"
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

    <!-- PRODUCT SIZE STEP -->
    <v-stepper-step
      color="deep-purple accent-4"
      :complete="deliveryInfo.steps > 2"
      editable
      step="2"
    >
      Product size
      <small
        >{{ deliveryInfo.deliveryInfoInputs.size }}
        {{ deliveryInfo.deliveryInfoInputs.sizeMesurmentUnit }}</small
      >
    </v-stepper-step>

    <v-stepper-content step="2">
      <Size />
      <v-btn
        @click="toDeliveryInfoProductImage"
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

    <!-- PRODUCT IMAGE STEP -->
    <v-stepper-step
      color="deep-purple accent-4"
      :complete="deliveryInfo.steps > 3"
      editable
      step="3"
    >
      Product Image
    </v-stepper-step>

    <v-stepper-content step="3">
      <ProductImage />
      <v-btn
        @click="toDeliveryInfoProductResidentialAddress"
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

    <!-- PRODUCT Residential Address STEP -->
    <v-stepper-step
      color="deep-purple accent-4"
      :complete="deliveryInfo.steps > 4"
      editable
      step="4"
    >
      Residential Address
    </v-stepper-step>

    <v-stepper-content step="4">
      <ResidentialAddress />
      <v-btn @click="toDeliveryInfoProductStateOfResidence" class="mr-4" color="deep-purple accent-4" dark>
        Continue
      </v-btn>
      <v-btn text>
        Cancel
      </v-btn>
    </v-stepper-content>

    <!-- PRODUCT Residential Address STEP -->
    <v-stepper-step
      color="deep-purple accent-4"
      :complete="deliveryInfo.steps > 5"
      editable
      step="5"
    >
      State of residence
    </v-stepper-step>

    <v-stepper-content step="5">
      <StateOfResidence />
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
    Size: () => import("./components/Size.vue"),
    ProductImage: () => import("./components/ProductImage.vue"),
    ResidentialAddress: () => import("./components/ResidentialAddress.vue"),
    StateOfResidence: () => import("./components/StateOfResidence.vue"),
  },
  methods: {
    ...mapActions([
      "toDeliveryInfoProductSize",
      "toDeliveryInfoProductImage",
      "toDeliveryInfoProductResidentialAddress",
      "toDeliveryInfoProductStateOfResidence"
    ]),
  },
  computed: {
    ...mapState(["deliveryInfo"]),
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
