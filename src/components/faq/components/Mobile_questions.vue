<template>
  <v-col class="hidden-lg-and-up mt-0 mt-sm-15 mt-md-5" cols="12">
    <v-slide-group multiple show-arrows>
      <v-slide-item v-for="(question, index) in questions" :key="index">
        <v-btn
          :class="{ 'blue accent-4': faq.active_question == question.title }"
          class="text-body-2 text-capitalize mr-2 rounded-lg"
          @click="pass_data(question)"
          depressed
        >
          <span
            :class="{
              'white--text font-weight-bold':
                faq.active_question == question.title,
            }"
            >{{ question.title }}</span
          >
        </v-btn>
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
