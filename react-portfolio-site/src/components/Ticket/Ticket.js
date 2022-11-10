import React, { useState } from 'react';
import './Ticket.scss';

const Ticket = () => {
  const [ticketClicked, setTicketClicked] = useState(false);

  const flipTicket = () => {
    setTicketClicked(!ticketClicked);
  };
  
  return (
    <div
      className={ticketClicked ? 'ticket ticket-flip' : 'ticket'}
      onClick={flipTicket}
    >
      <div className="ticket-inner">
        <div className="ticket-front">
          <div className="front-top">
            <p className="front-logo">Eh</p>
            <div className="front-top-box front-box-1"></div>
            <div className="front-top-box front-box-2"></div>
          </div>
          <div className="front-bottom">
            <p>Welcome To Eh</p>
            <p>by. eunhye</p>
            {/* <p className="barcode-text">0110010101101000</p> */}
          </div>
        </div>
        <div className="ticket-back">
          <div className="back-top">
            <div className="back-top-1">
              <h1>Eh Contents</h1>
              <div className="span-box">
                <span>
                  <p>Prod</p>: Eh Portfolio
                </span>
                <span>
                  <p>Date</p>: 22/11/09
                </span>
              </div>
            </div>
            <div className="back-top-2">
              <div className="item-spans">
                <span>
                  <p>Home</p>
                  <p>01100101</p>
                </span>
                <span>
                  <p>About</p>
                  <p>01101000</p>
                </span>
                <span>
                  <p>Projects</p>
                  <p>01100111</p>
                </span>
              </div>
              <span className="total-span">
                <p>Total:</p>
                <p>77656c636f6d65</p>
              </span>
            </div>
          </div>
          <div className="back-bottom">
            <p className="back-logo">Eh</p>
            <div className="back-profile">
              <ul>
                <li>
                  <a href="#">Email</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Github</a>
                </li>
              </ul>
              <p className="barcode-text">0110010101101000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
