import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import '../../styles/Home.scss'


const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollYActive, setScrollYActive] = useState(false);

  const changeHomeSection = () => {
    if (scrollY > 40) {
      setScrollY(window.pageYOffset);
      setScrollYActive(true);
    } else {
      setScrollY(window.pageYOffset);
      setScrollYActive(false);
    }
  };

  useEffect(() => {
    const scrollListener = () => {
      window.addEventListener('scroll', changeHomeSection);
    };
    scrollListener();
    return () => {
      window.removeEventListener('scroll', changeHomeSection);
    };
  });

  return (
    <div className={scrollYActive ? "home full" : "home"}>
      <div className="home-container">
        <div className="home-section-1">

        </div>
      </div>
    </div>
  );
};

export default Home;
