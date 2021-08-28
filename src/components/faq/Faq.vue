<template>
  <v-container>
    <v-row justify="space-between" align="start">
      <v-col class="hidden-md-and-up" id="scrollArea" cols="12">
        <MobileQuestions />
      </v-col>
      <v-col class="hidden-sm-and-down" id="scrollArea" cols="12" md="4">
        <Questions />
      </v-col>
      <v-col cols="12" md="8">
        <v-sheet
          class="d-flex flex-column justify-space-between align-end"
          :height="height"
        >
          <Answers />
          <AskQuestion />
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  components: {
    Questions: () => import("./components/Questions.vue"),
    Answers: () => import("./components/Answers.vue"),
    MobileQuestions: () => import("./components/MobileQuestions.vue"),
    AskQuestion: () => import("./components/AskQuestion.vue"),
  },
  computed: {
    height() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "80vh";
        case "sm":
          return "80vh";
        case "md":
          return "100vh";
        case "lg":
          return "100vh";
        case "xl":
          return "100vh";
      }
    },
  },
};
</script>

<style lang="sass" scoped>
#scrollArea
  width: 100%
  overflow: auto
</style>
