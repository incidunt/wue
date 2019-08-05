

module.exports = {
  rules: [
    {
      test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
      use: [
        "file-loader"
      ]
    },
    {
      test: /\.css$/,
      use: [
        "vue-style-loader",
        "css-loader"
      ]
    },
    {
      test: /\.vue$/,
      loader: "vue-loader"
    },
    {
      test: /\.js$/,
      loader: "babel-loader",
      exclude: /node_modules/
    }
  ]
}