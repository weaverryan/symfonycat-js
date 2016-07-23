import React from 'react';
import _ from 'lodash';

var ProductApp = React.createClass({


    render: function() {
        var productRows = [];
        _.each(this.props.initialProducts, function(product, index) {
            productRows.push(
                <tr key={index}>
                    <td>{product}</td>
                    <td className="product-price">{Math.round(Math.random()*50)}</td>
                </tr>
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
