// Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Main Footer Content */}
        <div className="footer-content">
          
          {/* Left Column - About */}
          <div className="footer-column about-column">
            <div className="logo-section">
              <h2 className="footer-logo">UltraCam</h2>
              <p className="footer-subtitle">About Solutions</p>
            </div>
            <p className="about-text">
              We provide advanced Security and CCTV solutions, ensuring 24/7 protection with high-quality systems.
            </p>
            
            {/* Social Icons */}
            <div className="social-icons">
              <div className="icon-circle"></div>
              <div className="icon-circle"></div>
              <div className="icon-circle"></div>
            </div>
          </div>

          {/* Divider Line */}
          <div className="footer-divider"></div>

          {/* Middle Column - Quick Links */}
          <div className="footer-column quick-links-column">
            <h3 className="column-title">Quick link</h3>
            <ul className="footer-links">
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="/about" className="footer-link">About Us</a></li>
              <li><a href="/services" className="footer-link">Services</a></li>
            </ul>
          </div>

          {/* Divider Line */}
          <div className="footer-divider"></div>

          {/* Right Column - Services */}
          <div className="footer-column services-column">
            <h3 className="column-title">Services</h3>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">24/7 Monitoring Services</a></li>
              <li><a href="#" className="footer-link">Alarm Systems Installation</a></li>
              <li><a href="#" className="footer-link">CCTV Installation</a></li>
              <li><a href="#" className="footer-link">Smart Home Integration</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section - Copyright and Links */}
        <div className="footer-bottom">
          <div className="footer-divider-long"></div>
          
          <div className="bottom-content">
            <p className="copyright">
              Copyright © 2026 All Rights Reserved.
            </p>
            
            <div className="policy-links">
              <a href="#" className="policy-link">Help</a>
              <a href="#" className="policy-link">Privacy Policy</a>
              <a href="#" className="policy-link">Terms & Condition</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;