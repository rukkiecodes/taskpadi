<template>
  <v-container class="mx-auto">
    <v-sheet height="300" color="#210070" class="rounded-xl mx-auto">
      <v-img
        eager
        height="100%"
        src="../../assets/trust/home/wave.svg"
        class="rounded-xl d-flex justify-center align-center text-center"
      >
        <Title
          :title="title"
          class="white--text text-h4 font-weight-bold"
          style="font-family: 'Montserrat', sans-serif !important;"
        />
        <v-btn
          dark
          large
          rounded
          depressed
          width="150"
          color="amber darken-3"
          class="text-capitalize"
          >Get Started</v-btn
        >
      </v-img>
    </v-sheet>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    title: `"It's Better Safe than sorry"`,
  }),
  components: {
    Title: () => import("../app components/Title.vue"),
  },
}
</script>
