var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
    hot: true,
    historyApiFallback: true
}).listen(3000, 'localhost', function (error, result) {
    if (error) {
        console.log(error);
    }

    console.log('webpack-dev-server ready at http://localhost:3000');
});