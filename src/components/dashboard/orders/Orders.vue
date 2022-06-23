<template>
  <v-container fluid>
    <CreateOrders class="mb-5" />
    <router-view />
  </v-container>
</template>

<script>
import { mapActions } from "vuex"
import CreateOrders from "./CreateOrders.vue"

export default {
  mounted () {
    this.$nextTick(() => {
      this.getOrders()
    })
  },

  methods: {
    ...mapActions(["getOrders"]),
  },

  components: { CreateOrders },
}
</script>
