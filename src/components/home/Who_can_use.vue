<template>
  <v-container class="who_can_use">
    <div class="who_can_use_head_text">
      <p class="p1">Who can use Trustpaddi</p>
    </div>

    <div class="who_can_use_cards">
      <div v-for="(card, index) in cards" :key="index" class="who_can_use_cards_card rounded-xl">
        <div class="img">
          <img :src="card.image" :alt="card.head" />
        </div>
        <div class="texts">
          <p class="p1 text-h6" v-text="card.head" />
          <p class="p2 text-body-2" v-text="card.body" />
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    cards: [
      {
        image: require("../../assets/trust/homepage icons/Group 139.svg"),
        head: "Lorem ipsum",
        body:
          "Lorem ipsum dolor sit amet lorem consectrur disciping Lorem ipsum dolor sit amet consectrur.",
      },
      {
        image: require("../../assets/trust/homepage icons/Group 140.svg"),
        head: "Lorem ipsum",
        body:
          "Lorem ipsum dolor sit amet lorem consectrur disciping Lorem ipsum dolor sit amet consectrur.",
      },
      {
        image: require("../../assets/trust/homepage icons/Group 141.svg"),
        head: "Lorem ipsum",
        body:
          "Lorem ipsum dolor sit amet lorem consectrur disciping Lorem ipsum dolor sit amet consectrur.",
      },
    ],
  }),
};
</script>

<style scoped>
@import url(../../assets/styles/who_can_use.css);
</style>
