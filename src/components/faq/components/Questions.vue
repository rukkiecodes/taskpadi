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
        :class="{
          'blue lighten-5 mb-2': faq.active_question == question.title,
          'blue lighten-5': faq.initial == question.title,
          'white outline_faq_card mb-2': faq.active_question != question.title,
        }"
        class="py-4 px-2 mr-2"
        @click="pass_data(question)"
        flat
      >
        <v-card-text
          ><span
            :class="{
              'text-body-2 text-capitalize blue--text text--accent-4':
                faq.active_question == question.title,
              'text-body-2 grey--text text--darken-1 font-weight-regular':
                faq.active_question != question.title,
            }"
            style="text-transform: initial"
            v-text="question.title"
        /></v-card-text>
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

<style scoped>
.outline_faq_card {
  border: 1px solid rgba(85, 85, 85, 0.5) !important;
}
</style>
