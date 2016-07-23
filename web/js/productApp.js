import ProductCollection from './ProductCollection';

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

$(document).ready(function() {
    var $table = $('.js-product-table tbody');

    loopThroughProducts(function(product) {
        var $tr = $('<tr></tr>');
        $tr.append('<td>'+product+'</td>');
        $tr.append('<td class="product-price">$'+Math.round(Math.random() * 50)+'.00</td>');
        $table.append($tr);
    });
});
