/* eslint-disable import/no-extraneous-dependencies */
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  entry: {
    common: ['firebase', 'loadash'],
    app: './_src/index.js',
  },
  plugins: [
    new FaviconsWebpackPlugin({
      logo: './favicon.png',
      background: '#212529',
    }),
    new HtmlWebPackPlugin({
      template: './_src/template/default.html',
      filename: '../_layouts/default.html',
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new WebpackMd5Hash(),
    new StyleLintPlugin({
      configFile: './postcss.config.js',
      files: './_src/*.css',
      syntax: 'css'
    }),
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
            plugins: ["syntax-dynamic-import", "transform-react-jsx"]
          },
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.(css|scss)$/,
          use: [
            'style-loader',
            MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
            'sass-loader'
          ]
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
