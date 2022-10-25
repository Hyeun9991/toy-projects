import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MenuItems } from '../Navbar/NavItems';
import './Home.scss';

const Home = () => {
  const [ScrollY, setScrollY] = useState(0);
  const [ScrollActive, setScrollActive] = useState(false);
  // home-section2 를 top: 0에 붙이는 코드 (2022.10.25)
  const moveSection2 = () => {
    if (ScrollY > 450) {
      // 스크롤 값 가져오고 setScrollActive state 변경
      setScrollY(window.pageYOffset); // 스크롤 값 가져오기
      setScrollActive(true);
    } else {
      setScrollY(window.pageYOffset);
      setScrollActive(false);
    }
  };
  // useEffect로 실시간 감시 (2022.10.24)
  useEffect(() => {
    const scrollListener = () => {
      window.addEventListener('scroll', moveSection2); // window에서 스크롤 감시 시작
    };

    scrollListener(); // window에서 스크롤 감시

    return () => {
      window.removeEventListener('scroll', moveSection2); // window에서 스크롤 감시 종료
    };
  });

  return (
    <div>
      <div className={ScrollActive ? 'home-section2 move' : 'home-section2'}>
        <div className="home-section2-container">
          {/* <span className="home-section2-span">
            {ScrollActive ? '' : 'scroll down'}
          </span> */}
          {MenuItems.map((t) => {
            return (
              <li key={t.id} className={ScrollActive ? 'scroll-down' : ''}>
                <Link to={t.url} className={t.class}>
                  {t.title}
                </Link>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
