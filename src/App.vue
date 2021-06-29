<template>
  <v-app>
    <v-main id="scroll-area">
      <smooth-scrollbar>
        <router-view />
      </smooth-scrollbar>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#scroll-area {
  width: 100%;
  height: 100vh;
}
</style>
