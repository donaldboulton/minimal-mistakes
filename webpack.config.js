const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: ['./webpack/entry.js'],
  output: {
    path: path.resolve(__dirname, 'dest'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].[id].js',
  },
  mode: 'production',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dest',
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
      {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'bundle-loader',
            options: {
              name: 'my-chunk',
            }
          }
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
};
