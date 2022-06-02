<template>
  <Signin />
</template>

<script>
import { mapActions } from "vuex";
import Signin from "../../components/auth/Signin.vue";
export default {
  components: {
    Signin,
  },

  created() {
    this.login()
  },

  methods: {
    ...mapActions(["login"])
  }
};
</script>
