import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Projects from '../Pages/Projects';
import '../../styles/Home.scss'


const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="home-container">
        {/* <div className="home-section1">
          <Projects />
        </div> */}
      </div>
    </div>
  );
};

export default Home;
