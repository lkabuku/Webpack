const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

const config = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    boilerplate: './bundles/boilerplate/app.js',
  },
  output: {
    path: path.resolve(__dirname, './public'),
    filename: './[name]/bundle.js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      hash: true,
      cache: true
    })
  ]
}

module.exports = config;