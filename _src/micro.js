const path = require('path');

const micro = (handlerRelativePath) => {
  const handlerPath = path.join(process.cwd(), handlerRelativePath);

  if (process.env.NODE_ENV === 'production') {
    const handler = require(handlerPath);
    const micro = require('micro');
    const server = micro(handler);
    server.listen(3000);
  } else {
    // Don't load packages if prod
    const flags = { silent: false, host: '::', port: 3000, limit: '1mb', _: {} };
    const micro = require('micro-dev/lib/serve');
    micro(handlerPath, flags);
  }
}

module.exports = micro;
