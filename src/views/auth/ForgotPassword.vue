<template>
  <ForgotPassword />
</template>

<script>
import { mapActions } from "vuex";
import ForgotPassword from "../../components/auth/ForgotPassword.vue";
export default {
  components: {
    ForgotPassword,
  },

  created() {
    this.login()
  },

  methods: {
    ...mapActions(["login"])
  }
};
</script>
