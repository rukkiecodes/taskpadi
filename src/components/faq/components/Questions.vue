<template>
  <smooth-scrollbar :options="{ damping: 0.05 }">
    <v-sheet color="transparent" height="100vh">
      <v-card
        flat
        v-for="(question, i) in questions"
        :key="i"
        class="mb-4"
        :class="{
          'deep-purple accent-4': faq.activeQuestion == question.title,
        }"
        @click="askQuestion(question)"
      >
        <v-card-text
          :class="{
            'white--text': faq.activeQuestion == question.title,
          }"
          v-text="question.title"
        />
      </v-card>
    </v-sheet>
  </smooth-scrollbar>
</template>

<script>
import { mapActions, mapState } from "vuex";
import questions from "../questions";
export default {
  data: () => ({
    questions,
  }),
  methods: {
    ...mapActions(["askQuestion"]),
  },
  computed: {
    ...mapState(["faq"]),
  },
};
</script>
