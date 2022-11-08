import React, { useState, useEffect } from 'react';
import '../../styles/Home.scss';

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

  const [ticketClicked, setTicketClicked] = useState(false);

  const flipTicket = () => {
    setTicketClicked(!ticketClicked);
  };

  return (
    <div className="home">
      <div className="home-container">
        <div className="home-section-1">
          <div className="gift-box">
            <div className="left-box">
              <div className="invitation-box">
                <h1 className="h1-text">
                  invitation
                  <p className="p-text-1 p-text">We invite you to Eh</p>
                </h1>
                <p className="p-text-2 p-text">
                  제 사이트에 오신 여러분께 감사인사 드립니다.
                </p>
                <p className="p-text-3 p-text">티켓을 확인하세요.</p>
                <p className="p-text-4 p-text p-bottom">by. Park Eun Hye</p>
              </div>
            </div>
            <div className="right-box">
              <div
                className={ticketClicked ? 'ticket-box flip' : 'ticket-box'}
                onClick={flipTicket}
              >
                <div className="ticket-inner">
                  <div className="ticket-front">
                    <div className="front-box-1">
                      <p className="front-text-1">Eh Ticket</p>
                      <p className="front-text-2">ver.01 vip</p>
                    </div>
                    <div className="front-box-2">
                      <span className="front-text-3">
                        Eh
                        {/* <p className="front-text-4">0100010101101000</p> */}
                      </span>
                    </div>
                  </div>
                  <div className="ticket-back">
                    <div className="back-box-1">
                      <p className="back-text-1">0100010101101000</p>
                    </div>
                    <div className="back-box-2">
                      <p className="back-logo">Eh</p>
                      <ul className="back-text-list">
                        <li>
                          <b>name</b> Park Eun Hye
                        </li>
                        <li>
                          <b>Github</b> <a href="#">github.com/Hyeun9991</a>
                        </li>
                        <li>
                          <b>Blog</b> <a href="#">velog.io/@hyeun9991</a>
                        </li>
                        <li>
                          <b>Email</b> <a>Hyeun9991@gmail.com</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="receipt-box">
                <div className="receipt-inner"></div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
