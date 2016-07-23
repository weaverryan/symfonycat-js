import ProductCollection from './ProductCollection';
import '../css/productApp.css';
import React from 'react';
import ReactDOM from 'react-dom';
import ProductApp  from './Components/ProductApp';

var collection = new ProductCollection([
    'Sheer Shears',
    'Wool Hauling Basket',
    'After-Shear (Fresh Cut Grass)',
    'After-Shear (Morning Dew)',
    'Shear Comb',
    'Shearly Conditioned'
]);

$(document).ready(function() {
    ReactDOM.render(
        <ProductApp message="Great Products!" />,
        document.getElementById('product-app')
    );
});
