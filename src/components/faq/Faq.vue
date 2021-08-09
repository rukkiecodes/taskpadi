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
                'text-body-2 text-capitalize white outline_faq_card grey--text text--darken-3 mb-2':
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
        sm="3"
      >
        <smooth-scrollbar :options="{ damping: 0.05 }">
          <v-card
            v-for="(question, index) in questions"
            :key="index"
            :class="{
              'blue lighten-5 mb-2': active_question == question.title,
              'blue lighten-5': initial == question.title,
              'white outline_faq_card mb-2': active_question != question.title,
            }"
            class="py-2 px-2 mr-2"
            @click="pass_data(question)"
            flat
          >
            <v-card-text
              ><span
                :class="{
                  'text-body-2 text-capitalize blue--text text--accent-4':
                    active_question == question.title,
                  'text-body-2 grey--text text--darken-1 font-weight-regular':
                    active_question != question.title,
                }"
                style="text-transform: initial"
                v-text="question.title"
            /></v-card-text>
          </v-card>
        </smooth-scrollbar>
      </v-col>
      <v-col class="" cols="12" sm="12" md="12" lg="9">
        <v-sheet>
          <v-card class="ma-0 pa-0" flat>
            <v-card-text
              v-html="answer || questions[0].answer"
              class="grey--text text--darken-4 text-body-1 ma-0 pa-0"
            />
          </v-card>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import questions from "./questions";
export default {
  data: () => ({
    active_question: "",
    answer: ``,
    model: null,
    initial: "What is TrustPaddi",
    questions,
  }),
  methods: {
    pass_data(question) {
      this.active_question = question.title;
      this.answer = question.answer;
      this.initial = "";
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
.outline_faq_card {
  border: 1px solid rgba(85, 85, 85, 0.5) !important;
}
</style>
