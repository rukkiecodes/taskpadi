<template>
  <v-container fluid>
    <CreateOrders class="mb-5" />
  </v-container>
</template>

<script>
import { mapActions } from "vuex"
import CreateOrders from "./CreateOrders.vue"

export default {
  data: () => ({}),
  mounted () {
    this.$nextTick(() => {
      this.getOrders();
    });
  },
  methods: {
    ...mapActions(["getOrders"]),
  },
  components: { CreateOrders }
}
</script>
