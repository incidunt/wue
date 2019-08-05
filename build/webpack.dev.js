const merge                               = require("webpack-merge")
const CleanTerminalPlugin                 = require("clean-terminal-webpack-plugin")
const WatchExternalFilesPlugin            = require("webpack-watch-files-plugin")
const path                                = require("path")
const webpackBaseConfig                   = require("./webpack.base")
const wueConfig                           = require("./utils/wueConfig")


module.exports = merge(
  webpackBaseConfig, 
  {
    mode: "development",
    watch: true,
    watchOptions: {
      ignored: /node_modules/
    },
    plugins: [
      new CleanTerminalPlugin(),
      new WatchExternalFilesPlugin.default({
        files: [
          path.resolve(__dirname, "../wue.meta.json")
        ]
      }),
    ]
  },
  wueConfig.webpack,
  wueConfig.webpackDev
)