<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  created() {
    let elHtml = document.getElementsByTagName("html")[0];
    elHtml.classList.add("hide");
  },
};
</script>

<style>
.hide {
}
/* width */
.hide::-webkit-scrollbar {
  width: 0px;
}
/* Track */
.hide::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}
/* Handle */
.hide::-webkit-scrollbar-thumb {
  background: red;
  border-radius: 10px;
}
/* Handle on hover */
.hide::-webkit-scrollbar-thumb:hover {
  background: #b30000;
}

.hide_overlay {
  z-index: 0 !important;
}
</style>
