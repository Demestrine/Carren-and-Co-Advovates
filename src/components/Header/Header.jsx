import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h2>Carren & Co Advocates</h2>
        </div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#stories">Our Stories</a>
          <a href="#practice-areas">Practice Areas</a>
          <a href="#attorney">Attorney</a>
          <a href="#cases">Case Studies</a>
          <a href="#contact">Contact</a>
        </nav>
        <button className="consultation-btn">Free Consultation</button>
      </div>
    </header>
  );
};

export default Header;