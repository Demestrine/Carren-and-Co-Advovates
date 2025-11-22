import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="logo">BYLAW</div>
        <nav className="nav">
          <a href="#main">Main</a>
          <a href="#legal-areas">Legal Areas</a>
          <a href="#why-us">Why us</a>
          <a href="#team">Team</a>
          <a href="#reviews">Reviews</a>
          <a href="#contacts">Contacts</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
