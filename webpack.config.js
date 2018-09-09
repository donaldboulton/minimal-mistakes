var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: ['./webpack/entry.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].[id].js',
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
        cacheGroups: {
            commons: {
                chunks: "initial",
                minChunks: 2,
                maxAsyncRequests: 5,
                maxInitialRequests: 5, // The default limit is too small to showcase the effect
                minSize: 30000 // This is example is too small to create commons chunks
            },
            vendor: {
                test: /node_modules/,
                chunks: "initial",
                name: "vendor",
                priority: 10,
                enforce: true
            }
        }
    }
  },
  resolve: {
    alias: {
        'passive-events': 'node_modules/default-passive-events/dist/index.js',
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
