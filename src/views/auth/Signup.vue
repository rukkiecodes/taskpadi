<template>
  <Signup />
</template>

<script>
import { mapActions } from "vuex";
import Signup from "../../components/auth/Signup.vue";
export default {
  components: {
    Signup,
  },

  created() {
    this.login()
  },

  methods: {
    ...mapActions(["login"])
  }
};
</script>
