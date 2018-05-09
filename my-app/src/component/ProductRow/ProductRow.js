import React from 'react';
import "./ProductRow.css"

class ProductRow extends React.Component {

    render() {
        if (this.props.inStock) {
            return (
                <tr><td className="pName">{this.props.name}</td><td className="pPrice">
                    {this.props.price}
                </td></tr>
            );
        } else {
            return (
                <tr>
                    <td className="pName notInStock">{this.props.name}
                    </td><td className="pPrice">
                        {this.props.price}
                    </td></tr>
            );
        }

    }
}

export default ProductRow;
