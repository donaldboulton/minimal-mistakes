var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: ['./webpack/entry.js'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].[id].js',
  },
  mode: 'production',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './build',
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
        cacheGroups: {
            commons: {
                test: /[\\/]node_modules[\\/]/,
                name: "vendors",
                chunks: "all"
            }
        }
    }
  },
  resolve: {
    alias: {
        'letter-avatar': 'util/letter.avatar.js'
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
