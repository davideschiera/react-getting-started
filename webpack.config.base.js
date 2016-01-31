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
        preLoaders: [
            {
                test: /\.jsx$/,
                include: [
                    path.join(__dirname, 'src')
                ],
                loader: 'eslint'
            }
        ],
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