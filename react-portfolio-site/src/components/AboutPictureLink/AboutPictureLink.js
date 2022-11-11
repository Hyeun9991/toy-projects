import React from 'react';
import { Link } from 'react-router-dom';
import './AboutPictureLink.scss'

const AboutPictureLink = () => {
  return (
    <div className="about-link-btn">
      <div className="about-btn-top">
        <div className="about-btn-top-content"></div>
      </div>
      <div className="about-btn-bottom">
        <Link to="/about">About</Link>
      </div>
    </div>
  );
};

export default AboutPictureLink;
