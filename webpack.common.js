const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Glob = require('glob');

entry: Glob.sync('./src/scripts/*.js')

module.exports = {
    entry: Glob.sync('./app/**/*.js'),

    output: {
        path: path.join(__dirname, 'dist', 'js')
    }, 

    module: {
        rules: [
            {
                test: /\.((png)|(eot)|(woff)|(woff2)|(ttf)|(svg)|(gif))(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file-loader?name=/[hash].[ext]"
            },
            {
                loader: "babel-loader",
                test: /\.js?$/,
                exclude: /node_modules/,
                query: {cacheDirectory: true}
            },
            {
                test: /\.(sa|sc|c)ss$/,
                exclude: /node_modules/,
                use: ["style-loader", MiniCssExtractPlugin]
            }
        ]
    },

    plugins: [
    ]
}