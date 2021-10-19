<template>
  <v-col cols="12" sm="6" md="8" lg="8" xl="9">
    <v-row justify="space-between" align="start">
      <v-col cols="12">
        <v-card flat>
          <v-card-title>Hello Mr John!</v-card-title>
          <v-card-text>
            Today you have new 9 new transactions. Also you might need to hire
            an assistant
          </v-card-text>
          <v-card-actions>
            <v-btn color="amber darken-3" dark class="text-capitalize" depressed
              >Read More</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
      <Action />
      <Ballance />
    </v-row>
  </v-col>
</template>

<script>
import Action from "./Action.vue";
import Ballance from "./Ballance.vue";
export default {
  components: {
    Action,
    Ballance,
  },
};
</script>
