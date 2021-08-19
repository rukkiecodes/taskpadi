<template>
  <v-container id="scroll-area" fluid class="pa-0">
    <AppNavigation />
    <smooth-scrollbar :options="{ damping: 0.05 }">
      <Safe_area />
      <v-container class="faq mt-0 mt-xl-0 mb-15">
        <v-row justify="space-between" align="start">
          <Mobile_questions />
          <Questions />
          <Answers />
        </v-row>
      </v-container>
      <Footer />
    </smooth-scrollbar>
  </v-container>
</template>

<script>
import AppNavigation from "../nav/AppNavigation.vue";
import Safe_area from "../app_components/Safe_area.vue";
import Questions from "./components/Questions.vue";
import Mobile_questions from "./components/Mobile_questions.vue";
import Answers from "./components/Answers.vue";
import Footer from "../Footer.vue";
export default {
  components: {
    AppNavigation,
    Safe_area,
    Questions,
    Mobile_questions,
    Answers,
    Footer,
  },
  created() {
    let elHtml = document.getElementsByTagName("html")[0];
    elHtml.classList.add("hide");
  },
};
</script>

<style scoped>
#scroll-area {
  width: 100%;
  height: 100vh;
  overflow: auto;
}
.hide::-webkit-scrollbar {
  width: 0px;
}

.hide_overlay {
  z-index: 0 !important;
}
.faq {
  height: 90vh;
}

.buttons {
  width: 100%;
  height: 90vh;
  overflow: auto;
}
</style>
