const Webpack                             = require("webpack")
const WebpackDevServer                    = require("webpack-dev-server")
const merge                               = require("webpack-merge")
const WebpackBar                          = require("webpackbar")
const hasFlag                             = require("has-flag")
const getPort                             = require("get-port")
const chalk                               = require("chalk")
const webpackDevConfig                    = require("./webpack.dev")
const wueMeta                             = require("../wue.meta.json")


const webpackServerConfig = merge(
  webpackDevConfig,
  {
    plugins: [
      new WebpackBar({
        compiledIn: true,
        profile: true,
        reporter: {
          done (ctx) {
            delete require.cache[require.resolve("../wue.meta.json")]
            const config = require("../wue.meta.json")
  
            if (config && config.activatedAt) {
              console.log("\n" + chalk.bgGreen.black.bold(" BUILD "))
              console.log("Template is running at " + wueMeta.baseUrl + "\n")
            } else {
              console.log("\n" + chalk.bgRed.white.bold(" ERROR "))
              console.log("Please active this theme in Wordpress admin panel.\n")
            }
          }
        }
      })
    ],
    devServer: {
      open: hasFlag("--open") || hasFlag("-o"),
      historyApiFallback: true,
      noInfo: true,
      writeToDisk: true,
      proxy: {
        "**": wueMeta.baseUrl
      }
    }
  }
)

const initServer = async () => {
  const port = await getPort()
  const host = "localhost"

  webpackServerConfig.devServer.port = port
  webpackServerConfig.devServer.host = host

  const compiler = Webpack(webpackServerConfig)
  const server = new WebpackDevServer(
    compiler, 
    webpackServerConfig.devServer
  )

  server.listen(port, host)
  return server
}

initServer()