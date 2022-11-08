import React, { useState } from 'react';
import './Ticket.scss';

const Ticket = () => {
  const [ticketClicked, setTicketClicked] = useState(false);

  const flipTicket = () => {
    setTicketClicked(!ticketClicked);
  };
  return (
    <div
      className={ticketClicked ? 'ticket-box flip' : 'ticket-box'}
      onClick={flipTicket}
    >
      <div className="ticket-inner">
        <div className="ticket-front">
          <div className="ticket-box-1">
            <div className="p-logo">Eh</div>
            <p className="p-1">
              EhEhEhEhEhEhEh EhEhEhEhEhEhEh EhEhEhEhEhEhEh EhEhEhEhEhEhEh
              EhEhEhEhEhEhEh EhEhEhEhEhEhEh
            </p>
            <p className="p-2">
              EhEhEhEhEhEhEh EhEhEhEhEhEhEh EhEhEhEhEhEhEh EhEhEhEhEhEhEh
              EhEhEhEhEhEhEh EhEhEhEhEhEhEh
            </p>
            <p className="p-3">
              EhEhEhEhEhEhEh EhEhEhEhEhEhEh EhEhEhEhEhEhEh EhEhEhEhEhEhEh
              EhEhEhEhEhEhEh EhEhEhEhEhEhEh
            </p>
          </div>
          <div className="ticket-box-2">
            <p>
              <b>VIP</b> Ticket
            </p>
          </div>
        </div>

        <div className="ticket-back">
          <div className="ticket-box-1">
            <div className="text-1">
              <h3>Name</h3>
              <ul>
                <li>Address</li>
                <li>Blog</li>
                <li>Github</li>
                <li>Email</li>
              </ul>
            </div>
            <div className="text-2">
              <h3>Park Eun Hye</h3>
              <ul>
                <li>Korea Incheon</li>
                <li>
                  <a href="https://velog.io/@hyeun9991" target="_blank">
                    velog.io/@hyeun9991
                  </a>
                </li>
                <li>
                  <a href="https://github.com/hyeun9991" target="_blank">
                    github.com/hyeun9991
                  </a>
                </li>
                <li>
                  <a href="mailto: hyeun9991@gmail.com">hyeun9991@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="ticket-box-2">
            <div className="box-left">
              <p>Eh</p>
            </div>
            <div className="box-right">
              <p>990818EUNHYE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
