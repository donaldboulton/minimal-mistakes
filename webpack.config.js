module.exports = {
  entry: { js: './src/main.js' },
  output: { path: `${__dirname}/`, filename: 'app.js' },
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
