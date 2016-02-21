var config = require('./webpack.config.base');
var webpack = require('webpack');
var path = require('path');

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
        include: [
            path.join(__dirname, 'src')
        ],
        loaders: [
            'react-hot',
            'babel?presets[]=es2015,presets[]=react'
        ]
    },
    {
        test: /\.js$/,
        include: [
            path.join(__dirname, 'src')
        ],
        loaders: [
            'babel?presets[]=es2015'
        ]
    }
];

config.plugins.push(
    new webpack.HotModuleReplacementPlugin()
);

module.exports = config;