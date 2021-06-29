<template>
  <v-container class="how_it_works">
    <div class="head_text">
      <p>How it works</p>
    </div>
    <div class="how_it_works_cards">
      <div v-for="(card, index) in cards" :key="index" class="how_it_works_card">
        <img :src="card.image" alt="">
        <span v-text="card.text" />
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    cards: [
      {
        image: require("../../assets/trust/homepage icons/Group 112.svg"),
        text:
          "Lorem ipsum dolor sit amet consectrur disciping Lorem ipsum dolor sit amet consectrur. Lorem ipsum dolor sit amet consectrur.",
      },
      {
        image: require("../../assets/trust/homepage icons/Group 113.svg"),
        text:
          "Lorem ipsum dolor sit amet consectrur disciping Lorem ipsum dolor sit amet consectrur. Lorem ipsum dolor sit amet consectrur.",
      },
      {
        image: require("../../assets/trust/homepage icons/Group 115.svg"),
        text:
          "Lorem ipsum dolor sit amet consectrur disciping Lorem ipsum dolor sit amet consectrur. Lorem ipsum dolor sit amet consectrur.",
      },
      {
        image: require("../../assets/trust/homepage icons/Group 117.svg"),
        text:
          "Lorem ipsum dolor sit amet consectrur disciping Lorem ipsum dolor sit amet consectrur. Lorem ipsum dolor sit amet consectrur.",
      },
      {
        image: require("../../assets/trust/homepage icons/Group 118.svg"),
        text:
          "Lorem ipsum dolor sit amet consectrur disciping Lorem ipsum dolor sit amet consectrur. Lorem ipsum dolor sit amet consectrur.",
      },
    ],
  }),
};
</script>

<style scoped>
@import url(../../assets/styles/how_it_works.css);
</style>
