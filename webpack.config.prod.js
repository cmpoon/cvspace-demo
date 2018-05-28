var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

const serverURL = process.env.SERVER_URL || "http://beta.cv.cmpoon.com/v1/";
const appURL = process.env.APP_URL || "http://beta.cv.cmpoon.com/";


module.exports = {
  entry: ["./cvbuilder/app", "babel-polyfill"],
  node: {
    fs: "empty"
  },
  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.js",
    publicPath: "/"
  },
  plugins: [
    new webpack.IgnorePlugin(/^(buffertools)$/), // unwanted "deeper" dependency
    new ExtractTextPlugin("styles.css", {allChunks: true}),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production"),
        SERVER_URL: JSON.stringify(serverURL),
        APP_URL: JSON.stringify(appURL),
      },
    })
  ],
  resolve: {
    extensions: ["", ".js", ".jsx", ".css"]
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: "babel",
        include: [
          path.join(__dirname, "src"),
          path.join(__dirname, "cvbuilder"),
        ],
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("css-loader"),
        include: [
          path.join(__dirname, "css"),
          path.join(__dirname, "cvbuilder"),
          path.join(__dirname, "node_modules"),
        ],
      },
      {
        test: /\.less$/,
        loader: "style!css!less"
      },
      {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff"},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream"},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml"},
      {test: /\.jpg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/jpeg"}
    ]
  }
};
