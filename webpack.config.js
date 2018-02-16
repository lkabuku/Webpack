const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const config = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    boilerplate: './bundles/boilerplate/app.js',
  },
  output: {
    path: path.resolve(__dirname, './public'),
    filename: './[name]/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: ['babel-loader']
      },
      {
        test: /\.styl/,
        use: ExtractTextWebpackPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'stylus-loader']
        })
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './layouts/index.html',
      hash: true,
      // cache: true,
    }),
    new ExtractTextWebpackPlugin({
      filename: '[name]/bundle.css'
    }),
    new UglifyJsPlugin({
      // cache: true,
      // sourceMap: true
    })
  ]
}

module.exports = config;