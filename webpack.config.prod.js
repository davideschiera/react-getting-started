var config = require('./webpack.config.base');

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
        loaders: [
            'babel?presets[]=es2015,presets[]=react'
        ]
    }
];

module.exports = config;