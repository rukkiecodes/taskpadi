<template>
  <v-col class="mb-sm-16" cols="12" sm="12" md="12" lg="9">
    <v-sheet color="white" class="rounded-lg" height="92vh">
      <v-sheet
        color="transparent"
        height="100%"
        class="d-flex flex-column justify-space-between"
      >
        <v-card flat color="transparent">
          <v-card-text v-html="faq.answer || questions[0].answer" />
        </v-card>

        <v-sheet
          color="transparent"
          class="d-flex justify-end align-end mb-6 mb-sm-4 mr-sm-5 mr-md-1 mb-md-2"
          height="30%"
        >
          <v-row class="mx-2" justify="space-between" align="start">
            <v-col cols="12" sm="5"></v-col>
            <v-col cols="12" sm="6">
              <v-textarea
                color="blue accent-4"
                label="Ask a question"
                class="mb-n6 rounded-lg"
                outlined
                height="100%"
              ></v-textarea>
            </v-col>
            <v-col class="pa-0" cols="12" sm="1">
              <v-btn
                depressed
                height="55"
                width="100%"
                class="white--text mb-4 mt-3 rounded-lg"
                color="blue accent-4"
              >
                <v-icon>mdi-camera</v-icon>
              </v-btn>
              <v-btn
                depressed
                height="55"
                width="100%"
                class="white--text rounded-lg"
                color="blue accent-4"
              >
                <v-icon>mdi-send mdi-rotate-315</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-sheet>
      </v-sheet>
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
