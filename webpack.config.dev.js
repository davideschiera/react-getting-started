var config = require('./webpack.config.base');
var webpack = require('webpack');

config.entry = [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
];

config.output.filename = 'app.js';

config.module.loaders = [
    {
        test: /\.jsx$/,
        loaders: [
            'react-hot',
            'babel?presets[]=es2015,presets[]=react'
        ]
    }
];

config.plugins.push(
    new webpack.HotModuleReplacementPlugin()
);

module.exports = config;