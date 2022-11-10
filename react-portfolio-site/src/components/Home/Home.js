import React, { useState, useEffect } from 'react';
/**********[ scss ]**********/
import '../../styles/Home.scss';

/**********[ components ]**********/
import Ticket from '../Ticket/Ticket';
import About from '../Pages/About';
import Projects from '../Pages/Projects';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Home = () => {
  // const [scrollY, setScrollY] = useState(0);
  // const [scrollYActive, setScrollYActive] = useState(false);

  // const onScroll = () => {
  //   if (scrollY > 40) {
  //     setScrollY(window.pageYOffset);
  //     setScrollYActive(true);
  //   } else {
  //     setScrollY(window.pageYOffset);
  //     setScrollYActive(false);
  //   }
  // };

  // useEffect(() => {
  //   const scrollEvent = () => {
  //     window.addEventListener('scroll', onScroll);
  //   };
  //   scrollEvent();
  //   return () => {
  //     window.removeEventListener('scroll', onScroll);
  //   };
  // });

  return (
    <div className="home">
      <Navbar />
      <div className="home-container">
        {/* ticket-section */}
        <div className="home-section-1 section-n">
          <p className="section-top-right-text">by. eunhye</p>
          <div className="ticket-section section-box">
            <Ticket />
            <div className="about-link-btn">
              <div className="about-btn-top">
                <div className="about-btn-top-content"></div>
              </div>
              <div className="about-btn-bottom">
                <Link to="/about">About</Link>
              </div>
            </div>
          </div>
        </div>
        {/* /ticket-section */}

        {/* about-section */}
        {/* <div className="home-section-2 section-n">
          <p className="section-top-right-text">About</p>
          <div className="about-section section-box">
            <About />
          </div>
        </div> */}
        {/* /about-section */}

        {/* projects-section */}
        <div className="home-section-3 section-n">
          <p className="section-top-right-text">Projects</p>
          <div className="projects-section section-box">
            <Projects />
          </div>
        </div>
        {/* /projects-section */}
      </div>
    </div>
  );
};

export default Home;
