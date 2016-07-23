class ProductCollection
{
    constructor(products) {
        this.products = products;
    }

    getProducts() {
        return this.products;
    }

    getProduct(i) {
        return this.products[i];
    }
}

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
