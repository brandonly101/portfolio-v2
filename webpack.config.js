var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        './index.js'
    ],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/public/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loaders: [ 'babel-loader' ],
                exclude: /node_modules/
            },
            {
                test   : /\.scss$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader'
                    },
                    { loader: 'resolve-url-loader' },
                    { loader: 'sass-loader?sourceMap' }
                ]
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.(png|jpg|jpeg|[ot]tf)$/,
                loaders: [ 'file-loader' ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
