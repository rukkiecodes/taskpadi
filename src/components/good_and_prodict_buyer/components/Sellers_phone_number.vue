<template>
  <div class="interactive_form_sides_card rounded-xl mx-4 pa-5 pb-0">
    <div class="texts">
      <p class="text-h6">Sellers phone number</p>
      <p class="text-caption mt-n3">
        Lorem ipsum dolor sit amet consectrur adis ampiscing Lorem dolor.
      </p>
    </div>
    <div class="icon mt-5">
      <v-icon size="45" class="white--text">mdi-phone</v-icon>
    </div>
    <v-text-field
      style="width: 100%"
      class="mt-10 rounded-lg"
      label="Sellers phone number"
      type="number"
      background-color="#fff"
      solo
      flat
    ></v-text-field>

    <!-- <v-select
      style="width: 100%"
      append-icon="mdi-chevron-down"
      dense
      flat
      :items="stocks"
      :label="stocks[0]"
      color="#4169E2"
      solo
      filled
      background-color="#fff"
      class="mt-10 rounded-lg"
    ></v-select> -->
  </div>
</template>

<script>
export default {};
</script>
