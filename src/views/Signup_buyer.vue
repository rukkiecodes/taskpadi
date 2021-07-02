<template>
  <Signup_buyer />
</template>

<script>
import Signup_buyer from "../components/Signup_buyer";

export default {
  metaInfo: {
    title: "Trustpaddi",
    titleTemplate: "%s - sign up",
    htmlAttrs: {
      lang: "en",
      amp: true,
    },
  },
  components: {
    Signup_buyer,
  },
};
</script>
