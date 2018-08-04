const config = {
    output: {
        filename: '[name].js',
        path: __dirname,
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }],
    },
};

module.exports = [
    Object.assign({}, config, {
        entry: {
            'client': './index.js',
        },
    }),
    Object.assign({}, config, {
        entry: {
            'service-worker': './service-worker.js',
        },
        target: 'webworker',
    }),
];
