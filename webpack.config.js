var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: ["./webpack/components/App.js", "./webpack/components/Main.js", "./webpack/components/Site.js", "./webpack/components/Comments.js", "./webpack/components/Reviews.js", "./webpack/components/File.js", "./webpack/components/Realtime.js", "./webpack/components/letter.avatar.js"],
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
    new BundleAnalyzerPlugin({
        analyzerMode: 'static'
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  resolve: {
    alias: {
        'letter-avatar': 'assets/js/vendor/letter-avatar/letter.avatar.js'
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
            { loader: "style-loader" },
            { loader: "css-loader" },
        ]
      },
      {
        test: /\.useable\.css$/,
        use: [
          {
            loader: "style-loader/useable"
          },
          { loader: "css-loader" },
        ],
      },
      {
        test: /\.js$/,
        use: [ 'script-loader' ]
      },
      {
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
      },
      {
        test: /\.worker\.js$/,
        use: { loader: 'worker-loader' }
      }
    ]
  },
};
