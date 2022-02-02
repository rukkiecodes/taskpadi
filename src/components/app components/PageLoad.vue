<template>
  <div></div>
</template>

<script>
export default {
  mounted() {
    this.$nextTick(() => {
      this.openLoading()
    })
  },
  methods: {
    openLoading() {
      const loading = this.$vs.loading({
        scale: 2,
        opacity: 1,
        type: "scale",
      })
      setTimeout(() => {
        loading.close()
      }, 3000)
    },
  },
}
</script>
