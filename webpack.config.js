var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: ['./webpack/entry.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js',
  },
  mode: 'production',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    port: 3000
  },
  node: {
    fs: "empty",
    tls: "empty",
    net: "empty"
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
        options: {
            worker: {
                output: {
                    filename: "./worker.js",
                    chunkFilename: "[id].hash.worker.js"
                }
            }
        }
    }),
    new BundleAnalyzerPlugin({
        analyzerMode: 'static'
    })
  ],
  optimization: {
    splitChunks: {
       chunks: 'all',
       minSize: 100000
    }
  },
  resolve: {
    alias: {
        'passive-events': 'node_modules/default-passive-events/dist/index.js',
        'letter-avatar': 'util/letter-avatar.js'
    },
    modules: [
        path.resolve('./'),
        path.resolve('./node_modules'),
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
      }
    ]
  },
};
