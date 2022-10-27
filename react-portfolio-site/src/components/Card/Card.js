import React from 'react';
import './Card.scss'

const Card = () => {
  return (
    <div className='card'>
      <div className="card-container">
        <div className="card-profile">
          <div className="image"></div>
          <div className="job">Wel Developer</div>
          <div className="name">EunHye</div>
        </div>

        <ul className="card-contact">
          <li>
            <a href="#">
              <b>Email</b> hyeun9991@gmail.com
            </a>
          </li>
          <li>
            <a href="#">
              <b>Blog</b> velog.io/@hyeun9991
            </a>
          </li>
          <li>
            <a href="#">
              <b>Github</b> github.com/hyeun9991
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
