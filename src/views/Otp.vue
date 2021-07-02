<template>
  <Otp />
</template>

<script>
import Otp from "../components/Otp";

export default {
  metaInfo: {
    title: "Trustpaddi",
    titleTemplate: "%s - OTP",
    htmlAttrs: {
      lang: "en",
      amp: true,
    },
  },
  components: {
    Otp,
  },
};
</script>
