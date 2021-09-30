<template>
  <v-col cols="12" sm="6" md="3" lg="2">
    <v-tooltip top color="transparent">
      <template v-slot:activator="{ on, attrs }">
        <v-sheet
          class="d-flex flex-start align-center rounded-xl"
          v-bind="attrs"
          v-on="on"
          color="transparent"
          :width="testimony1Width"
          @mouseenter="expandtestimony1"
          @mouseleave="retracttestimony1"
        >
          <v-avatar>
            <v-img src="../../../../assets/trust/home/testimony1.png" />
          </v-avatar>
          <div v-if="showtestimony1" class="d-flex flex-column ml-2">
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
    showtestimony1: true,
    testimony1Width: 48,
  }),
  mounted() {
    this.$nextTick(() => {
      this.showtestimony1 = true
      this.testimony1Width = 230
    })
  },
  methods: {
    expandtestimony1() {
      if (this.showtestimony1 == true) {
        this.showtestimony1 = false
        this.testimony1Width = 48
      } else {
        this.showtestimony1 = true
        this.testimony1Width = 230
      }
    },
    retracttestimony1() {
      if (this.showtestimony1 == true) {
        this.testimony1Width = 48
        this.showtestimony1 = false
      } else {
        this.testimony1Width = 230
        this.showtestimony1 = true
      }
    },
  },
}
</script>
