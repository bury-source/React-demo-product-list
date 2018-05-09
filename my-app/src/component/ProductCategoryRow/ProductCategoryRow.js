import React from 'react';
import "./ProductCategoryRow.css"

class ProductCategoryRow extends React.Component {
   
    render() {
      return (
        <span className="title" >
          {this.props.category}
        </span>
      );
    }
  }

  export default ProductCategoryRow;