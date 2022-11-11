import React, { useState, useEffect } from 'react';
/**********[ scss ]**********/
import '../../styles/Home.scss';

/**********[ components ]**********/
import Ticket from '../Ticket/Ticket';
import Projects from '../Pages/Projects';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import AboutPictureLink from '../AboutPictureLink/AboutPictureLink';
import ContactMemo from '../ContactMemo/ContactMemo';

const Home = () => {
  
  return (
    <div className="home">
      <Navbar />
      <div className="home-container">
        {/* ticket-section */}
        <div className="home-section-1 section-n">
          <p className="section-top-right-text">made by. eunhye</p>
          <div className="ticket-section section-box">
            <Ticket />
            <AboutPictureLink />
            <ContactMemo />
          </div>
        </div>
        {/* /ticket-section */}

        {/* projects-section */}
        <div className="home-section-3 section-n">
          <p className="section-top-right-text">Projects</p>
          <div className="projects-section section-box">
            <Projects />
          </div>
        </div>
        {/* /projects-section */}

        {/* Footer-section */}
        <Footer />
        {/* /Footer-section */}
      </div>
    </div>
  );
};

export default Home;
