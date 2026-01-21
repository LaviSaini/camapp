import React from "react";
import "./Footer.css";
import FooterLogo from "../assets/images/footer-logo.svg.png";
import Symbol1 from "../assets/images/Symbol1.png";
import Symbol2 from "../assets/images/Symbol2.png";
import Symbol3 from "../assets/images/Symbol3.png";
import Symbol4 from "../assets/images/Symbol4.png";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* TOP CONTENT */}
        <div className="footer-content">

          {/* LEFT */}
          <div className="footer-column about-column">
            <div className="footer-logo">
              <img src={FooterLogo} alt="UltraCam" />
            </div>

            <h4 className="footer-subtitle">About Solutions</h4>
            <p className="about-text">
              We provide advanced Security and CCTV solutions, ensuring 24/7
              protection with high-quality systems.
            </p>

            <div className="social-icons">
              <div className="icon-circle"><img src={Symbol1} alt="Pinterest" /></div>
              <div className="icon-circle"><img src={Symbol2} alt="Twitter" /></div>
              <div className="icon-circle"><img src={Symbol3} alt="Facebook" /></div>
              <div className="icon-circle"><img src={Symbol4} alt="Instagram" /></div>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="footer-column">
            <h3 className="column-title">Quick link</h3>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
            </ul>
          </div>

          {/* SERVICES */}
          <div className="footer-column">
            <h3 className="column-title">Services</h3>
            <ul className="footer-links">
              <li>24/7 Monitoring Services</li>
              <li>Alarm Systems Installation</li>
              <li>CCTV Installation</li>
              <li>Smart Home Integration</li>
            </ul>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">
          <p>Copyright © 2026 All Rights Reserved.</p>

          <div className="policy-links">
            <a href="#">Help</a>
            <span>/</span>
            <a href="#">Privacy Policy</a>
            <span>/</span>
            <a href="#">Terms & Condition</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
