/* eslint-disable import/no-extraneous-dependencies */
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');
const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const webpack = require('webpack');

module.exports = Merge(CommonConfig, {
  output: {
    filename: '[name].bundle.js',
    path: path.resolve('assets'),
    publicPath: '/assets/',
  },
  devtool: 'inline-source-map',
  plugins: [
    new BrowserSyncPlugin(
      {
        host: 'localhost',
        port: 3000,
        proxy: 'http://localhost:8080',
        files: ['_site', '_src'],
      },
      {
        reload: false,
      }
    ),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /worker\.js$/,
        loader: require.resolve('worker-loader'),
      }
    ]
  },
  devServer: {
    proxy: {
      "/.netlify": {
        target: "http://localhost:9000",
        pathRewrite: { "^/.netlify/functions": "" }
      }
    },
    contentBase: [
      path.resolve('_site'),
    ],
    hot: true,
  }
});
