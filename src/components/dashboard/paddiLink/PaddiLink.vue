<template>
  <v-container>
    <NoLink />
    <CreateLink />
  </v-container>
</template>

<script>
export default {
  components: {
    NoLink: () => import("./components/NoLink.vue"),
    CreateLink: () => import("./components/CreateLink.vue")
  },
}
</script>
