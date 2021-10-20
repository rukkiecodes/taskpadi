<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        text
        v-on="on"
        depressed
        height="100%"
        v-bind="attrs"
        color="grey darken-3"
        class="text-capitalize py-0 ml-3"
      >
        <v-avatar left class="mr-2" size="35">
          <img src="../../../../assets/trust/Ellipse3.png" >
        </v-avatar>
        Eddiong
        <v-icon right>mdi-chevron-down</v-icon>
      </v-btn>
    </template>
    <v-list>
      <v-list-item v-for="(item, index) in items" :key="index">
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  data: () => ({
    items: [
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2" },
    ],
  }),
}
</script>
