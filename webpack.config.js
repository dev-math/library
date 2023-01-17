const webpack = require("webpack");
const path = require("path");

const config = {
  entry: "./src/index.jsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".jsx", "..."],
  },
  module: {
    rules: [
      {
        use: "babel-loader",
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
      },
      {
        use: ["style-loader", "css-loader"],
        test: /\.css$/,
      },
      {
        test: /\.svg$/,
        use: "file-loader",
      },
    ],
  },
  devServer: {
    port: 3000,
    static: {
      directory: path.join(__dirname, "public"),
      watch: true,
    },
    open: true,
    devMiddleware: {
      publicPath: "/dist",
    },
    historyApiFallback: true,
  },
  watchOptions: {
    poll: 1000,
    ignored: ["node_modules"],
  },
};

module.exports = config;
