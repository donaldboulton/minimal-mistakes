const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        main: './webpack/entry.js',
    },
    output: {
      // we're going to put the generated file in the assets folder so jekyll will grab it.
        path: '/src/assets/javascripts/',
        filename: "bundle.js"
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules)/,
          loader: 'babel-loader',
          query: {
            presets: ['react', 'es2015']
          }
        }
      ]
    }
  };
