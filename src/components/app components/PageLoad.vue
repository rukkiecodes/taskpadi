<template>
  <div class=""></div>
</template>

<script>
export default {
  data: () => ({
    percent: 0,
  }),

  mounted() {
    this.$nextTick(() => {
      this.openLoading()
    })
  },
  methods: {
    openLoading() {
      const loading = this.$vs.loading({
        percent: this.percent,
        text: 'Loading...',
        background: "#fff",
        opacity: 1,
        type: "border",
        scale: 2,
      })
      const interval = setInterval(() => {
        if (this.percent <= 100) {
          loading.changePercent(`${this.percent++}%`)
        }
      }, 40)
      setTimeout(() => {
        loading.close()
        clearInterval(interval)
        this.percent = 0
      }, 4800)
    },
  },
}
</script>
