import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <Link to="/" className="footer-logo">
          <p className="logo-eunhye">Eunhye</p>
          <p className="portfolio-text">portfolio</p>
        </Link>
        <div className="footer-menus">
          {/* <p>welcome to Eh</p> */}
          <Link to='/about-page'>about</Link>
          <Link to='/project-page'>projects</Link>
        </div>
        <div className="footer-contact">
          <p>
            get in touch<b>&rarr;</b>{' '}
          </p>
          <Link to="/contact-page">contact</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
