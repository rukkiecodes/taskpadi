<template>
  <v-container class="testimonials">
    <div class="head_text">
      <p>Why use Trustpaddi</p>
    </div>
    <div class="slide">
      <v-sheet class="mx-auto sheet" elevation="0">
        <v-slide-group
          v-model="model"
        >
          <v-slide-item v-for="(card, index) in cards" :key="index">
            <v-card width="320" flat class="ma-4 sheet_card rounded-xl px-6 py-12">
              <v-card-text class="ma-0 pa-0">
                <div class="head mb-5">
                  <div class="icon">
                    <v-icon size="80">{{ card.icon }}</v-icon>
                  </div>
                </div>
              </v-card-text>
              <v-card-text class="ma-0 pa-0 texts">
                <p class="p1 text-h6 font-weight-bold">{{ card.title }}</p>
                <p class="p2 text-body-2">{{ card.text }}</p>
              </v-card-text>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    cards: [
      {
        icon: "mdi-account",
        title: "Victory Roberts",
        text: `Lorem ipsum dolor sit amet lorem consectrur disciping Lorem ipsum
              dolor sit amet consectrur. Lorem ipsum dolor sit amet lorem
              consectrur disciping Lorem ipsum dolor sit amet consectrur.Lorem
              ipsum dolor sit amet lorem consectrur disciping Lorem ipsum dolor
              sit amet consectrur.`,
      },
      {
        icon: "mdi-account",
        title: "Victory Roberts",
        text: `Lorem ipsum dolor sit amet lorem consectrur disciping Lorem ipsum
              dolor sit amet consectrur. Lorem ipsum dolor sit amet lorem
              consectrur disciping Lorem ipsum dolor sit amet consectrur.Lorem
              ipsum dolor sit amet lorem consectrur disciping Lorem ipsum dolor
              sit amet consectrur.`,
      },
      {
        icon: "mdi-account",
        title: "Victory Roberts",
        text: `Lorem ipsum dolor sit amet lorem consectrur disciping Lorem ipsum
              dolor sit amet consectrur. Lorem ipsum dolor sit amet lorem
              consectrur disciping Lorem ipsum dolor sit amet consectrur.Lorem
              ipsum dolor sit amet lorem consectrur disciping Lorem ipsum dolor
              sit amet consectrur.`,
      },
      {
        icon: "mdi-account",
        title: "Victory Roberts",
        text: `Lorem ipsum dolor sit amet lorem consectrur disciping Lorem ipsum
              dolor sit amet consectrur. Lorem ipsum dolor sit amet lorem
              consectrur disciping Lorem ipsum dolor sit amet consectrur.Lorem
              ipsum dolor sit amet lorem consectrur disciping Lorem ipsum dolor
              sit amet consectrur.`,
      },
    ],
    model: null,
  }),
};
</script>

<style scoped>
@import url(../../assets/styles/testimonials.css);
</style>
