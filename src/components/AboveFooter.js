import React from "react";
import "./Footer.css";

import FooterLogo from "../assets/images/cta-box-image.png";
import cameraIcon from "../assets/images/MaskGroup.png";
import telephone from "../assets/images/telephone.png";
import mail from "../assets/images/mail.png";

const AboveFooter = () => {
  return (
    <section className="aboveFooter">
      <div className="abovefooter-container">

        {/* LEFT CONTENT */}
        <div className="abovefooter-left">

          {/* Badge */}
          <div className="welcome-badge">
            <img src={cameraIcon} alt="Contact Us" />
            <span>CONTACT US</span>
          </div>

          {/* Title */}
          <h1 className="hero-titlee">
            Secure your world with trusted solutions join today!
          </h1>

          {/* Description */}
          <p className="hero-descriptions">
            Take control of your safety with our reliable security and CCTV
            solutions.
          </p>

          {/* Contact Blocks */}
          <div className="contact-info">

            <div className="contact-item">
              <div className="contact-icon">
                <img src={telephone} alt="Phone" />
              </div>
              <div>
                <p className="contact-label">Phone number</p>
                <p className="contact-value">+(1) 456 789 254</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <img src={mail} alt="Email" />
              </div>
              <div>
                <p className="contact-label">Email address</p>
                <p className="contact-value">info@aasrainfotech.com</p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="abovefooter-right">
          <img src={FooterLogo} alt="CCTV Man" />
        </div>

      </div>
    </section>
  );
};

export default AboveFooter;
