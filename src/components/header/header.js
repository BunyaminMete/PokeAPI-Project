import React from 'react';

import './style.css';

import logo from '../../assets/name.png';

const Header = () => {
  const headerEvent = React.useRef();

  document.addEventListener('scroll', function () {
    let position = window.pageYOffset;
    if (position > 100) {
      headerEvent.current.style.backgroundColor = 'rgba(87, 79, 185)';
    } else {
      headerEvent.current.style.backgroundColor = 'rgba(87, 79, 185, 0.2)';
    }
  });

  return (
    <>
      <div ref={headerEvent} className="header">
        <img className="author" alt="authorname" src={logo}></img>
      </div>
    </>
  );
};

export default Header;
