<template>
  <v-stepper
    :width="width"
    class="mx-auto"
    v-model="goodAndProductSeller.steps"
    vertical
  >
    <!-- EMAIL STEP -->
    <v-stepper-step
      color="deep-purple accent-4"
      :complete="goodAndProductSeller.steps > 1"
      editable
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
        @click="togoodAndProductSellerPhone"
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
      :complete="goodAndProductSeller.steps > 2"
      editable
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
        @click="togoodAndProductSellerTransactionTitle"
      >
        Continue
      </v-btn>
      <v-btn text>
        Cancel
      </v-btn>
    </v-stepper-content>

    <!-- PRODUCT transaction title STEP -->
    <v-stepper-step
      color="deep-purple accent-4"
      :complete="goodAndProductSeller.steps > 3"
      editable
      step="3"
    >
      Transaction title
    </v-stepper-step>

    <v-stepper-content step="3">
      <TransactionTitle />
      <v-btn
        class="mr-4"
        color="deep-purple accent-4"
        dark
        @click="togoodAndProductSellerProductDescription"
      >
        Continue
      </v-btn>
      <v-btn text>
        Cancel
      </v-btn>
    </v-stepper-content>

    <!-- ProductDescription STEP -->
    <v-stepper-step
      color="deep-purple accent-4"
      :complete="goodAndProductSeller.steps > 4"
      editable
      step="4"
    >
      Product description
    </v-stepper-step>

    <v-stepper-content step="4">
      <ProductDescription />
      <v-btn
        class="mr-4"
        color="deep-purple accent-4"
        dark
        @click="togoodAndProductSellerPrice"
      >
        Continue
      </v-btn>
      <v-btn text>
        Cancel
      </v-btn>
    </v-stepper-content>

    <!-- Price STEP -->
    <v-stepper-step
      color="deep-purple accent-4"
      :complete="goodAndProductSeller.steps > 5"
      editable
      step="5"
    >
      Agreed Price
    </v-stepper-step>

    <v-stepper-content step="5">
      <Price />
      <v-btn
        class="mr-4"
        color="deep-purple accent-4"
        dark
        @click="togoodAndProductSellerProductImage"
      >
        Continue
      </v-btn>
      <v-btn text>
        Cancel
      </v-btn>
    </v-stepper-content>

    <!-- ProductImage STEP -->
    <v-stepper-step
      color="deep-purple accent-4"
      :complete="goodAndProductSeller.steps > 6"
      editable
      step="6"
    >
      Product image
    </v-stepper-step>

    <v-stepper-content step="6">
      <ProductImage />
      <v-btn
        class="mr-4"
        color="deep-purple accent-4"
        dark
        @click="togoodAndProductSellerProductCondition"
      >
        Continue
      </v-btn>
      <v-btn text>
        Cancel
      </v-btn>
    </v-stepper-content>

    <!-- ProductCondition STEP -->
    <v-stepper-step
      color="deep-purple accent-4"
      :complete="goodAndProductSeller.steps > 7"
      editable
      step="7"
    >
      Product condition
    </v-stepper-step>

    <v-stepper-content step="7">
      <ProductCondition />
      <v-btn
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
  </v-stepper>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  components: {
    Email: () => import("./components/Email.vue"),
    Phone: () => import("./components/Phone.vue"),
    TransactionTitle: () => import("./components/TransactionTitle.vue"),
    ProductDescription: () => import("./components/ProductDescription.vue"),
    Price: () => import("./components/Price.vue"),
    ProductImage: () => import("./components/ProductImage.vue"),
    ProductCondition: () => import("./components/ProductCondition.vue"),
  },
  methods: {
    ...mapActions([
      "togoodAndProductSellerPhone",
      "togoodAndProductSellerTransactionTitle",
      "togoodAndProductSellerProductDescription",
      "togoodAndProductSellerPrice",
      "togoodAndProductSellerProductImage",
      "togoodAndProductSellerProductCondition"
    ]),
  },
  computed: {
    ...mapState(["goodAndProductSeller"]),
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
