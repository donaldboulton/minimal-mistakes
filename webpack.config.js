var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    main: './webpack/entry.js',
    app: './webpack/components/App.jsx',
    vendor: './webpack/components/vendor.js'
  },
  output: {
    path: path.resolve(__dirname, 'assets/js/'),
    publicPath: "/assets/",
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunckhash.js',
  },
  mode: 'production',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: 'assets/js/',
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
        path.resolve('assets/js/'),
        path.resolve('./node_modules'),
    ]
  },
  module: {
    rules: [
      {
        test: /.jsx|.js?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
            { loader: "style-loader/url" },
            { loader: "file-loader" }
        ]
      },
      {
        test: /\.js$/,
        use: [ 'script-loader' ]
      }
    ]
  },
};
