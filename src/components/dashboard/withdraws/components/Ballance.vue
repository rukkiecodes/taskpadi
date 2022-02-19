<template>
  <v-col cols="12" sm="4">
    <v-card
      min-height="150"
      class="rounded-lg"
      color="deep-purple accent-4"
      flat
      dark
    >
      <v-toolbar color="transparent" flat dense>
        <v-spacer />
        <v-btn color="deep-purple accent-2" dark x-small depressed>
          NGN
          <!-- <v-icon right>mdi-chevron-down</v-icon> -->
        </v-btn>
      </v-toolbar>

      <v-card-text class="text-body-2 white--text pb-0 font-weight-light"
        >Withdrawable balance</v-card-text
      >
      <v-card-text class="text-h4 white--text font-weight-bold py-1"
        >₦1,200,000.90</v-card-text
      >
      <v-card-text class="text-subtitle-2 white--text pt-2 font-weight-light"
        >Money here are available for withdrawals</v-card-text
      >
    </v-card>
  </v-col>
</template>

<script>
export default {
  computed: {
    height() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 130
        case "sm":
          return 195
        case "md":
          return 196
        case "lg":
          return 196
        case "xl":
          return 196
      }
    },
  },
}
</script>
