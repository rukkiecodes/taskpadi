<template>
  <v-sheet color="transparent" class="mx-auto">
    <v-slide-group multiple show-arrows>
      <v-slide-item v-for="(question, i) in questions" :key="i">
        <v-btn
          class="mx-2 text-capitalize text-body-2"
          @click="askQuestion(question)"
          :class="{
            'deep-purple accent-4 white--text': faq.activeQuestion == question.title,
          }"
          text
          depressed
          v-text="question.title"
        />
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
import { mapActions, mapState } from "vuex";
import questions from "../questions";
export default {
  data: () => ({
    model: null,
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
