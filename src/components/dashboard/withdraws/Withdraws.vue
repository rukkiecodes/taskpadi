<template>
  <v-container>
    <v-row justify="space-between" align="start">
      <Ballance />
      <Form />
      <History />
    </v-row>
  </v-container>
</template>

<script>
import Form from "./components/Form.vue";
import Ballance from "./components/Ballance.vue"
import History from "./components/history/History.vue"
export default {
  components: {
    Form,
    Ballance,
    History
  },
};
</script>
