module.exports = {
  entry: { js: './admin/main.js' },
  output: { path: `${__dirname}/admin`, filename: 'index.js' },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  devtool: 'source-map'
};
