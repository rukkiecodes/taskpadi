<template>
  <v-card flat color="#6200EA" min-height="150" class="rounded-lg withdrawableBallance">
    <div class="content d-flex flex-column">
      <span class="text-body-1 font-weight-bold white--text"
        >Withdrawable Balance</span
      >
      <span class="text-h6 white--text">₦480,000.90</span>
    </div>
  </v-card>
</template>


<style scoped>
.withdrawableBallance {
  position: relative;
}

.withdrawableBallance .content {
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translate(10px, -50%);
}

.v-card {
  background-color: transparent;
}
</style>
