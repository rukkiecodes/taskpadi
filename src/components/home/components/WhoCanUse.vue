<template>
  <v-container class="mt-16">
    <Heading
      class="text-h3 font-weight-bold text-center grey--text text--darken-4"
      title="Who can use Trust paddi?"
    />
    <Section1 />
    <Section2 />
    <Section3 />
  </v-container>
</template>

<script>
// @ts-nocheck
export default {
  components: {
    Heading: () => import("./Heading.vue"),
    Section1: () => import("./whoCanUse/Section1.vue"),
    Section2: () => import("./whoCanUse/Section2.vue"),
    Section3: () => import("./whoCanUse/Section3.vue"),
  },
}
</script>
