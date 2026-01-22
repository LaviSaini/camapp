import React from "react";
import "./Vision.css";

import cameraImg from "../assets/images/Vision.png"; // left image
import missionIcon from "../assets/images/v1.png";
import visionIcon from "../assets/images/v2.png";
import goalIcon from "../assets/images/v3.png";

const MissionVision = () => {
  return (
    <section className="mv-section">
      <div className="mv-container">

        {/* LEFT IMAGE */}
        <div className="mv-image">
          <img src={cameraImg} alt="Security Camera" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="mv-content">

          <div className="mv-item">
            <div className="mv-icon">
              <img src={missionIcon} alt="Mission" />
            </div>
            <div className="mv-text">
              <h4>Our Mission</h4>
              <p>
                To provide cutting-edge security solutions that ensure safety,
                reliability, and peace of mind. We are committed to innovation,
                excellence, and building trust through advanced security
                solutions that ensure safety.
              </p>
            </div>
          </div>

          <div className="mv-divider" />

          <div className="mv-item">
            <div className="mv-icon">
              <img src={visionIcon} alt="Vision" />
            </div>
            <div className="mv-text">
              <h4>Our Vision</h4>
              <p>
                To provide cutting-edge security solutions that ensure safety,
                reliability, and peace of mind. We are committed to innovation,
                excellence, and building trust through advanced security
                solutions that ensure safety.
              </p>
            </div>
          </div>

          <div className="mv-divider" />

          <div className="mv-item">
            <div className="mv-icon">
              <img src={goalIcon} alt="Goal" />
            </div>
            <div className="mv-text">
              <h4>Our Goal</h4>
              <p>
                To provide cutting-edge security solutions that ensure safety,
                reliability, and peace of mind. We are committed to innovation,
                excellence, and building trust through advanced security
                solutions that ensure safety.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MissionVision;
