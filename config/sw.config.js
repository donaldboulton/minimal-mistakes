module.exports = {
  staticFileGlobs: [
    '_site/assets/css/**.css',
    '_site/**.html',
    '_site/dest/assets/images/**.*',
    '_site/assets/js/**.js',
  ],
  stripPrefix: '_site/',
  runtimeCaching: [{
    urlPattern: '/',
    handler: 'networkFirst',
  }],
  root: '_site',
};
