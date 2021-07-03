<template>
  <div class="interactive_form_sides_card rounded-xl mx-4 pa-5">
    <div class="texts">
      <p class="text-h6">What are you selling?</p>
      <p class="text-caption mt-n3">
        Lorem ipsum dolor sit amet consectrur adis ampiscing Lorem dolor.
      </p>
    </div>
    <div class="icon mt-5">
      <v-icon size="40" class="white--text">mdi-cart-arrow-up</v-icon>
    </div>
    <v-select
      style="width: 100%"
      append-icon="mdi-chevron-down"
      dense
      flat
      :items="items"
      :label="items[0]"
      color="#4169E2"
      solo
      filled
      background-color="#fff"
      class="mt-10 rounded-lg"
    ></v-select>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: ["Accessories", "Bar", "Fizz", "Buzz"],
  }),
};
</script>

<style>
</style>