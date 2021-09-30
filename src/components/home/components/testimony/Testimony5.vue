<template>
  <v-col cols="12" sm="12" lg="2">
    <v-tooltip top color="transparent">
      <template v-slot:activator="{ on, attrs }">
        <v-sheet
          class="d-flex flex-start align-center rounded-xl"
          v-bind="attrs"
          v-on="on"
          color="transparent"
          :width="testimony5Width"
          @mouseenter="expandtestimony5"
          @mouseleave="retracttestimony5"
        >
          <v-avatar>
            <v-img src="../../../../assets/trust/home/testimony5.png" />
          </v-avatar>
          <div v-if="showtestimony5" class="d-flex flex-column ml-2">
            <span class="text-body-1 grey--text text--darken-4 font-weight-bold"
              >Mrs Chidinma Okere</span
            >
            <span class="text-body-2 grey--text text--darken-3"
              >CEO Chi's apperel</span
            >
          </div>
        </v-sheet>
      </template>
      <v-card color="white" width="540" class="ma-0 pa-0 pb-4">
        <v-card-text class="text-body-1 grey--text text--darken-3">
          <v-icon color="#210070" size="30">mdi-format-quote-open</v-icon>
          Anytime my potential customers dobt the genuinity of my business but
          really want to need the product, we use TrustPaddi and they are very
          reliable.
        </v-card-text>
      </v-card>
    </v-tooltip>
  </v-col>
</template>

<script>
export default {
  data: () => ({
    showtestimony5: false,
    testimony5Width: 48,
  }),
  methods: {
    expandtestimony5() {
      this.testimony5Width = 230
      this.showtestimony5 = true
    },
    retracttestimony5() {
      this.testimony5Width = 48
      this.showtestimony5 = false
    },
  },
}
</script>
