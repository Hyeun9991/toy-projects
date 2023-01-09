import React from 'react';
import './Layout.scss';
import Header from './Header/Header';
import Footer from './Footer/Footer'

const Layout = (props) => {
  return (
    <div className="layout">
      <Header />

      <main className="main">{props.children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
