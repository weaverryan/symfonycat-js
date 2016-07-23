import ProductCollection from './ProductCollection';
import '../css/productApp.css';
import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';

var collection = new ProductCollection([
    'Sheer Shears',
    'Wool Hauling Basket',
    'After-Shear (Fresh Cut Grass)',
    'After-Shear (Morning Dew)',
    'Shear Comb',
    'Shearly Conditioned'
]);

var ProductApp = React.createClass({
    render: function() {
        return (
            <h1>Yay!</h1>
        )
    }
});

$(document).ready(function() {
    ReactDOM.render(
        <ProductApp/>,
        document.getElementById('product-app')
    );
});
