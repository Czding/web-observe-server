const path = require('path')
const { merge } = require('webpack-merge')
const commonConfig = require('../../common/webpack.base.js')
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin')

module.exports = merge(commonConfig, {
    mode: 'production',
    entry: {
        index: '../src/main.tsx'
    },
    output: {
        path: path.join(__dirname, '../../dist/web')
    },
    plugins: [
        new CleanWebpackPlugin()
    ],
    optimization: {
        concatenateModules: false
    }
})