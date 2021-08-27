<template>
  <v-col class="text-center text-heading text-sm-h6 text-md-h5" cols="12">
    <h1>{{ heading }}</h1>
  </v-col>
</template>

<script>
export default {
  props: ["heading"]
}
</script>