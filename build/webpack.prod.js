const merge                               = require("webpack-merge")
const UglifyJsPlugin                      = require("uglifyjs-webpack-plugin")
const webpackBaseConfig                   = require("./webpack.base")
const wueConfig                           = require("./utils/wueConfig")


module.exports = merge(
  webpackBaseConfig, 
  {
    mode: "production",
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          exclude: /node_modules/
        })
      ]
    }
  },
  wueConfig.webpack,
  wueConfig.webpackProd
)