<template>
  <v-card
    flat
    color="#0096B7"
    min-height="150"
    class="rounded-lg currentBallance"
  >
    <div class="content d-flex flex-column">
      <span class="text-body-1 font-weight-bold white--text"
        >Current Ballance</span
      >
      <span class="text-h6 white--text">₦ 1,200,000.90</span>
      <span class="text-caption white--text">Ledger Balance: ₦1,229</span>
    </div>
  </v-card>
</template>

<style scoped>
.currentBallance {
  position: relative;
}

.currentBallance .content {
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translate(10px, -50%);
}

.currentBallance .content .contentButton {
  width: 50%;
  color: #9459fd;
}

.v-card {
  background-color: transparent;
}
</style>
