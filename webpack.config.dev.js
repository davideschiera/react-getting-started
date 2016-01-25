var config = require('./webpack.config.base');
var webpack = require('webpack');

config.entry = {
    app: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/index'
    ],
    vendor: [
        'react',
        'moment'
    ]
};

config.output.filename = '[name].js';

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