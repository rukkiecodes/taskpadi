<template>
  <v-container>
    <v-row justify="space-between" align="start">
      <v-col class=" py-15 d-flex justify-center align-center" cols="12">
        <div class="head_text text-center">
          <p class="p1">Benefits of TrustPaddi</p>
        </div>
      </v-col>

      <v-col cols="12">
        <v-row justify="space-between" align="start">
          <v-col v-for="(benefit, i) in benefits" :key="i" cols="12" sm="12" md="4">
            <v-row justify="start" align="start">
              <v-col
                class="my-0 py-0 d-flex justify-start align-center"
                cols="12"
              >
                <span style="color: #4169e2" class="text-h6 text-bold" v-text="benefit.head" />
              </v-col>
              <v-col cols="12">
                <div class="d-flex flex-column">
                  <div v-for="(text, i) in benefit.texts" :key="i" class="mb-4 benefit_text d-flex justify-start align-start">
                    <div class="mr-2 mt-1"></div>
                    <span class="text-body-2 grey--text text--darken-4" v-text="text.span" />
                  </div>
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
import benefits from "./benefits.js"
export default {
  data: () => ({
    benefits
  }),
};
</script>

<style scoped>
.benefit_text div {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #4169e2;
}
</style>