module.exports = {
    entry: {
        product: './web/js/productApp.js'
    },
    output: {
        path: './web/builds',
        filename: '[name].js',
        publicPath: '/builds/'
    }
};
