import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import { MenuItems } from './NavItems';

const Navbar = () => {
  const [clicked, setClicked] = useState(false); // 메뉴버튼, 메뉴창 컨트롤할 state
  const [ScrollY, setScrollY] = useState(0);
  const [ScrollActive2, setScrollActive2] = useState(false);

  // clicked state가 toggle형식으로 on, off (2022.10.24)
  const showMenu = () => {
    setClicked(!clicked);
  };

  // navbar-menus 를 top: -100%로 변경하는 코드 (2022.10.24)
  const hideNavbar = () => {
    if (ScrollY > 120) {
      setScrollY(window.pageYOffset); // 스크롤 값 가져오기
      setScrollActive2(true);
    } else {
      setScrollY(window.pageYOffset);
      setScrollActive2(false);
    }
  };
  useEffect(() => {
    const scrollListener = () => {
      window.addEventListener('scroll', hideNavbar); // window에서 스크롤 감시 시작
    };

    scrollListener(); // window에서 스크롤 감시

    return () => {
      window.removeEventListener('scroll', hideNavbar); // window에서 스크롤 감시 종료
    };
  });

  return (
    <>
      <div className={ScrollActive2 ? 'navbar hide' : 'navbar'}>
        <div className="navbar-container">
          <div className="navbar-logo">
            <Link to="/" className="menu-icon">
              EunHye
            </Link>
          </div>

          <ul className={clicked ? 'navbar-menus open' : 'navbar-menus'}>
            <li>
              <a
                href="https://velog.io/@hyeun9991"
                target="_blank"
                className="menu-icon"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Hyeun9991"
                target="_blank"
                className="menu-icon"
              >
                Github
              </a>
            </li>
            <li>
              <a href="mailto: hyeun9991@gmail.com" className="menu-icon">
                Email
              </a>
            </li>
          </ul>

          <div
            className={clicked ? 'navbar-btn close' : 'navbar-btn'}
            onClick={showMenu}
          >
            <span></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
