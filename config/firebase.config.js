const path = require('path');
var babel = require("babel-core");
import { transform } from 'babel-core';
import * as babel from 'babel-core';
const CopyWebpackPlugin = require('copy-webpack-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

new CopyWebpackPlugin([
  {
    from: path.resolve('_src'),
      to: '/',
  },
  {
    // copy custom service worker
    from: path.resolve(__dirname, './_src/firebase-messaging-sw.js'),
    to: config.build.assetsRoot + '/[name].js',
    transform: (content, path) => {
      // and transpile it while copying
      return babel.transformFileSync(path).code;
    }
  }
]),
// service worker caching
new SWPrecacheWebpackPlugin({
    cacheId: 'donboulton',
    importScripts: [
      {
        filename: 'firebase-messaging-sw.js'
      }
    ],
    filename: 'service-worker.js',
    staticFileGlobs: [
      '_site/assets/**.css',
      '_site/**.html',
      '_site/assets/images/**.*',
      '_site/assets/**.js',
    ],
    stripPrefix: '_site/',
    runtimeCaching: [{
      urlPattern: '/',
      handler: 'networkFirst',
  }],
  root: '_site'
});
