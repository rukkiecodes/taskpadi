<template>
  <div class="center">
    <vs-button @click="openDialog" style="font-weight: bold" color="#6200EA"> Create transaction</vs-button>
    <vs-dialog width="457px" v-model="active">
      <template #header>
        <h4 class="not-margin">Create transaction</h4>
      </template>

      <div class="con-form">
        <v-row justify="space-between" align="start">
          <v-col cols="12" sm="6">
            <vs-input v-model="email" placeholder="Serial number"> </vs-input>
          </v-col>
          <v-col cols="12" sm="6">
            <vs-input v-model="email" placeholder="Product name"> </vs-input>
          </v-col>
          <v-col cols="12" sm="6">
            <vs-input v-model="email" placeholder="Product Type"> </vs-input>
          </v-col>
          <v-col cols="12" sm="6">
            <vs-input v-model="email" placeholder="Quantity"> </vs-input>
          </v-col>
          <v-col cols="12" sm="6">
            <vs-input v-model="email" placeholder="Amount"> </vs-input>
          </v-col>
          <v-col cols="12" sm="6">
            <vs-input v-model="email" type="date" placeholder="Start date"> </vs-input>
          </v-col>
          <v-col cols="12" sm="6">
            <vs-input v-model="email" type="date" placeholder="End date"> </vs-input>
          </v-col>
          <v-col cols="12" sm="6">
            <vs-input v-model="email" placeholder="Product status"> </vs-input>
          </v-col>
        </v-row>
      </div>

      <template #footer>
        <v-spacer />
        <div class="con-footer d-flex justify-end">
          <vs-button @click="active = false" transparent> Cansel </vs-button>
          <vs-button @click="active = false" color="#6200EA"> Create transaction</vs-button>
        </div>
      </template>
    </vs-dialog>
  </div>
</template>

<script>
export default {
  data: () => ({
    active: false,
    email: "",
    password: "",
    remember: false,
  }),

  methods: {
    openDialog() {
      this.active = true
      setTimeout(() => {
        const input = document.querySelectorAll(".vs-input")

        for (let i = 0; i <= input.length; i++) {
          input[i].style.width = "100%"
        }
      }, 10)
    },
  },
}
</script>
