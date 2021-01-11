import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../UI/SVG/colossus.svg';
const NavBar = (props) => {
  const [showMenu, setShowMenu] = useState(false);

  const menuToggle = (e) => {
    e.preventDefault();
    const show = !showMenu;
    setShowMenu(show);
  };

  return (
    <nav className="navbar is-dark">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/">
            <button className="navbar-item">
              <Logo />
            </button>
          </Link>
          <Link
            to="#"
            role="button"
            className={`navbar-burger ${showMenu && 'is-active'}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navigator"
            onClick={(e) => menuToggle(e)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </Link>
        </div>
        <div
          className={`navbar-menu ${showMenu && 'is-active'}`}
          id="navigator"
        >
          <div className="navbar-end">
            <Link className="navbar-item" to="/">
              Home
            </Link>
            <Link className="navbar-item" to="/episodes">
              All Episodes
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
