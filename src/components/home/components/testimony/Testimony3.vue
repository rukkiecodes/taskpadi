<template>
  <v-col cols="12" sm="6" md="3" lg="2">
    <v-tooltip top color="transparent">
      <template v-slot:activator="{ on, attrs }">
        <v-sheet
          class="d-flex flex-start align-center rounded-xl"
          v-bind="attrs"
          v-on="on"
          color="transparent"
          :width="testimony3Width"
          @mouseenter="expandTestimony3"
          @mouseleave="retractTestimony3"
        >
          <v-avatar>
            <v-img src="../../../../assets/trust/home/testimony3.png" />
          </v-avatar>
          <div v-if="showTestimony3" class="d-flex flex-column ml-2">
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
    showTestimony3: false,
    testimony3Width: 48,
  }),
  methods: {
    expandTestimony3() {
      this.testimony3Width = 230
      this.showTestimony3 = true
    },
    retractTestimony3() {
      this.testimony3Width = 48
      this.showTestimony3 = false
    },
  },
}
</script>
