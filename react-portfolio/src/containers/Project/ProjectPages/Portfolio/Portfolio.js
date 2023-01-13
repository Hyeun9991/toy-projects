import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PortfolioItemList } from './PortfolioItemList';
import './Portfolio.scss';

const Portfolio = () => {
  const navigate = useNavigate();

  navigate('/');
  const goBackButton = () => {
    navigate(-1);
  };

  return (
    <div className="project-container">
      {/* project-header */}
      <div className="project-header">
        <div className="ph-left">
          <Link to="/" className="logo-small color-white">
            eunhye
          </Link>
          <div className="back-link-btn">
            <button
              className="underline-button color-white"
              onClick={goBackButton}
            >
              back
            </button>
          </div>
        </div>
        <div className="ph-right">
          <p className="title-small">eh portfolio</p>
        </div>
      </div>
      {/* /project-header */}

      {/* project-content-wrapper */}
      <div className="project-content-wrapper">
        {/* content-start */}
        <div className="content-start">
          <p className="secondary-title color-white">
            ux & ui, web development
          </p>
          <h1 className="title-middle color-white">eh portfolio</h1>
          <img
            src={require('../../../../assets/images/portfolio_preview_01.png')}
            alt="포트폴리오 웹사이트 프리뷰"
            className="project-img"
          />
        </div>
        {/* /content-start */}

        {/* content-end */}
        <div className="content-end">
          <h2 className="title">"eh portfolio"</h2>
          <ul>
            {PortfolioItemList.map((t) => {
              return (
                <li key={t.id} className={t.itemClass}>
                  <p className={t.titleClass}>{t.title}</p>
                  <p className={t.class}>{t.desc}</p>
                  <p className={t.class}>{t.desc02}</p>
                  <p className={t.class}>{t.desc03}</p>
                </li>
              );
            })}
          </ul>
          <div className="project-link-item">
            <p className="secondary-title">링크</p>
            <a href="" className="base-underline-link-small project-link">
              github
            </a>
          </div>
        </div>
        {/* /content-end */}
      </div>
      {/* /project-content-wrapper */}
    </div>
  );
};

export default Portfolio;
