import React, { useState, useEffect } from 'react';
import '../../styles/Home.scss';
import Ticket from '../Ticket/Ticket';

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
      <div className="home-container">
        <div className="home-section-1">
          <p className="section-top-right-text">by. eunhye</p>
          <div className="invitation-ticket">
            <div className="invitation">
              <div className="invitation-top">
                <p className="invitation-title">Welcome</p>
                <p className="invitation-title-2">
                  To <b>Eh</b>
                </p>
              </div>
              <div className="invitation-bottom">
                <p className="invitation-text-1 invitation-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Tempora amet libero necessitatibus excepturi, perspiciatis
                  ratione porro quos sapiente tenetur dolorum vel! Fugit
                  quisquam odio mollitia provident maxime, temporibus similique
                  exercitationem?
                </p>
                <p className="invitation-text-2 invitation-text">by. eunhye</p>
              </div>
            </div>
            <Ticket />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
