<template>
  <v-col cols="12" sm="6" md="3" lg="2">
    <v-tooltip top color="transparent">
      <template v-slot:activator="{ on, attrs }">
        <v-sheet
          class="d-flex flex-start align-center rounded-xl"
          v-bind="attrs"
          v-on="on"
          color="transparent"
          :width="testimony2Width"
          @mouseenter="expandtestimony2"
          @mouseleave="retracttestimony2"
        >
          <v-avatar>
            <v-img src="../../../../assets/trust/home/testimony2.png" />
          </v-avatar>
          <div v-if="showtestimony2" class="d-flex flex-column ml-2">
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
    showtestimony2: false,
    testimony2Width: 48,
  }),
  methods: {
    expandtestimony2() {
      this.testimony2Width = 230
      this.showtestimony2 = true
    },
    retracttestimony2() {
      this.testimony2Width = 48
      this.showtestimony2 = false
    },
  },
}
</script>
