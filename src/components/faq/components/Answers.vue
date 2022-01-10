<template>
  <v-card height="400" flat width="100%">
    <v-card-text
      v-for="(yourAnswer, i) in askedQuestion"
      :key="i"
      class="text-body-1"
      v-text="yourAnswer.answer"
    />
    <v-card-text v-if="askedQuestion.length == 0" class="pt-16 text-center">
      <v-avatar class="mt-16" size="150">
        <v-icon class="grey--text text--darken-3" size="100"
          >mdi-comment-question</v-icon
        >
      </v-avatar>
    </v-card-text>
    <v-card-text
      v-if="askedQuestion.length == 0"
      class="text-center ma-0 pa-0 mt-n5 grey--text text--darken-3 text-body-1"
    >
      No Questions asked yet
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["askedQuestion"]),
  },
};
</script>
