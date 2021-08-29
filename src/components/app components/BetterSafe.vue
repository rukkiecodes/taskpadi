<template>
  <v-row class="flex-column text-center" justify="center" align="center">
    <Title title="It's better safe than sorry" />
    <v-btn color="deep-purple accent-4 px-16 px-md-10" dark depressed x-large>Get Started</v-btn>
  </v-row>
</template>

<script>
export default {
  components: {
    Title: () => import("./Title.vue"),
  },
};
</script>
