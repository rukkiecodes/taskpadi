<template>
  <v-container class="faq mt-0 mt-xl-0">
    <v-row justify="space-between" align="start">
      <Mobile_questions />
      <Questions />
      <Answers />
    </v-row>
  </v-container>
</template>

<script>
import Questions from "./components/Questions.vue";
import Mobile_questions from "./components/Mobile_questions.vue";
import Answers from "./components/Answers.vue";
export default {
  components: {
    Questions,
    Mobile_questions,
    Answers,
  },
};
</script>

<style scoped>
.faq {
  height: 90vh;
}

.buttons {
  width: 100%;
  height: 90vh;
  overflow: auto;
}
</style>
