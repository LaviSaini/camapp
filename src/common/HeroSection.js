// HeroSection.jsx
import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const handleGetStarted = () => {
    // Handle get started action
    alert('Get Started clicked!');
  };

  const handleWatchVideo = () => {
    // Handle watch video action
    alert('Watch Video clicked!');
  };

  return (
    <section className="hero-section">
      <div className="hero-container">
        
        {/* Badge */}
        <div className="welcome-badge">
          WELCOME SOLUTIONS
        </div>

        {/* Main Title */}
        <h1 className="hero-title">
          ADVANCED SECURITY SOLUTIONS FOR EVERY SPACE
        </h1>

        {/* Description */}
        <p className="hero-description">
          The best home security solution of 2024 combine AI-powered cameras, 
          smart integration, and 24/7 monitoring for ultimate protection & convenience.
        </p>

        {/* Buttons */}
        <div className="hero-buttons">
          <button className="primary-btn" onClick={handleGetStarted}>
            Get Started Now
            <span className="btn-arrow">→</span>
          </button>
          
          <button className="secondary-btn" onClick={handleWatchVideo}>
            <span className="play-icon">▶</span>
            Watch Video
          </button>
        </div>

        {/* Features */}
        <div className="features-container">
          <div className="feature-item">
            <div className="feature-icon">📹</div>
            <div className="feature-text">
              <span className="feature-title">Premium Indoor Cameras</span>
              <p className="feature-subtitle">High-quality indoor surveillance</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon">🚨</div>
            <div className="feature-text">
              <span className="feature-title">24/7 Quick Alarms Response</span>
              <p className="feature-subtitle">Immediate emergency response</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon">🛡️</div>
            <div className="feature-text">
              <span className="feature-title">Amazing Security Systems</span>
              <p className="feature-subtitle">Comprehensive protection</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;