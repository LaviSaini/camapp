import React from "react";
import "./ExpertiseSection.css";

import expertImg from "../assets/images/expertImg.png";
import techIcon from "../assets/images/ex1.png";
import techIcon2 from "../assets/images/ex2.png";
import phoneIcon from "../assets/images/telephone.png";
import cameraIcon from "../assets/images/MaskGroupRed.png";

const ExpertiseSection = () => {
    return (
        <section className="expertise">
            <div className="expertise-container">

                {/* LEFT CONTENT */}
                <div className="expertise-left">
                    <span className="why-badge"><img src={cameraIcon} alt="OUR COMMITMENT" />OUR COMMITMENT</span>
                    <h2>
                        <span>Smart solutions</span> for ultimate security
                    </h2>

                    <p className="desc">
                        We specialize in providing top-quality security and CCTV solutions to
                        safeguard your home and business. Our mission is to ensure peace of
                        mind with reliable.
                    </p>

                    <div className="features-row">
                        <div>
                        <div className="feature-card">
                            <div className="icon">
                                <img src={techIcon} alt="" />
                            </div>
                            <div>
                                <h4>Advanced Tech</h4>
                                <p>We provide professional CCTV installation services.</p>
                            </div>
                        </div>

                        <div className="feature-card">
                            <div className="icon">
                                <img src={techIcon2} alt="" />
                            </div>
                            <div>
                                <h4>Advanced Tech</h4>
                                <p>We provide professional CCTV installation services.</p>
                            </div>
                        </div>
                        </div>

                        <div className="stats-box">
                            <h3>39+</h3>
                            <span>Success Rate Homes & Businesses</span>

                            <ul>
                                <li>Advanced Surveillance.</li>
                                <li>Advanced Surveillance.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="expertise-right">
                    <img src={expertImg} alt="Security Camera" />

                    <div className="support-badge">
                        <div className="contact-icon"><img src={phoneIcon} alt="" /></div>
                        <div className="telephoneContainerExpert">
                            <strong>24/7 Support</strong>
                            <span>+(1) 456 789 254</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ExpertiseSection;
