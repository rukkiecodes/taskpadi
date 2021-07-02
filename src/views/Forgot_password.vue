<template>
  <Forgot_password />
</template>

<script>
  import Forgot_password from '../components/Forgot_password'

  export default {
    metaInfo: {
    title: "Trustpaddi",
    titleTemplate: "%s - Forgot password",
    htmlAttrs: {
      lang: "en",
      amp: true,
    },
  },
    components: {
      Forgot_password,
    },
  }
</script>
