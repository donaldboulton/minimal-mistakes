const CopyWebpackPlugin = require('copy-webpack-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const path = require('path');

new CopyWebpackPlugin([
  {
    from: path.resolve(__dirname, '../static'),
    to: config.build.assetsSubDirectory,
    ignore: ['.*']
  },
  {
    // copy custom service worker
    from: path.resolve(__dirname, '../src/firebase-messaging-sw.js'),
    to: config.build.assetsRoot + '/[name].js',
    transform: (content, path) => {
      // and transpile it while copying
      return babel.transformFileSync(path).code;
    }
  }
]),
// service worker caching
new SWPrecacheWebpackPlugin({
    cacheId: 'teste',
    importScripts: [
      {
        // transformed custom-service-worker (es6 -> js)
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
