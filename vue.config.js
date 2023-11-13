const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,

  devServer: {
    proxy: {
      // Configure a proxy for your API endpoint
      "/api": {
        target: "http://localhost:49825", // Change this to your API's URL
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
});
