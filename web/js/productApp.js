import '../css/productApp.css';
import React from 'react';
import ReactDOM from 'react-dom';
import ProductApp  from './Components/ProductApp';

var startingProducts = window.startingProducts;

$(document).ready(function() {
    ReactDOM.render(
        <ProductApp message="Great Products!" initialProducts={startingProducts} />,
        document.getElementById('product-app')
    );
});
