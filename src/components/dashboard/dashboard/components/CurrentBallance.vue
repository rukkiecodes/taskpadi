<template>
  <v-card flat outlined min-height="150" class="rounded-lg currentBallance">
    <img
      class="cardImage"
      src="../../../../assets/trust/currentBallance.png"
      alt=""
    />

    <div class="content d-flex flex-column">
      <span class="text-body-1 font-weight-bold grey--text text--darken-1"
        >Current Ballance</span
      >
      <span class="text-h6 grey--text text--darken-1">₦ 1,200,000.90</span>
      <span class="text-caption grey--text text--darken-1"
        >Ledger Balance : ₦ 1,229</span
      >
      <vs-button
        color="#F2EBFF"
        class="contentButton ml-0 font-weight-bold"
        size="small"
      >
        -13.34%
      </vs-button>
    </div>
  </v-card>
</template>

<style scoped>
.currentBallance {
  position: relative;
}

.currentBallance .cardImage {
  position: absolute;
  bottom: 0;
  right: 10px;
  width: 30%;
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
