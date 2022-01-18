module.exports = {
  transpileDependencies: ["vuetify"],

  devServer: {
    proxy: "https://dev.trustpaddi.com/api/v1",
  },
}
