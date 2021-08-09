<template>
  <Home />
</template>

<script>
import { mapActions } from "vuex";
import Home from "../components/home/Home.vue";
export default {
  components: {
    Home,
  },
  mounted() {
    this.app_bar_route()
  },
  methods: {
    ...mapActions(["app_bar_route"]),
  },
};
</script>
