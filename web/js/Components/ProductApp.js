import React from 'react';

var ProductApp = React.createClass({
    render: function() {
        return (
            <h1>{this.props.message}</h1>
        )
    }
});

module.exports = ProductApp;
