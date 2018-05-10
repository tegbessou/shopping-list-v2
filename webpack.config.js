var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: 'bundle.js',
        publicPath: ''
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-3']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
            },
            {
                test: /\.(jpeg|jpg|png|gif|svg|pdf|ico)$/,
                use: [
                    {
                        loader: 'url-loader'
                    },
                ]
            }
        ],
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
        inject: 'body'
    })],
    devServer:{
        historyApiFallback: true,
    }
}
