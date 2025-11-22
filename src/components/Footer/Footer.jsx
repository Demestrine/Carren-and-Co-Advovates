import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Carren & Co Advocates</h3>
            <p>I proudly Fight For Your Rights with decades of legal expertise and commitment to justice.</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <a href="#home">Home</a>
            <a href="#practice-areas">Practice Areas</a>
            <a href="#attorney">Our Attorney</a>
            <a href="#cases">Case Studies</a>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>📍 123 Legal Street, New York, NY 10001</p>
            <p>📞 (555) 123-4567</p>
            <p>✉️ info@carrenadvocates.com</p>
          </div>
          
          <div className="footer-section">
            <h4>Practice Areas</h4>
            <p>• Competition Law</p>
            <p>• Real Estate Law</p>
            <p>• Immigration Law</p>
            <p>• Family Law</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Carren & Co Advocates. All rights reserved. | www.DownloadNewThemes.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;