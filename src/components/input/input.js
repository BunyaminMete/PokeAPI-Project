import React from 'react';

import './style.css';

const SearchBar = ({ searchEvent, ...props }) => {
  const poke1 = React.useRef();
  const poke2 = React.useRef();

  return (
    <>
      <div className="searchArea">
        <img
          ref={poke1}
          className="pokeball"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1200px-Pok%C3%A9_Ball_icon.svg.png"
          alt="pokeball"
        ></img>
        <img
          ref={poke2}
          className="pokeball2"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1200px-Pok%C3%A9_Ball_icon.svg.png"
          alt="pokeball2"
        ></img>
        <input onChange={searchEvent} className="searchbar" type="text" />
        <p className="searchText">POKEMON GENERATOR</p>
      </div>
    </>
  );
};

export default SearchBar;
