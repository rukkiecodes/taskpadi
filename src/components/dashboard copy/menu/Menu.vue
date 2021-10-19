<template>
  <v-container>
    <v-row justify="space-between" align="start">
      <Actions />
      <Calender />
    </v-row>
  </v-container>
</template>

<script>
export default {
  components: {
    Actions: () => import("./components/Actions.vue"),
    Calender: () => import("./components/Calender.vue")
  },
};
</script>
