import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AboutPictureLink.scss';

const AboutPictureLink = () => {
  const [aboutClicked, setAboutClicked] = useState(false);
  const flippedAbout = () => {
    setAboutClicked(!aboutClicked);
  };

  // about-flip
  return (
    <div
      className={aboutClicked ? 'about-link-btn about-flip' : 'about-link-btn'}
      onClick={flippedAbout}
    >
      <div className="about-link-btn-inner">
        <div className="about-link-btn-front">
          <p className="about-click-me">Click me!</p>
          <div className="about-btn-top">
            <div className="about-btn-top-content"></div>
          </div>
          <div className="about-btn-bottom">
            <Link to="/about">About</Link>
          </div>
        </div>
        <div className="about-link-btn-back">
          <div className="about-btn-back-box">
            <p className="about-back-p-1">
              Park Eun Hye <br />
              Web Developer | Frontend <br />
              Adrress: Incheon, Korea <br />
              phone call: +82 10-7527-5792 <br />
              email: hyeun9991@gmail.com <br />
            </p>
            <p className="about-back-p-2">
              &lt; Skills &gt; <br />
              html5, css, javascript, react
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPictureLink;
