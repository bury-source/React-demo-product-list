import React from 'react';
import "./FilterableProductTable.css"
import SearchBar from "../SearchBar/SearchBar"
import ProductTable from "../ProductTable/ProductTable"

class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = { filterText: '', inStockOnly: false }
        this.data = [
            [{ category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
            { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
            { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" }],
            [{ category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
            { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
            { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }]
        ];

        this.handleCheckedChange = this.handleCheckedChange.bind(this);
        this.handleValueChange = this.handleValueChange.bind(this);
    }

    handleCheckedChange(checkValue) {
        this.setState({ inStockOnly: checkValue });
    }

    handleValueChange(inputValue) {
        this.setState({ filterText: inputValue });
    }
    render() {
        return (
            <div className="container">
                <SearchBar search={this.state.filterText} isChecked={this.state.inStockOnly} onCheckedChange={this.handleCheckedChange} onValueChange={this.handleValueChange} />
                <ProductTable categoryArray={this.data} filterText={this.state.filterText} onlyStocked={this.state.inStockOnly} />
            </div>
        );
    }
}


export default FilterableProductTable;
