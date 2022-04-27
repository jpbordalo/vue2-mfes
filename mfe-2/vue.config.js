const { defineConfig } = require("@vue/cli-service");
const path = require("path");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;

module.exports = defineConfig({
  transpileDependencies: ["vuetify"],
  publicPath: "http://localhost:9080",
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    optimization: {
      splitChunks: false,
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "mfe2",
        filename: "mfe2.js",
        exposes: {
          "./FakeComponentB": "./src/components/FakeComponentB",
          "./vuetifyMfes": "./src/plugins/vuetify",
        },
        shared: require("./package.json").dependencies,
      }),
    ],
  },
  devServer: {
    port: 9080,
  },
});
