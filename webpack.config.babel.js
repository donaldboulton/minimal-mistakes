import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
    entry: './webpack/app.jsx',
    output: {
        path: './build/',
        publicPath: '/',
        filename: './js/bundle.[chunkhash:8].js'
    },
    module: {
        loaders: [
            { test: /.jsx|.js?$/, loader: 'babel-loader' },
        ]
    },
    plugins: [
        new ExtractTextPlugin('./css/bundle.[chunkhash:8].css'),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            minify: false
        })
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
