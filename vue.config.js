const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  // publicPath: process.env.NODE_ENV === "production" ? "/projet-vue/" : "/",
  transpileDependencies: true,
  outputDir: "docs",
  base: "/projet-vue/",
});
