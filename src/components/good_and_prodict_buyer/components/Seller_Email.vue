<template>
  <div class="interactive_form_sides_card rounded-xl mx-4 pa-5 pb-0">
    <div class="texts">
      <p class="text-h6">Seller email</p>
      <p class="text-caption mt-n3">
        Lorem ipsum dolor sit amet consectrur adis ampiscing Lorem dolor.
      </p>
    </div>
    <div class="icon mt-5">
      <v-icon size="45" class="white--text">mdi-email-variant</v-icon>
    </div>
    <v-text-field
      style="width: 100%"
      class="mt-10 rounded-lg"
      label="Seller email"
      background-color="#fff"
      v-model="good_and_product.seller_email_input"
      solo
      flat
    ></v-text-field>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["good_and_product"]),
    good_and_product: {
      get() {
        return this.$store.state.good_and_product;
      },
      set(new_value) {
        this.$store.state.good_and_product = new_value;
      },
    },
  },
};
</script>
