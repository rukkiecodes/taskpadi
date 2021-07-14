<template>
  <v-container class="buyer_roles">
    <v-card width="500">
      <v-toolbar flat>
        <v-avatar tile class="mr-10">
          <img
            src="../../assets/trust/interactive_form_icons/buyer.png"
            alt=""
          />
        </v-avatar>
        <v-toolbar-title class="grey--text text--darken-4">
          Please fill the form to proccess your purchase
        </v-toolbar-title>
      </v-toolbar>

      <v-card-text
        class="
          buyer_roles_input_container
          d-flex
          flex-row
          justify-space-between
          flex-wrap
          pb-0
        "
      >
        <v-text-field
          class="buyer_roles_input"
          outlined
          label="Seller's email"
        ></v-text-field>
        <v-text-field
          class="buyer_roles_input"
          outlined
          label="Seller's email"
        ></v-text-field>
        <v-text-field
          class="buyer_roles_input mt-n5"
          outlined
          label="Seller's email"
        ></v-text-field>
        <v-text-field
          class="buyer_roles_input mt-n5"
          outlined
          label="Seller's email"
        ></v-text-field>
        <v-select
          class="buyer_roles_input mt-n5"
          outlined
          label="Product condition"
          :items="item"
        ></v-select>
        <v-select
          class="buyer_roles_input mt-n5"
          outlined
          label="Who should handle delivery"
          :items="item"
        ></v-select>
        <v-textarea
          class="buyer_roles_input mt-n5"
          outlined
          height="100"
          label="Product Description"
        ></v-textarea>
      </v-card-text>
      <v-card-actions class="d-flex justify-end px-4 py-4">
        <v-btn
          depressed
          color="#4468E2"
          large
          class="text-capitalize rounded-lg white--text py-6 px-5"
          @click="goto_proceed_to_delivery"
          >Proceed to delivery</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data: () => ({
    item: ["Brand new", "Belgium", "Old"],
  }),
  methods: {
    ...mapActions(["goto_proceed_to_delivery"]),
  },
};
</script>

<style scoped>
@import url(../../assets/styles/buyer_roles.css);
</style>
