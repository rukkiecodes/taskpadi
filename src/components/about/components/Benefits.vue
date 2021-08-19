<template>
  <v-container class="mt-16">
    <v-row justify="space-between" align="start">
      <v-col class="text-center text-heading text-sm-h6 text-md-h5" cols="12">
        <h1>Benefits of TrustPaddi</h1>
      </v-col>

      <v-col class="mt-8" cols="12">
        <v-row justify="space-between" align="start">
          <v-col
            v-for="(benefit, i) in benefits"
            :key="i"
            cols="12"
            sm="12"
            md="4"
          >
            <v-row justify="start" align="start">
              <v-col
                class="my-0 py-0 d-flex justify-start align-center"
                cols="12"
              >
                <span
                  style="color: #4169e2"
                  class="text-h6 text-bold"
                  v-text="benefit.head"
                />
              </v-col>
              <v-col cols="12">
                <div class="d-flex flex-column">
                  <p
                    class="grey--text text--darken-4"
                    v-for="(text, index) in benefit.texts"
                    :key="index"
                  >
                    <v-icon color="indigo accent-4" size="16"
                      >mdi-radiobox-marked</v-icon
                    >
                    {{ text.span }}
                  </p>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import benefits from "./benefits.js";
export default {
  data: () => ({
    benefits,
  }),
};
</script>
