import React from 'react';
import { Link } from 'react-router-dom';
import './BottomNav.scss';

const BottomNav = () => {
  return (
    <div className="bottom-nav-wrapper">
      <nav className="bottom-navigator">
        <div className="logo">
          <Link to='/' className="logo-small">eunhye</Link>
        </div>
        <ul className="menus">
          <li>
            <Link to="/" className="base-underline-link-small bottom-link">
              home
            </Link>
          </li>
          <li>
            <Link to="/about" className="base-underline-link-small bottom-link">
              about
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="base-underline-link-small bottom-link"
            >
              projects
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="base-underline-link-small bottom-link"
            >
              contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default BottomNav;
