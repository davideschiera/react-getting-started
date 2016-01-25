var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: 'build',
        filename: 'app.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loader: 'babel?presets[]=react'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            title: 'React - Getting Started',
            template: './src/index.html'
        })
    ]
};