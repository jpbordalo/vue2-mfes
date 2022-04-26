const { defineConfig } = require("@vue/cli-service");
const path = require("path");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "http://localhost:8080/",
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
        name: "shell",
        filename: "shell.js",
        remotes: {
          mfe1: "mfe1@http://localhost:9000/mfe1.js",
          mfe2: "mfe2@http://localhost:9080/mfe2.js",
          // mfe1: "mfe1@../mfe-1/dist/mfe1.js",
        },
        // shared: require("./package.json").dependencies,
      }),
    ],
  },
  devServer: {
    port: 8080,
  },
});
