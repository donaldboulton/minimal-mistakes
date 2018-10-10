/* eslint-disable import/no-extraneous-dependencies */
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  entry: {
    common: ['lazysizes, file-upload-with-preview, express, react, react-dom'],
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
    new BundleAnalyzerPlugin(),
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
        exclude: /node_modules\/svg4everybody/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react'],
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
      {
        test: require.resolve("svg4everybody"),
        loader: "imports-loader?this=>window"
      }
    ],
  },
};
