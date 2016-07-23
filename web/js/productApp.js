var collection = new ProductCollection([
    'Sheer Shears',
    'Wool Hauling Basket',
    'After-Shear (Fresh Cut Grass)',
    'After-Shear (Morning Dew)',
    'Shear Comb',
    'Shearly Conditioned'
]);

var loopThroughProducts = function(callback) {
    for (let i = 0, length = collection.getProducts().length; i < length; i++) {
        callback(collection.getProduct(i));
    }
};

loopThroughProducts(product => console.log('Product: '+product));
