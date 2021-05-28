import React, { useState } from "react";
import SearchButton from "./SearchButton";

const Search = ({ search }) => {
  // state
  const [searchInput, setSearchInput] = useState("");

  // funtion
  const handleSearchInput = event => {
    setSearchInput(event.target.value);
  };
  const handleOnSubmit = event => {
    event.preventDefault();
    // props del Search componen que se le pasa desde el componente Bookings
    search(searchInput);
    setSearchInput("");
  };
  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form onSubmit={handleOnSubmit} className="form-group search-box">
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <input
                type="text"
                id="customerName"
                className="form-control"
                placeholder="Customer name"
                value={searchInput}
                onChange={handleSearchInput}
              />
              <SearchButton name="Search" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
