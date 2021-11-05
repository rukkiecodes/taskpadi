<template>
  <v-container>
    <v-row justify="space-between" align="start">
      <Ballance />
      <Form />
      <BallanceCards />
      <History />
    </v-row>
  </v-container>
</template>

<script>
import Form from "./components/Form.vue";
import Ballance from "./components/Ballance.vue"
import BallanceCards from "./components/BallanceCards.vue"
import History from "./components/history/History.vue"
export default {
  components: {
    Form,
    Ballance,
    BallanceCards,
    History,
  },
};
</script>
