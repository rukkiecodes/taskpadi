<template>
  <v-card flat class="pa-5 pt-10">
    <v-row justify="space-between" align="start">
      <v-col cols="12" sm="6">
        <v-text-field
          outlined
          class="rounded-lg"
          label="Name of Bank"
          color="blue accent-4"
          prepend-inner-icon="mdi-bank-outline"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field
          outlined
          class="rounded-lg"
          color="blue accent-4"
          label="Account Number"
          prepend-inner-icon="mdi-piggy-bank"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field
          readonly
          disabled
          outlined
          value="John Doe"
          class="rounded-lg"
          label="Account Name"
          color="blue accent-4"
          prepend-inner-icon="mdi-account-tie-outline"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <v-text-field
          outlined
          class="rounded-lg"
          color="blue accent-4"
          label="Amount to be withdrawn"
          prepend-inner-icon="mdi-account-cash"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="4" md="2">
        <v-btn
          block
          depressed
          height="53"
          color="blue accent-4"
          class="rounded-lg text-capitalize text-body-1 white--text font-weight-bold mb-6 mb-sm-5 mb-md-0"
          >Withdraw</v-btn
        >
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {};
</script>

<style></style>
