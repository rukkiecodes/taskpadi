<template>
  <v-col cols="12" sm="4">
    <v-card min-height="178" class="rounded-lg" color="white" flat dark>
      <v-toolbar color="transparent" flat dense>
        <v-toolbar-title class="text-body-1 grey--text text--darken-3"
          >Total withdrawals</v-toolbar-title
        >
        <v-spacer></v-spacer>
        <v-btn
          dark
          x-small
          depressed
          color="#F7F7FC"
          class="text-uppercase black--text"
        >
          Month
          <v-icon right>mdi-chevron-down</v-icon>
        </v-btn>
      </v-toolbar>

      <v-card-text class="text-h4 grey--text font-weight-bold"
        >500</v-card-text
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
