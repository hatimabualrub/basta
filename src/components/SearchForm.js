import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const SearchForm = (props) => {
  const [searchText, setSearchText] = useState("");
  const history = useHistory();
  const searchHandler = () => {
    history.push(`/search/${searchText}`);
  };
  return (
    <form className="search-form" action="#">
      <input
        className="searchInput"
        type="text"
        placeholder="Search.."
        name="search"
        onChange={(e) => setSearchText(e.target.value)}
      />

      <button className="primary search" type="button" onClick={searchHandler}>
        <i className="fa fa-search"></i>
      </button>
    </form>
  );
};

export default SearchForm;
