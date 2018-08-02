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
            'client': './src/client.js',
        },
    }),
    Object.assign({}, config, {
        entry: {
            'service-worker': './sw.js',
        },
        target: 'webworker',
    }),
];
