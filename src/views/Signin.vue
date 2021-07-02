<template>
  <Signin />
</template>

<script>
import Signin from "../components/Signin";

export default {
  metaInfo: {
    title: "Trustpaddi",
    titleTemplate: "%s - sign in",
    htmlAttrs: {
      lang: "en",
      amp: true,
    },
  },
  components: {
    Signin,
  },
};
</script>
