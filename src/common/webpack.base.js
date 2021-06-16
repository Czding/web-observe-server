module.exports = {
    resolve: {
        extensions: ['.js', '.ts']
    },
    module: {
        rules: [{
            test: /\.js|ts$/,
            use: [{
                    loader: 'babel-loader'
                },
                {
                    loader: 'ts-loader'
                }
            ]
        }]
    }
}