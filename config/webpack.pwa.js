/* eslint-disable import/no-extraneous-dependencies */
const Merge = require('webpack-merge');
const ProdConfig = require('./webpack.prod.js');
const path = require('path');
const WebpackPwaManifest = require('webpack-pwa-manifest');

module.exports = Merge(ProdConfig, {
  plugins: [
    new WebpackPwaManifest({
      name: 'donboulton.com',
      short_name: 'DWB',
      description: 'A React Jekyll site with love',
      orientation: 'portrait',
      display: 'standalone',
      start_url: '/',
      theme_color: '#212529',
      background_color: '#1d1d1d',
      icons: [
        {
          src: path.resolve('favicon.png'),
          sizes: [96, 128, 192, 256, 384, 512],
        },
      ],
    }),
  ],
});
