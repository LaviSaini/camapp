// Header.jsx
import React, { useEffect, useState } from 'react';
import './Header.css';
import logoIcon from "../assets/images/aasraLogo.jpeg";
import { NavLink, useNavigate } from "react-router-dom";
import circle from "../assets/images/circle.png";


const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);

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
            <img src={logoIcon} alt="Circle" />
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
            <li
              className="dropdown"
              onMouseEnter={() => setIsSolutionsOpen(true)}
              onMouseLeave={() => setIsSolutionsOpen(false)}
            >
              <NavLink to='/solutions' className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }>
                Solutions <span className="dropdown-icon">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 7.5L10 12.5L15 7.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>

              </NavLink>

              {isSolutionsOpen && (
                <div className="dropdown-menu">
                  <NavLink to="/solutions/Residential" className="dropdown-item">Residential Solutions</NavLink>
                  <NavLink to="/solutions/Commercial" className="dropdown-item">Commercial Solutions</NavLink>
                  <NavLink to="/solutions/Institution" className="dropdown-item">Institution Solutions</NavLink>
                  <NavLink to="/solutions/Hospitality" className="dropdown-item">Hospitality Solutions</NavLink>
                  <NavLink to="/solutions/Industrial" className="dropdown-item">Industrial Solutions</NavLink>
                  <NavLink to="/solutions/Banking" className="dropdown-item">Banking & Financial Industry Solutions</NavLink>
                  <NavLink to="/solutions/Command" className="dropdown-item">Command & Control Room Solutions</NavLink>
                  <NavLink to="/solutions/Construction" className="dropdown-item">Construction site Solutions</NavLink>
                  <NavLink to="/solutions/Healthcare" className="dropdown-item">Healthcare & Hospital Solutions</NavLink>
                  <NavLink to="/solutions/Gated" className="dropdown-item">Gated Community & Township Solutions</NavLink>

                </div>
              )}
            </li>

             <li>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Products
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
              <h4>AasraInfoTech.</h4>
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
              <li className="mobile-dropdown">
                <NavLink
                  to='/solutions'
                  className={({ isActive }) =>
                    isActive ? "mobile-nav-link active" : "mobile-nav-link"
                  }
                  onClick={() => setIsMobileSolutionsOpen(!isMobileSolutionsOpen)}
                >
                  Solutions
                  <span className={`mobile-dropdown-arrow ${isMobileSolutionsOpen ? "open" : ""}`}>
                    ▾
                  </span>
                </NavLink>

                {isMobileSolutionsOpen && (
                  <ul className="mobile-submenu">
                    <li>
                      <NavLink to="/solutions/Residential" className="mobile-nav-sublink" onClick={() => setIsMobileMenuOpen(false)}>
                        Residential Solutions
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/solutions/Commercial" className="mobile-nav-sublink" onClick={() => setIsMobileMenuOpen(false)}>
                        Commercial Solutions
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/solutions/Institution" className="mobile-nav-sublink" onClick={() => setIsMobileMenuOpen(false)}>
                        Institution Solutions
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/solutions/Hospitality" className="mobile-nav-sublink" onClick={() => setIsMobileMenuOpen(false)}>
                        Hospitality Solutions
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/solutions/Industrial" className="mobile-nav-sublink" onClick={() => setIsMobileMenuOpen(false)}>
                        Industrial Solutions
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/solutions/Banking" className="mobile-nav-sublink" onClick={() => setIsMobileMenuOpen(false)}>
                        Banking & Financial Industry Solutions
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/solutions/Command" className="mobile-nav-sublink" onClick={() => setIsMobileMenuOpen(false)}>
                        Command & Control Room Solutions
                      </NavLink>
                    </li>
                     <li>
                      <NavLink to="/solutions/Construction" className="mobile-nav-sublink" onClick={() => setIsMobileMenuOpen(false)}>
                        Construction site Solutions
                      </NavLink>
                    </li>
                     <li>
                      <NavLink to="/solutions/Healthcare" className="mobile-nav-sublink" onClick={() => setIsMobileMenuOpen(false)}>
                        Healthcare & Hospital Solutions
                      </NavLink>
                    </li>
                     <li>
                      <NavLink to="/solutions/Gated" className="mobile-nav-sublink" onClick={() => setIsMobileMenuOpen(false)}>
                        Gated Community & Township Solutions
                      </NavLink>
                    </li>
                    
                  </ul>
                )}
              </li>

               <li>
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    isActive ? "mobile-nav-link active" : "mobile-nav-link"
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Products
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