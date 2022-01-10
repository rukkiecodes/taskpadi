<template>
  <v-card flat :width="width">
    <v-card-actions class="align-start">
      <v-textarea
        color="deep-purple accent-4"
        outlined
        label="Ask a Question"
      ></v-textarea>
      <div class="d-flex flex-column ml-4">
        <v-btn color="deep-purple accent-4" dark depressed>
          <v-icon>mdi-camera</v-icon>
        </v-btn>
        <v-btn class="mt-4" color="deep-purple accent-4" dark depressed>
          <v-icon>mdi-send</v-icon>
        </v-btn>
      </div>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  computed: {
    width() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "100%";
        case "sm":
          return "80%";
        case "md":
          return "70%";
        case "lg":
          return "65%";
        case "xl":
          return 800;
      }
    },
  },
};
</script>
