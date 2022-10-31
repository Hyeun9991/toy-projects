import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/Home.scss';

const HomeButton = () => {
  return (
    <div className="back-to-home">
      <Link to="/">
        <p>back</p>
        <span></span>
      </Link>
    </div>
  );
};

export default HomeButton;
