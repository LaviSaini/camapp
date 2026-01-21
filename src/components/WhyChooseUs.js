import React from "react";
import "./WhyChooseUs.css";

import cameraCenter from "../assets/images/why-choose-image.png";
import iconSupport from "../assets/images/1.png";
import iconRemote from "../assets/images/2.png";
import iconCustom from "../assets/images/3.png";
import iconMaintain from "../assets/images/4.png";
import cameraIcon from "../assets/images/MaskGroupRed.png";


const WhyChooseUs = () => {
  return (
    <section className="why-choose">
      <div className="why-container">

        {/* TOP TITLE */}
        <div className="why-header">
          <span className="why-badge"><img src={cameraIcon} alt="WHY CHOOSE US" />WHY CHOOSE US</span>
          <h2 className="why-title">
            <span>Expert security</span>, reliable CCTV solutions
          </h2>
          <div className="title-underline"></div>
        </div>

        {/* CONTENT */}
        <div className="why-content">

          {/* LEFT CARDS */}
          <div className="why-column">
            <div className="why-card">
              <div className="why-icon">
                <img src={iconSupport} alt="24/7 Support" />
              </div>
              <h4>24/7 Support</h4>
              <p>
                We provide professional CCTV installation services offering
                high-quality cameras.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon">
                <img src={iconCustom} alt="Customized Solutions" />
              </div>
              <h4>Customized Solutions</h4>
              <p>
                We provide professional CCTV installation services offering
                high-quality cameras.
              </p>
            </div>
          </div>

          {/* CENTER IMAGE */}
          <div className="why-center">
            <img src={cameraCenter} alt="CCTV Cameras" />
          </div>

          {/* RIGHT CARDS */}
          <div className="why-column">
            <div className="why-card">
              <div className="why-icon">
                <img src={iconRemote} alt="Remote Access" />
              </div>
              <h4>Remote Access</h4>
              <p>
                We provide professional CCTV installation services offering
                high-quality cameras.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon">
                <img src={iconMaintain} alt="Proactive Maintenance" />
              </div>
              <h4>Proactive Maintenance</h4>
              <p>
                We provide professional CCTV installation services offering
                high-quality cameras.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
