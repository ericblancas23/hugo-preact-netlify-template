const merge = require('webpack-merge');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const common = require('./webpack.common');

module.exports = (common, {
    output: {
        filename: '[name].js',
        chunkFilename: '[id].css'
    },
    devServer: {
        port: process.env.PORT || 3000,
        contentBase: path.join(process.cwd(), './dist'),
        watchContentBase: true,
        quiet: false,
        open: true,
        historyApiFallback: {
            rewrites: []
        }
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                'dist/**/*.js',
                'dist/**/*.css',
            ]}),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ]
});