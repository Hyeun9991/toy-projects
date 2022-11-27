import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
/**********[ scss ]**********/
import '../../styles/Home.scss';

/**********[ components ]**********/
import Footer from '../Footer/Footer';
import ToTopButton from '../ToTopButton/ToTopButton';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollYActive, setScrollYActive] = useState(false);

  // 스크롤값이 40을 초과하면 scrollActive toggle 하는 함수 (2022.11.27)
  const introFlip = () => {
    if (scrollY > 40) {
      setScrollY(window.pageYOffset);
      setScrollYActive(true);
    } else {
      setScrollY(window.pageYOffset);
      setScrollYActive(false);
    }
  };

  // introFlip 함수를 실행하는 useEffect (2022.11.27)
  useEffect(() => {
    const scrollListener = () => {
      window.addEventListener('scroll', introFlip);
    };
    scrollListener();
    return () => {
      window.removeEventListener('scroll', introFlip);
    };
  });

  return (
    <div className="home">
      {/* to top button */}
      <ToTopButton />
      {/* /to top button */}

      {/* intro */}
      <div className={scrollYActive ? 'home-intro flip' : 'home-intro'}>
        <Link to="/about" className="about-intro intro-box">
          <h3>
            <p>01</p> about
          </h3>
          <div>
            <span>&#183; resume</span>
            <span>&#183; skills</span>
          </div>
        </Link>
        <Link to="/projects" className="projects-intro intro-box">
          <h3>
            <p>02</p> projects
          </h3>
          <div>
            <span>&#183; website</span>
            <span>&#183; javascript</span>
          </div>
        </Link>
        <Link to="/contact" className="contact-intro intro-box">
          <h3>
            <p>03</p> contact
          </h3>
          <div>
            <span>&#183; get in touch</span>
            <span>&#183; social</span>
          </div>
        </Link>
      </div>
      {/* /intro */}

      {/* home-sections-1 */}
      {/* <div className="home-sections">
        <div className="menus-sticky-container">
          <div className="menus-box">
            <div className="menu-box">
              <Link to="/about" className="menu-image menu-about">
                <p>about</p>
              </Link>
            </div>
            <div className="menu-box">
              <Link to="/projects" className="menu-image menu-projects">
                <p>projects</p>
              </Link>
            </div>
            <div className="menu-box">
              <Link to="/contact" className="menu-image menu-contact">
                <p>contact</p>
              </Link>
            </div>
          </div>
          <div className="sticky-box">
            <div className="sticky-text">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Soluta, nostrum quas! Assumenda, ex dignissimos. Labore cumque
                tempora cupiditate nisi sed! Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Soluta, nostrum quas! Assumenda,
                ex dignissimos. Labore cumque tempora cupiditate nisi sed!
              </p>
            </div>
          </div>
        </div>
      </div> */}
      {/* /home-sections-1 */}

      {/* <div className="home-section-1">.section-1</div> */}

      <div className="footer-section">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
