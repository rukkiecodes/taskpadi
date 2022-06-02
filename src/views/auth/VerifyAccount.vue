<template>
  <VerifyAccount />
</template>

<script>
import { mapActions } from "vuex";
import VerifyAccount from "../../components/auth/VerifyAccount.vue";
export default {
  components: {
    VerifyAccount,
  },

  created() {
    this.login()
  },

  methods: {
    ...mapActions(["login"])
  }
};
</script>
