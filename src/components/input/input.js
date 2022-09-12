import React from 'react';

import './style.css';

const SearchBar = ({ searchEvent, ...props }) => {
  return (
    <>
      <div className="searchArea">
        <input onChange={searchEvent} className="searchbar" type="text" />
        <p className="searchText">POKEMON GENERATOR</p>
      </div>
    </>
  );
};

export default SearchBar;
