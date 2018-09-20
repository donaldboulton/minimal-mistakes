/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')

const PUBLIC_PATH = 'https://donboulton.com/';

module.exports = {
  entry: {
    common: ['firebase'],
    app: './_src/index.js',
  },
  plugins: [
    new FaviconsWebpackPlugin({
      logo: './favicon.png',
      background: '#212529',
    }),
    new HtmlWebpackPlugin({
      template: './_src/template/default.html',
      filename: '../_layouts/default.html',
    }),
    new ExtractTextPlugin('[name].css'),
    new CopyWebpackPlugin([{
      from: path.resolve('_images'),
      to: 'images/',
    }]),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    new SWPrecacheWebpackPlugin({
      cacheId: 'donboulton',
      filename: 'service-worker.js',
      staticFileGlobs: [
        '_site/assets/**.css',
        '_site/**.html',
        '_site/assets/images/**.*',
        '_site/assets/**.js',
        '/'
      ],
      stripPrefix: '_site/',
      runtimeCaching: [{
        urlPattern: '/',
        handler: 'networkFirst',
      }],
      root: '_site',
      importScripts: [{
        chunkName: 'firebase-messaging-sw' 
      }]
    })
  ],
  devServer: {
    contentBase: './assets',
    port: 3000,
  },
  node: {
    fs: 'empty',
    tls: 'empty',
    net: 'empty',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ 'env', 'react' ],
          },
        },
      },
      {
        test: /\.(css|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { importLoaders: 1 } },
            {
              loader: 'postcss-loader',
              options: {
                config: {
                  path: 'config/postcss.config.js',
                },
              },
            },
            { loader: 'sass-loader' },
          ],
        }),
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
};
