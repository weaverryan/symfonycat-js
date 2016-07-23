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

export ProductCollection;