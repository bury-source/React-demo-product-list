import React from 'react';
import "./ProductTable.css"
import ProductCategoryRow from "../ProductCategoryRow/ProductCategoryRow"
import ProductRow from "../ProductRow/ProductRow"

class ProductTable extends React.Component {
   
    render() {
      return (
        <table>
          <thead>
            <tr>
              <th><span className="title">Name</span></th>
              <th><span className="title">Price</span></th>
            </tr>
          </thead>
  
          {this.props.categoryArray.map((item, index) => {
            return (
              <tbody key={index}>
                <tr key={index}>
                  <td colSpan="2"><ProductCategoryRow category={item[0].category} /></td>
                </tr>
  
                {
                  item.map((line) => {
                    if (line.name.toLowerCase().includes(this.props.filterText.toLowerCase()) && (this.props.onlyStocked ? line.stocked : true)) {
                      return (<ProductRow name={line.name} price={line.price} inStock={line.stocked} key={line.name} />)
                    } else {
                      return null;
                    }
  
                  })
  
                }
              </tbody>
            )
          })}
        </table>
      )
    }
  }

  export default ProductTable;