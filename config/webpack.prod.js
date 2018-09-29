/* eslint-disable import/no-extraneous-dependencies */
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');
const path = require('path');
const webpack = require('webpack');
const WebpackCleanPlugin = require('webpack-clean-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

module.exports = Merge(CommonConfig, {
  output: {
    filename: '[name]-[hash].bundle.js',
    chunkFilename: '[name]-[chunkhash].js',
    path: path.resolve('assets'),
    publicPath: '/assets/',
  },
  plugins: [
    new WebpackCleanPlugin(['assets'], { root: path.resolve(__dirname, '..'), verbose: true }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i }),
  ],
});
