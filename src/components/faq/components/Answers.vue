<template>
  <v-col class="answers" cols="12" sm="12" md="12" lg="9">
    <v-sheet class="mt-3" height="85vh">
      <div
        class="d-flex flex-column justify-space-between align-start"
        style="height: 100%"
      >
        <v-card flat class="ma-0 pa-0">
          <v-card-text
            v-html="faq.answer || questions[0].answer"
            class="grey--text text--darken-4 text-body-1 ma-0 py-0"
          />
        </v-card>
        <v-card flat width="100%" class="ma-0 pa-0 mb-10 mb-sm-10 mb-md-0">
          <v-row justify="space-between" align="end">
            <v-col cols="12" sm="4"></v-col>
            <v-col cols="12" sm="12" md="7">
              <v-row justify="space-between" align="start">
                <v-col cols="12" sm="10">
                  <v-textarea
                    outlined
                    color="blue accent-4"
                    label="Ask a question"
                  ></v-textarea>
                </v-col>
                <v-col align="start" cols="12" sm="2">
                  <v-btn
                    height="55"
                    depressed
                    class="white--text rounded-lg mb-sm-2 mr-2 mr-sm-2"
                    color="blue lighten-5"
                  >
                    <v-icon size="30" class="blue--text text--accent-4"
                      >mdi-camera</v-icon
                    >
                  </v-btn>
                  <v-btn
                    height="55"
                    depressed
                    class="white--text rounded-lg"
                    color="blue accent-4"
                  >
                    <v-icon size="30">mdi-send mdi-rotate-315</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
      </div>
    </v-sheet>
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
