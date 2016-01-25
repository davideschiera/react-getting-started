var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    entry: [],
    output: {
        path: path.join(__dirname, 'build')
    },
    devtool: 'source-map',
    module: {
        loaders: []
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            title: 'React - Getting Started',
            template: './src/index.html'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunk: 2
        })
    ]
};