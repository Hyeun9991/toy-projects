import React, { useState, useEffect } from 'react';
import './ToTopButton.scss';

const ToTopButton = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollYActive, setScrollYActive] = useState(false);

  /**
   * 클릭 시 스크롤을 맨 위로 옮기는 함수, 부드럽게 전환
   */
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  /**
   * 스크롤이 120이 되면 to-top-btn이 화면에 나오게 하는 함수
   */
  const toTopBtnEffect = () => {
    if (scrollY > 120) {
      setScrollY(window.pageYOffset);
      setScrollYActive(true);
    } else {
      setScrollY(window.pageYOffset);
      setScrollYActive(false);
    }
  };
  useEffect(() => {
    const scrollEvent = () => {
      window.addEventListener('scroll', toTopBtnEffect);
    };
    scrollEvent();
    return () => {
      window.removeEventListener('scroll', toTopBtnEffect);
    };
  });

  return (
    <button
      onClick={scrollToTop}
      className={`to-top-btn ${scrollYActive ? 'to-top-show' : ''}`}
    >
      top
    </button>
  );
};

export default ToTopButton;
