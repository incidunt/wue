const Webpack                             = require("webpack")
const { VueLoaderPlugin }                 = require("vue-loader")
const { CleanWebpackPlugin }              = require("clean-webpack-plugin")
const chalk                               = require("chalk")
const path                                = require("path")
const webpackModule                       = require("./webpack.module")
const wueMeta                             = require("../wue.meta.json")


if (!wueMeta || !wueMeta.activatedAt) {
  console.log("\n" + chalk.bgRed.white.bold(" ERROR "))
  console.log("Please active this theme in Wordpress admin panel.\n")
  throw new Error("Please active this theme in Wordpress admin panel.")
}

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "../dist"),
    publicPath: wueMeta.publicPath + "/",
    filename: "app.bundle.js",
    chunkFilename: '[name].[chunkhash].js'
  },
  resolve: {
    extensions: [" ", ".js", ".vue"],
    alias: {
      "@": path.resolve(__dirname, "../src"),
      "wue-wpapi": path.resolve(__dirname, "./utils/wpapi.js")
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new Webpack.ProvidePlugin({
      wpapi: ["wue-wpapi", "default"]
    })
  ],
  module: webpackModule
}