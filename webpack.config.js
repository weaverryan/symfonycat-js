module.exports = {
    entry: {
        product: './web/js/productApp.js'
    },
    output: {
        path: './web/builds',
        filename: '[name].js',
        publicPath: '/builds/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }
};
