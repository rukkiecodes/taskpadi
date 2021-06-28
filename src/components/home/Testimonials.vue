<template>
  <v-container class="testimonials">
    <div class="slide">
      <VueSlickCarousel class="slide_slick" :slidesToShow="3" :arrows="true" :dots="true">
        <div class="card">1</div>
        <div class="card">2</div>
        <div class="card">3</div>
      </VueSlickCarousel>
    </div>
  </v-container>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: "MyComponent",
  components: { VueSlickCarousel },
};
</script>

<style scoped>
@import url(../../assets/styles/testimonials.css);
</style>
