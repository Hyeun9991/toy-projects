import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Projects from './components/Pages/Projects';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import './styles/App.scss';
import './styles/Navbar2.scss'
import './styles/Pages.scss';
import Navbar2 from './components/Navbar/Navbar2';
// import './styles/Navbar.scss';
// import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Navbar2 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
