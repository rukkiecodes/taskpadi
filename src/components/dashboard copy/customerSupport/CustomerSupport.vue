<template>
  <v-container>
    <v-row justify="space-between" align="start">
      <Form />
      <Table />
    </v-row>
  </v-container>
</template>

<script>
import Table from "./components/Table.vue"
import Form from "./components/Form.vue"
export default {
  components: {
    Table,Form
  }
}
</script>