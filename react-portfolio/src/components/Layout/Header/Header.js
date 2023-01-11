import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BsArrowUpRight } from 'react-icons/bs';
import './Header.scss';

// scroll direction hook
const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset; // 마지막 스크롤 값

    // 스크롤할 때마다 실행됨
    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset; // 새로운 스크롤 값
      const direction = scrollY > lastScrollY ? 'down' : 'up'; // 스크롤 방향
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)
      ) {
        setScrollDirection(direction); // 방향이 바뀔때마다 state 업데이트
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener('scroll', updateScrollDirection); // 이벤트 추가

    return () => {
      // 여러 이벤트 추가를 막기 위해 useEffect가 다시 실행되기 전에 이벤트 제거
      window.removeEventListener('scroll', updateScrollDirection); // 이벤트 삭제
    };
  }, [scrollDirection]); // 스크롤 방향이 바뀔 때 실행

  return scrollDirection;
};

const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollYActive, setScrollYActive] = useState(false);
  const [btnClick, setBtnClick] = useState(false);
  const scrollDirection = useScrollDirection();

  const headerMenuList = [
    {
      id: 1,
      title: 'about',
      url: '/about',
    },
    {
      id: 2,
      title: 'skills',
      url: '/skills',
    },
    {
      id: 3,
      title: 'projects',
      url: '/projects',
    },
  ];

  const showMenu = () => {
    setBtnClick(!btnClick);
  };

  const scrollHandler = () => {
    if (scrollY > 40) {
      setScrollY(window.pageYOffset);
      setScrollYActive(true);
    } else {
      setScrollY(window.pageYOffset);
      setScrollYActive(false);
    }
  };
  useEffect(() => {
    const scrollEvent = () => {
      window.addEventListener('scroll', scrollHandler);
    };
    scrollEvent();
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  });

  return (
    <header
      className={`header ${scrollDirection === 'down' ? ' hide-header' : ''}`}
    >
      <div className={`header-container ${btnClick ? 'open' : ''}`}>
        {/* main-header */}
        <div className="main-header">
          <div className="header-logo">
            <Link to="/" className="logo">
              Eh
            </Link>
          </div>
          <nav className="main-nav">
            <ul>
              {headerMenuList.map((t) => {
                return (
                  <li key={t.id}>
                    <NavLink to={t.url} className="menu-item active-link">
                      {t.title}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="header-contact">
            <NavLink to="/contact" className="contact-item active-link">
              get in touch
            </NavLink>
          </div>
          <div
            className={`open-menu-btn ${btnClick ? 'clicked' : ''}`}
            onClick={showMenu}
            type="button"
          >
            <span className="first-bar"></span>
            <span className="second-bar"></span>
          </div>
        </div>
        {/* /main-header */}
        {/* secondary-header */}
        <div className="secondary-header">
          {/* <IoIosArrowForward /> */}
          <p className="background-title">navigate</p>
          <nav className="secondary-nav">
            <div className="sn-container">
              <ul className="sn-menu">
                <p className=" sn-title">menu</p>
                {headerMenuList.map((t) => {
                  return (
                    <li key={t.id}>
                      <Link to={t.url} className=" sn-item">
                        {t.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className="sn-contact">
                <p className=" sn-title">get in touch</p>
                <Link to="/contact" className="sn-item">
                  contact
                </Link>
              </div>
              <ul className="sn-social">
                <p className=" sn-title">social</p>
                <li>
                  <a
                    href="https://github.com/Hyeun9991"
                    className="sn-item"
                    target="_blank"
                  >
                    github
                  </a>
                </li>
                <li>
                  <a
                    href="https://velog.io/@hyeun9991"
                    className="sn-item"
                    target="_blank"
                  >
                    blog
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        {/* /secondary-header */}
      </div>
    </header>
  );
};

export default Header;
