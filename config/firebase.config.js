const path = require('path');
var babel = require("babel-core");
import { transform } from 'babel-core';
const CopyWebpackPlugin = require('copy-webpack-plugin');
const SWPrecache = require('sw-precache');

const PUBLIC_PATH = 'https://donboulton.com/';

new CopyWebpackPlugin([
  {
    from: path.resolve('public'),
      to: '/',
  },
  {
    // copy custom service worker
    from: path.resolve(__dirname, './public/firebase-messaging-sw.js'),
    to: config.build.assetsRoot + '/[name].js',
    transform: (content, path) => {
      // and transpile it while copying
      return babel.transformFileSync(path).code;
    }
  }
]),
// service worker caching
new SWPrecache({
    cacheId: 'donboulton',
    importScripts: [
      {
        filename: './public/firebase-messaging-sw.js'
      }
    ],
    filename: 'service-worker.js',
    staticFileGlobs: [
      '_site/assets/**.css',
      '_site/**.html',
      '_site/assets/images/**.*',
      '_site/assets/**.js',
    ],
    _staticFileGlobsIgnorePatterns: ['./public/firebase-messaging-sw.js'],
    get staticFileGlobsIgnorePatterns() {
      return this._staticFileGlobsIgnorePatterns;
    },
    set staticFileGlobsIgnorePatterns(value) {
      this._staticFileGlobsIgnorePatterns = value;
    },
    stripPrefix: '_site/',
    runtimeCaching: [{
      urlPattern: '/',
      handler: 'networkFirst',
  }],
  root: '_site'
})
