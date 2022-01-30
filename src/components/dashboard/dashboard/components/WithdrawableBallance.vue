<template>
  <v-card flat outlined min-height="150" class="rounded-lg withdrawableBallance">
    <img
      class="cardImage"
      src="../../../../assets/trust/withdrawableBallance.png"
      alt=""
    />

    <div class="content d-flex flex-column">
      <span class="text-body-1 font-weight-bold grey--text text--darken-1"
        >Withdrawable Balance</span
      >
      <span class="text-h6 grey--text text--darken-1">₦ 480,000.90</span>
    </div>
  </v-card>
</template>


<style scoped>
.withdrawableBallance {
  position: relative;
}

.withdrawableBallance .cardImage {
  position: absolute;
  bottom: 0;
  right: 10px;
  width: 30%;
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
