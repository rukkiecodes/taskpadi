<template>
  <v-col
    class="buttons hidden-md-and-down"
    justify="center"
    align="center"
    cols="12"
    sm="3"
  >
    <smooth-scrollbar :options="{ damping: 0.05 }">
      <v-card
        v-for="(question, index) in questions"
        :key="index"
        @click="pass_data(question)"
        :class="{ 'blue accent-4': faq.active_question == question.title }"
        class="mb-4 rounded-lg"
        flat
      >
        <v-card-text
          :class="{ 'white--text font-weight-bold': faq.active_question == question.title }"
          v-text="question.title"
        />
      </v-card>
    </smooth-scrollbar>
  </v-col>
</template>

<script>
import { mapActions, mapState } from "vuex";
import questions from "../questions";
export default {
  data: () => ({
    questions,
  }),
  methods: {
    ...mapActions(["pass_data"]),
  },
  computed: {
    ...mapState(["faq"]),
  },
};
</script>
