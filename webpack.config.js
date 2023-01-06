const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.jsx', '...'],
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
      },
      {
        use: [
          'style-loader',
          'css-loader'
        ],
        test: /\.css$/
      }
    ]
  },
  devServer: {
    port: 3000,
    static: {
      directory: path.join(__dirname, 'public')
    },
    open: true,
  }
};

module.exports = config;
