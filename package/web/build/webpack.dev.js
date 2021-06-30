const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {
    merge
} = require('webpack-merge')
const commonConfig = require('../../common/webpack.base.js')

module.exports = merge(commonConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    context: __dirname,
    entry: {
        index: path.join(__dirname, '../src/main.tsx')
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 7788,
        hot: true,
        open: true,
        watchOptions: {
            aggregateTimeout: 300,
            ignored: /node_modules/
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: '../index.html'
        })
    ],
})