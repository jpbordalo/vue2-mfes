const { defineConfig } = require("@vue/cli-service");
const path = require("path");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "http://localhost:9000",
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
        name: "mfe1",
        filename: "mfe1.js",
        exposes: {
          "./FakeComponentA": "./src/components/FakeComponentA",
          "./Store": "./src/store/modules/counter.module.js",
        },
        shared: require("./package.json").dependencies,
      }),
    ],
  },
  devServer: {
    port: 9000,
  },
});
