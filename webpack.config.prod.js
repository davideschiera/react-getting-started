var config = require('./webpack.config.base');

config.entry = [
    './src/index'
];

config.output.filename = 'app.[hash].js';

config.module.loaders = [
    {
        test: /\.jsx$/,
        loaders: [
            'babel?presets[]=es2015,presets[]=react'
        ]
    }
];

module.exports = config;