import React from 'react';
import _ from 'lodash';
import ProductRow from './ProductRow';

var ProductApp = React.createClass({

    getInitialState: function() {
        return {
            products: this.props.initialProducts
        }
    },

    handleProductReload: function(e) {
        e.preventDefault();

        // in real life, your user might click a button
        // and then you make an AJAX request and use the
        // response from that request to update some data
        // in your state
        var shuffledProducts = _.shuffle(this.state.products);

        this.setState({
            products: shuffledProducts
        });
    },

    render: function() {
        var productRows = [];
        _.each(this.state.products, function(product, index) {
            productRows.push(
                <ProductRow product={product} key={index} />
            );
        });

        return (
            <div>
                <button onClick={this.handleProductReload} className="btn btn-warning pull-right">Shuffle Products</button>

                <h1>{this.props.message}</h1>

                <table className="table">
                    <tbody>{productRows}</tbody>
                </table>
            </div>
        )
    }
});

module.exports = ProductApp;
