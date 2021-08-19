<template>
  <v-container class="mt-16">
    <v-row justify="space-between" align="start">
      <v-col class="text-center text-heading text-sm-h6 text-md-h5" cols="12">
        <h1>Why TrustPaddi</h1>
      </v-col>
    </v-row>
    <v-row
      class="flex-column-reverse flex-sm-row mt-8"
      justify="space-between"
      align="center"
    >
      <v-col cols="12" sm="6">
        <p class="text-body-1" v-for="(list, index) in why_paddi" :key="index">
          <span class="font-weight-bold">{{ list.title }}:</span>
          {{ list.body }}
        </p>
      </v-col>
      <v-col cols="12" sm="5">
        <v-img
          lazy-src="../../../assets/trust/about.svg"
          src="../../../assets/trust/about.svg"
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import why_paddi from "./why_paddi";
export default {
  data: () => ({
    why_paddi,
  }),
};
</script>
