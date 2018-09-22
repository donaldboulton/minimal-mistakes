module.exports = {  
  staticFileGlobs: [
    '_site/assets/**.css',
    '_site/**.html',
    '_site/assets/images/**.*',
    '_site/assets/**.js',
  ],
  importScripts: [
    'public/firebase-messaging-sw.js'
  ],
  stripPrefix: '_site/',
  runtimeCaching: [{
    urlPattern: '/',
    handler: 'networkFirst',
  }],
  root: '_site',
};
