import React from 'react';
import "./SearchBar.css"

class SearchBar extends React.Component {
    constructor(props) {
      super(props);
      this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    handleInputChange(e) {
      const target = e.target;
      const value = target.type === "checkbox" ? target.checked : target.value;
      target.type === "checkbox" ? this.props.onCheckedChange(value) : this.props.onValueChange(value);
    }
  
    render() {
      return (
        <div className="searchBar">
          <div> <input type="text" className="insetShadow" placeholder="Search..." value={this.props.search} onChange={this.handleInputChange} /></div>
          <div><input type="checkbox" name="filter" checked={this.props.isChecked} onChange={this.handleInputChange} /> <label htmlFor="filter">Only show products in stock</label></div>
        </div>
      );
    }
  }

  export default SearchBar;