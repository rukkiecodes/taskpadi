<template>
  <Faq />
</template>

<script>
import Faq from "../components/faq/Faq.vue"
import { mapActions } from "vuex";
export default {
  metaInfo: {
    title: "Trustpaddi",
    titleTemplate: "%s - Faq",
  },
  components: {
    Faq
  },
  mounted() {
    this.app_bar_route();
  },
  methods: {
    ...mapActions(["app_bar_route"]),
  },
};
</script>
