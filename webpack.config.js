var production = process.env.NODE_ENV === 'production';

module.exports = {
    entry: {
        product: './web/js/productApp.js'
    },
    output: {
        path: './web/builds',
        filename: '[name].js',
        publicPath: production ? '/builds/' : 'http://localhost:8080/builds/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    devServer: {
        hot: true,
        contentBase: './web/',
        headers: { "Access-Control-Allow-Origin": "*" }
    },
    devtool: production ? false : '#inline-source-map'
};
