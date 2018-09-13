import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
    entry: ["./webpack/components/App.js", "./webpack/components/Main.js", "./webpack/components/Site.js", "./webpack/components/Comments.js", "./webpack/components/Reviews.js", "./webpack/components/File.js", "./webpack/components/Realtime.js", "./webpack/components/worker.js"],
    output: {
        path: './assets/js/',
        publicPath: '/assets/',
        filename: './assets/js/[name]bundle.js'
    },
    module: {
        loaders: [
            { test: /.jsx|.js?$/, loader: 'babel-loader' },
        ]
    },
    plugins: [
        new ExtractTextPlugin('./css/[name]bundle.css'),
        new HtmlWebpackPlugin({
            template: './index.html',
            minify: false
        })
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
