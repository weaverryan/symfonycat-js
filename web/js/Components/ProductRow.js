import React from 'react';

var ProductRow = React.createClass({
    render: function() {
        return (
            <tr>
                <td>{this.props.product}</td>
                <td className="product-price">{Math.round(Math.random()*50)}</td>
            </tr>
        )
    }
});

module.exports = ProductRow;
