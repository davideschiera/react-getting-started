var config = require('./webpack.config.base');
var path = require('path');

config.entry = {
    app: [
        './src/index'
    ],
    vendor: [
        'react',
        'moment'
    ]
};

config.output.filename = '[name].[chunkhash].js';

config.module.loaders = [
    {
        test: /\.jsx$/,
        include: [
            path.join(__dirname, 'src')
        ],
        loaders: [
            'babel?presets[]=es2015,presets[]=react'
        ]
    }
];

module.exports = config;