const path = require('path')
const {
    merge
} = require('webpack-merge')
const commonConfig = require('../common/webpack.base.js')

module.exports = merge(commonConfig, {
    mode: 'production',
    entry: {
        index: './index.ts'
    },
    output: {
        path: path.join(__dirname, '../../dist/client')
    }
})