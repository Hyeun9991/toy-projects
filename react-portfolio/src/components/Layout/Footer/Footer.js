import React from 'react';
import { Link } from 'react-router-dom';
import { footerMenuItems, footerSocialItems } from './footerItems';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="background-title">eunhye</p>
      <div className="footer-container">
        {/* secondary-footer */}
        <div className="secondary-footer">
          <nav className="sf-start sf-container" role="navigation">
            <p className="footer-item">navigate</p>
            <ul>
              {footerMenuItems.map((t) => {
                return (
                  <li key={t.id}>
                    <Link to={t.url} className="footer-active-item">
                      {t.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <nav className="sf-end sf-container" role="navigation">
            <p className="footer-item">connection</p>
            <ul>
              {footerSocialItems.map((t) => {
                return (
                  <li key={t.id}>
                    <a
                      href={t.url}
                      target="_blank"
                      className="footer-active-item"
                    >
                      {t.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        {/* /secondary-footer */}
        {/* main-footer */}
        <div className="main-footer">
          <div className="footer-info-01">
            <p className="footer-item">ver.01</p>
            <p className="footer-item">last update 2023.02.02</p>
          </div>
          <div className="footer-info-02">
            <p className="footer-item">eh: eunhye Hangout</p>
          </div>
          <div className="footer-logo">
            <Link to="/" className="logo">
              Eh
            </Link>
          </div>
        </div>
        {/* /main-footer */}
      </div>
    </footer>
  );
};

export default Footer;
