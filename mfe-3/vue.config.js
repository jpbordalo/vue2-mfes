const { defineConfig } = require("@vue/cli-service");
const path = require("path");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "http://localhost:9090",
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
        name: "mfe3",
        filename: "mfe3.js",
        exposes: {
          "./FakeComponentC": "./src/components/FakeComponentC",
          "./AClass": "./src/models/AClass.js",
          "./config": "./src/models/Workflow.map.js",
          "./routes": "./src/routes.js",
          "./RouteComponent": "./src/components/RouteComponent",
        },
        shared: require("./package.json").dependencies,
      }),
    ],
  },
  devServer: {
    port: 9090,
  },
});
