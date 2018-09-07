const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: ['./webpack/entry.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].[id].js',
    publicPath: '/'
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
    })
  ],
  optimization: {
    splitChunks: {
       chunks: 'all',
       minSize: 100000
    }
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
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
};
