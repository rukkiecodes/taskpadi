<template>
  <v-card flat color="#ffffff" min-height="150" class="rounded-lg trustBallance">
    <div class="content d-flex flex-column">
      <span class="text-body-1 font-weight-bold grey--text text--darken-1"
        >Trust Ballance</span
      >
      <span class="text-h6 grey--text text--darken-1">₦380,000.90</span>
    </div>
  </v-card>
</template>

<style scoped>
.trustBallance {
  position: relative;
}

.trustBallance .content {
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translate(10px, -50%);
}
.v-card {
  background-color: transparent;
}
</style>
