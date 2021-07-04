<template>
  <v-container class="interactive_form">
    <div class="tracks">
      <div class="track active_track mx-2"></div>
      <div class="track mx-2"></div>
      <div class="track mx-2"></div>
      <div class="track mx-2"></div>
      <div class="track mx-2"></div>
      <div class="track mx-2"></div>
      <div class="track mx-2"></div>
    </div>

    <div class="interactive_form_sides">
      <v-btn
        depressed
        class="rounded-lg interactive_form_sides_button"
        color="#4169E2"
        small
      >
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <Seller_Email v-show="good_and_product.seller_email == true" />
      <Sellers_phone_number v-show="good_and_product.seller_phone_number == true" />
      <Product_name v-show="good_and_product.product_name == true" />
      <Agreed_price v-show="good_and_product.agreed_price == true" />
      <Product_description v-show="good_and_product.product_description == true" />
      <Condition v-show="good_and_product.product_condition == true" />
      <Who_should_handle_delivery v-show="good_and_product.who_handles_delivery == true" />
      <v-btn
        depressed
        class="
          rounded-lg
          interactive_form_sides_button interactive_form_sides_button_active
        "
        color="#4169E2"
        small
        @click="next_form"
      >
        <v-icon>mdi-arrow-right</v-icon>
      </v-btn>
    </div>
    <div class="interactive_form_mobile_buttons mt-5">
      <v-btn
        depressed
        class="
          interactive_form_mobile_buttons_button
          mx-2
          rounded-lg
          white--text
        "
      >
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-btn
        class="
          interactive_form_mobile_buttons_button
          interactive_form_mobile_buttons_button_active
          mx-2
          white--text
          rounded-lg
        "
        depressed
        @click="next_form"
      >
        <v-icon>mdi-arrow-right</v-icon>
      </v-btn>
    </div>
  </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Seller_Email from "./components/Seller_Email.vue";
import Sellers_phone_number from "./components/Sellers_phone_number.vue";
import Product_name from "./components/Product_name.vue";
import Agreed_price from "./components/Agreed_price.vue";
import Product_description from "./components/Product_description.vue";
import Condition from "./components/Condition.vue";
import Who_should_handle_delivery from "./components/Who_should_handle_delivery.vue";
export default {
  components: {
    Seller_Email,
    Sellers_phone_number,
    Product_name,
    Agreed_price,
    Product_description,
    Condition,
    Who_should_handle_delivery
  },
  methods: {
    ...mapActions(["next_form"]),
  },
  computed: {
    ...mapState([
      "good_and_product"
      // "seller_email",
      // "seller_phone_number",
      // "product_name",
      // "agreed_price",
      // "product_description",
      // "product_condition",
      // "who_handles_delivery"
    ]),
    good_and_product: {
      get() {
        return this.$store.state.good_and_product;
      },
      set(new_value) {
        this.$store.state.good_and_product = new_value;
      },
    },
    // seller_email: {
    //   get() {
    //     return this.$store.state.seller_email;
    //   },
    //   set(new_value) {
    //     this.$store.state.seller_email = new_value;
    //   },
    // },
    // seller_phone_number: {
    //   get() {
    //     return this.$store.state.seller_phone_number;
    //   },
    //   set(new_value) {
    //     this.$store.state.seller_phone_number = new_value;
    //   },
    // },
    // product_name: {
    //   get() {
    //     return this.$store.state.product_name;
    //   },
    //   set(new_value) {
    //     this.$store.state.product_name = new_value;
    //   },
    // },
    // agreed_price: {
    //   get() {
    //     return this.$store.state.agreed_price;
    //   },
    //   set(new_value) {
    //     this.$store.state.agreed_price = new_value;
    //   },
    // },
    // product_description: {
    //   get() {
    //     return this.$store.state.product_description;
    //   },
    //   set(new_value) {
    //     this.$store.state.product_description = new_value;
    //   },
    // },
    // product_condition: {
    //   get() {
    //     return this.$store.state.product_condition;
    //   },
    //   set(new_value) {
    //     this.$store.state.product_condition = new_value;
    //   },
    // },
    // who_handles_delivery: {
    //   get() {
    //     return this.$store.state.who_handles_delivery;
    //   },
    //   set(new_value) {
    //     this.$store.state.who_handles_delivery = new_value;
    //   },
    // },
  },
};
</script>

<style scoped>
@import url(../../assets/styles/interactive_form.css);
</style>
