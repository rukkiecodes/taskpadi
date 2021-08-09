<template>
  <v-container class="faq mt-0 mt-xl-0">
    <v-row justify="space-between" align="start">
      <v-col class="hidden-lg-and-up mt-0 mt-sm-15 mt-md-5" cols="12">
        <v-slide-group multiple show-arrows>
          <v-slide-item v-for="(question, index) in questions" :key="index">
            <v-btn
              :class="{
                'text-body-2 text-capitalize blue lighten-5 blue--text text--accent-4 mb-2':
                  active_question == question.title,
                'blue lighten-5': initial == question.title,
                'text-body-2 text-capitalize white outline_faq_button grey--text text--darken-3 mb-2':
                  active_question != question.title,
              }"
              class="text-body-2 text-capitalize mr-2 font-weight-medium"
              @click="pass_data(question)"
              depressed
              v-text="question.title"
            />
          </v-slide-item>
        </v-slide-group>
      </v-col>
      <v-col
        class="buttons hidden-md-and-down"
        justify="center"
        align="center"
        cols="12"
        sm="2"
      >
        <smooth-scrollbar :options="{ damping: 0.05 }">
          <v-btn
            depressed
            height="70"
            width="100%"
            v-for="(question, index) in questions"
            :key="index"
            :class="{
              'text-body-2 text-capitalize blue lighten-5 blue--text text--accent-4 mb-2':
                active_question == question.title,
              'blue lighten-5': initial == question.title,
              'text-body-2 text-capitalize white outline_faq_button grey--text text--darken-3 mb-2':
                active_question != question.title,
            }"
            class="text-body-2 text-capitalize mb-2 font-weight-medium"
            @click="pass_data(question)"
            v-text="question.title"
          />
        </smooth-scrollbar>
      </v-col>
      <v-col class="" cols="12" sm="12" md="12" lg="10">
        <v-sheet>
          <v-card class="ma-0 pa-0" flat>
            <v-card-text
              v-text="answer || questions[0].answer"
              class="grey--text text--darken-4 text-body-1 ma-o pa-0"
            />
          </v-card>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import questions from "./questions"
export default {
  data: () => ({
    active_question: "",
    answer: ``,
    model: null,
    initial: "What is TrustPaddi",
    questions
  }),
  methods: {
    pass_data(question) {
      this.active_question = question.title;
      this.answer = question.answer;
      this.initial = "";
      console.log(question);
    },
  },
  created() {
    let elHtml = document.getElementsByTagName("html")[0];
    elHtml.classList.add("hide");
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
.hide::-webkit-scrollbar {
  width: 0px;
}

.hide_overlay {
  z-index: 0 !important;
}
.outline_faq_button {
  border: 1px solid rgba(85, 85, 85, 0.5) !important;
}
</style>
