// Header.jsx
import React, { useEffect, useState } from 'react';
import './Header.css';
import logoIcon from "../assets/images/logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsSticky(window.scrollY > 60);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleGetQuoteClick = () => {
    // You can add your quote functionality here
    alert('Get Quote functionality would go here!');
  };

  return (
    <header className={`header ${isSticky ? "sticky" : ""}`}>
      <div className="header-container">

        {/* Logo */}
        <div className="logo">
          <img src={logoIcon} alt="UltraCam Logo" className="logo-img" />
        </div>


        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-links">
            <li><a href="/" className="nav-link active">Home</a></li>
            <li><a href="/about" className="nav-link">About Us</a></li>
            <li><a href="/services" className="nav-link">Services</a></li>
            <li><a href="/contact" className="nav-link">Contact Us</a></li>
          </ul>
        </nav>

        {/* Get A Quote Button with arrow */}
        <button className="quote-btn" onClick={handleGetQuoteClick}>
          Get A Quote
          <span className="quote-arrow">→</span>
        </button>

        {/* Mobile Menu Button (Hamburger) */}
        <button
          className="mobile-menu-btn"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
        </button>

        {/* Mobile Navigation Menu */}
        <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <nav className="mobile-nav-content">
            <div className="mobile-logo">
              <h1>UltraCam<span className="logo-dot">.</span></h1>
            </div>
            <ul className="mobile-nav-links">
              <li><a href="/" className="mobile-nav-link active" onClick={() => setIsMobileMenuOpen(false)}>Home</a></li>
              <li><a href="/about" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>About Us</a></li>
              <li><a href="/services" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Services</a></li>
              <li><a href="/contact" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</a></li>
              <li>
                <button
                  className="mobile-quote-btn"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    handleGetQuoteClick();
                  }}
                >
                  Get A Quote
                  <span className="mobile-quote-arrow">→</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>

        {/* Overlay for mobile menu */}
        {isMobileMenuOpen && (
          <div
            className="mobile-overlay"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
        )}
      </div>
    </header>
  );
};

export default Header;