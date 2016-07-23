var products = [
    'Sheer Shears',
    'Wool Hauling Basket',
    'After-Shear (Fresh Cut Grass)',
    'After-Shear (Morning Dew)',
    'Shear Comb',
    'Shearly Conditioned'
];

var loopThroughProducts = function(callback) {
    for (let i = 0, length = products.length; i < length; i++) {
        callback(products[i]);
    }
};

loopThroughProducts(function(product) {
    console.log('Product: '+product);
});
