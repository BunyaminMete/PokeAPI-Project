import logo from '../../assets/name.png';

import './style.css';

const Header = () => {
  return (
    <>
      <div className="header">
        <img className="author" alt="authorname" src={logo}></img>
      </div>
    </>
  );
};

export default Header;
