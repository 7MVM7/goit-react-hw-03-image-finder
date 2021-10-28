import { toast } from "react-toastify";
// import { queries } from '@testing-library/dom';
import PropTypes from "prop-types";

import React, { Component } from "react";
// import Api from "../Services/apiServices";

class SearchBar extends Component {
  state = {
    searchQuery: "",
  };

  
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.searchQuery.trim() === "") {
      toast.info("Ти щось таке шукаєш...");
      return;
    }
    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: "" });
  };
  
  handleChange = (e) => {
    this.setState({
      searchQuery: e.currentTarget.value,
    });
  };
  
  render() {
    return (
      <header className="Searchbar">
        <form onSubmit={this.handleSubmit} className="SearchForm">
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            onChange={this.handleChange}
            className="SearchForm-input"
            type="text"
            name="query"
            value={this.props.searcQuery}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
