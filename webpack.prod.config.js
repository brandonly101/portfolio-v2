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
                loaders: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader?sourceMap']
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
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: "commons",
        //     // (the commons chunk name)

        //     filename: "commons.js",
        //     // (the filename of the commons chunk)

        //     // minChunks: 3,
        //     // (Modules must be shared between 3 entries)

        //     // chunks: ["pageA", "pageB"],
        //     // (Only use these entries)
        // }),
        new webpack.optimize.LimitChunkCountPlugin({maxChunks: 15}),
        new webpack.optimize.MinChunkSizePlugin({minChunkSize: 10000}),
        new webpack.optimize.UglifyJsPlugin(), // minify everything
        new webpack.optimize.AggressiveMergingPlugin() // Merge chunks
    ]
};
