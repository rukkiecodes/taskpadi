<template>
  <v-container class="mt-16">
    <v-img
      lazy-src="../../../assets/trust/home/map.png"
      src="../../../assets/trust/home/map.png"
      class="f-flex justify-center align-center"
    >
      <v-row justify="space-around" align="center">
        <Testimony1 />
        <Testimony2 />
        <Testimony3 />
        <Testimony4 />
        <Testimony5 />
      </v-row>
    </v-img>
  </v-container>
</template>

<script>
export default {
  components: {
    Testimony1: () => import("./testimony/Testimony1.vue"),
    Testimony2: () => import("./testimony/Testimony2.vue"),
    Testimony3: () => import("./testimony/Testimony3.vue"),
    Testimony4: () => import("./testimony/Testimony4.vue"),
    Testimony5: () => import("./testimony/Testimony5.vue"),
  },
}
</script>
