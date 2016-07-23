import React from 'react';
import _ from 'lodash';
import ProductRow from './ProductRow';

var ProductApp = React.createClass({


    render: function() {
        var productRows = [];
        _.each(this.props.initialProducts, function(product, index) {
            productRows.push(
                <ProductRow product={product} key={index} />
            );
        });

        return (
            <div>
                <h1>{this.props.message}</h1>

                <table className="table">
                    <tbody>{productRows}</tbody>
                </table>
            </div>
        )
    }
});

module.exports = ProductApp;
