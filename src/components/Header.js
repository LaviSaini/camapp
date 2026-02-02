// Header.jsx
import React, { useEffect, useState } from 'react';
import './Header.css';
import logoIcon from "../assets/images/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import circle from "../assets/images/circle.png";


const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const navigate = useNavigate()
  useEffect(() => {
    if (typeof window === "undefined") return;

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
    // alert('Get Quote functionality would go here!');
    navigate('/contact')


  };

  return (
    <header className={`header ${isSticky ? "sticky" : ""}`}>
      <div className="header-container">

        <div className="logo" onClick={() => navigate("/")}>
          <span className="lgimage">
            <img src={circle} alt="Circle" />
          </span>
          <h4>AasraInfoTech.</h4>
        </div>

        <nav className="desktop-nav">
          <ul className="nav-links">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                About Us
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Services
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>

        <button className="quote-btn" onClick={handleGetQuoteClick}>
          Get A Quote
          <span className="quote-arrow">→</span>
        </button>

        <button
          className="mobile-menu-btn"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
        </button>

        <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <nav className="mobile-nav-content">
            <div className="mobile-logo">
              <img src={logoIcon} alt="AasraInfoTech Logo" className="logo-img" />
            </div>
            <ul className="mobile-nav-links">
              <li>
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    isActive ? "mobile-nav-link active" : "mobile-nav-link"
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "mobile-nav-link active" : "mobile-nav-link"
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Us
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    isActive ? "mobile-nav-link active" : "mobile-nav-link"
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Services
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "mobile-nav-link active" : "mobile-nav-link"
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </NavLink>
              </li>
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