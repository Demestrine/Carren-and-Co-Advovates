import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-logo">
              <div className="logo">BYLAW</div>
              <p className="copyright">
                © 2024 BYLAW. All rights reserved.
              </p>
            </div>
            
            <div className="footer-columns">
              <div className="footer-column">
                <h4>Quick Links</h4>
                <a href="#main">Main</a>
                <a href="#legal-areas">Legal Areas</a>
                <a href="#why-us">Why Us</a>
                <a href="#team">Team</a>
              </div>
              
              <div className="footer-column">
                <h4>Practice Areas</h4>
                <a href="#corporate">Corporate Law</a>
                <a href="#family">Family Law</a>
                <a href="#real-estate">Real Estate</a>
                <a href="#mediation">Mediation</a>
              </div>
              
              <div className="footer-column">
                <h4>Contacts</h4>
                <p>123 Legal Avenue</p>
                <p>Suite 400</p>
                <p>New York, NY 10001</p>
                <p>(+29) 556-0764</p>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="footer-social">
              <button className="social-icon">f</button>
              <button className="social-icon">t</button>
              <button className="social-icon">in</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;