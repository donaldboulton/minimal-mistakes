const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: ['babel-polyfill', './webpack/entry.js'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js',
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
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 2
        }
      }
    }
  },
  module: {
    rules: [
      {test: /\.(js|jsx)$/, exclude: /node_modules/, use: 'babel-loader'}
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
};
