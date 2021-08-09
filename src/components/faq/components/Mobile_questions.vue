<template>
  <v-col class="hidden-lg-and-up mt-0 mt-sm-15 mt-md-5" cols="12">
    <v-slide-group multiple show-arrows>
      <v-slide-item v-for="(question, index) in questions" :key="index">
        <v-btn
          :class="{
            'text-body-2 text-capitalize blue lighten-5 blue--text text--accent-4 mb-2':
              faq.active_question == question.title,
            'blue lighten-5': faq.initial == question.title,
            'text-body-2 text-capitalize white outline_faq_card grey--text text--darken-3 mb-2':
              faq.active_question != question.title,
          }"
          class="text-body-2 text-capitalize mr-2 font-weight-medium"
          @click="pass_data(question)"
          depressed
          v-text="question.title"
        />
      </v-slide-item>
    </v-slide-group>
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
