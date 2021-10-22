<template>
  <v-container class="mt-16">
    <Heading
      class="text-h4 text-md-h3 font-weight-bold text-center grey--text text--darken-4"
      title="Benefits Trustpaddi!"
    />
    <SubHeading
      class="mt-2 mb-6 text-center grey--text text--darken-3 text-subtitle-1"
      title="The safest & surest way to transact online"
    />
    <Section1 />
    <Section2 class="mt-10" />
    <Section3 class="mt-10" />
  </v-container>
</template>

<script>
// @ts-nocheck
export default {
  components: {
    Heading: () => import("./Heading.vue"),
    SubHeading: () => import("./SubHeading.vue"),
    Section1: () => import("./benefites/Section1.vue"),
    Section2: () => import("./benefites/Section2.vue"),
    Section3: () => import("./benefites/Section3.vue"),
  },
}
</script>
