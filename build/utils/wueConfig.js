let config = {
  webpack: {},
  webpackDev: {},
  webpackProd: {}
}

try {
  const projectConfig = require("../../wue.config")
  config = Object.assign(config, projectConfig)
}
catch (error) {
}

module.exports = config