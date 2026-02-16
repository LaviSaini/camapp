// HeroSection.jsx
import React from 'react';
import './HeroSection.css';
import Header from '../components/Header';
import playIcon from '../assets/images/Symbol.svg'
import cameraIcon from '../assets/images/MaskGroup.png'
import cam1 from '../assets/images/cam1.png'
import cam2 from '../assets/images/cam2.png'
import cam3 from '../assets/images/Clip_path_group.png'
import bigCamera from '../assets/images/hero-image.png.png'



const HeroSection = () => {
  const handleGetStarted = () => {
    alert('Get Started clicked!');
  };

  // const handleWatchVideo = () => {
  //   alert('Watch Video clicked!');
  // };

  return (
    <section className='backgroundddd'>
      {/* <Header /> */}
      <section className="hero-section">
        <div className="hero-container">
          <div>

            {/* Badge */}
            <div className="welcome-badge">
              <img src={cameraIcon} alt='Welcome'></img>WELCOME SOLUTIONS
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
{/* 
              <button className="secondary-btn" onClick={handleWatchVideo}>
                <span className="play-icon"><img src={playIcon}></img></span>
                Watch Video
              </button> */}
            </div>

            {/* Features */}
            <div className="features-container">
              <div className="feature-item">
                <div className="feature-icon"><img src={cam1}></img></div>
                <div className="feature-text">
                  <span className="feature-title">Premium Indoor Cameras</span>
                  {/* <p className="feature-subtitle">High-quality indoor surveillance</p> */}
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon"><img src={cam2}></img></div>
                <div className="feature-text">
                  <span className="feature-title">24/7 Quick Alarms Response</span>
                  {/* <p className="feature-subtitle">Immediate emergency response</p> */}
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon"><img src={cam3}></img></div>
                <div className="feature-text">
                  <span className="feature-title">Amazing Security Systems</span>
                  {/* <p className="feature-subtitle">Comprehensive protection</p> */}
                </div>
              </div>
            </div>
          </div>
          <div class="hero-camera">
            <img src={bigCamera} alt="Camera" />
          </div>

        </div>
      </section>
    </section>

  );
};

export default HeroSection;