const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    devServer: {
      disableHostCheck: true
    },
    entry: {
        polyfill: 'babel-polyfill',
        app: './src/index.js',
        'function-file': './function-file/function-file.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: 'html-loader'
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            chunks: ['polyfill', 'app']
        }),
        new HtmlWebpackPlugin({
            template: './function-file/function-file.html',
            filename: 'function-file/function-file.html',
            chunks: ['function-file']
        }),
        new CopyWebpackPlugin([
            { from: 'assets', to: 'assets' }
        ])
    ],
    output: {
      path: path.resolve(__dirname, "docs"),
      publicPath: "/docs/"
    }
};
