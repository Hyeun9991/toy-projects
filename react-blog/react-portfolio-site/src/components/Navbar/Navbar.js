import { click } from '@testing-library/user-event/dist/click';
import React, { useState, useEffect } from 'react';
import './Navbar.scss';

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const [ScrollY, setScrollY] = useState(0);
  const [ScrollActive, setScrollActive] = useState(false);

  const showMenu = () => {
    setClicked(!clicked);
  };

  const NavToTop = () => {
    if (ScrollY > 120) {
      setScrollY(window.pageYOffset);
      setScrollActive(true);
    } else {
      setScrollY(window.pageYOffset);
      setScrollActive(false);
    }
  };

  useEffect(() => {
    const scrollListener = () => {
      window.addEventListener('scroll', NavToTop);
    };
    scrollListener();
    return () => {
      window.removeEventListener('scroll', NavToTop);
    };
  });

  return (
    <div className={ScrollActive ? 'navbar to-top' : 'navbar'}>
      <div className="navbar-container">
        <div className="navbar-box">
          <div className="profile-box">
            <span className="profile-image"></span>
            <p className="profile-name">EunHye</p>
            <p className="profile-job">Web Developer</p>
          </div>

          <div className="resume-box">
            <p className="resume-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              sequi autem expedita provident obcaecati ipsa itaque tenetur
              quidem. Tempore quo doloribus possimus alias delectus itaque unde
              at est, inventore dolore?
            </p>
          </div>

          <ul className="contact-box">
            <p>Contact Me</p>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Github</a>
            </li>
            <li>
              <a href="#">Email</a>
            </li>
          </ul>

          <ul className="menu-list">
            <p>Content</p>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Skill</a>
            </li>
            <li>
              <a href="#">Work</a>
            </li>
          </ul>

          <div
            className={clicked ? 'menu-icon open' : 'menu-icon'}
            onClick={showMenu}
          >
            <span></span>
          </div>

          <div className={clicked ? 'hidden-menu open-menu' : 'hidden-menu'}>
            <ul className="contact-box2">
              <p>Contact Me</p>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Github</a>
              </li>
              <li>
                <a href="#">Email</a>
              </li>
            </ul>

            <ul className="menu-list2">
              <p>Content</p>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Skill</a>
              </li>
              <li>
                <a href="#">Work</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
