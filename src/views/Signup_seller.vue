<template>
  <Signup_seller />
</template>

<script>
import Signup_seller from "../components/Signup_seller";

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
    Signup_seller,
  },
};
</script>
