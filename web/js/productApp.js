import '../css/productApp.css';
import React from 'react';
import ReactDOM from 'react-dom';
import ProductApp  from './Components/ProductApp';

var startingProducts = [
    'Sheer Shears',
    'Wool Hauling Basket',
    'After-Shear (Fresh Cut Grass)',
    'After-Shear (Morning Dew)',
    'Shear Comb',
    'Shearly Conditioned'
];

$(document).ready(function() {
    ReactDOM.render(
        <ProductApp message="Great Products!" initialProducts={startingProducts} />,
        document.getElementById('product-app')
    );
});
