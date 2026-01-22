import React from "react";
import "./CommitmentSection.css";

import imgTop from "../assets/images/commitment1.png";
import imgBottom from "../assets/images/commitment2.png";
import avatar1 from "../assets/images/av1.png";
import avatar2 from "../assets/images/av2.png";
import avatar3 from "../assets/images/av3.png";
import avatar4 from "../assets/images/av4.png";
import cameraIcon from "../assets/images/MaskGroupRed.png";


const CommitmentSection = () => {
    return (
        <section className="commitment">
            <div className="commitment-container">

                <div className="commitment-flex">
                    <div className="left-col">
                        <div className="img-card">
                            <img src={imgTop} alt="Office CCTV" />
                        </div>

                        <div className="stats-card">
                            <h3>1.2K</h3>
                            <p>Homes & Businesses Secured with Confidence</p>

                            <div className="avatars">
                                <img src={avatar1} />
                                <img src={avatar2} />
                                <img src={avatar3} />
                                <img src={avatar4} />
                            </div>
                        </div>
                    </div>

                    <div className="right-col">
                        <img src={imgBottom} alt="Camera Installation" />
                    </div>
                </div>


                <div className="commitment-right">
                     <span className="why-badge"><img src={cameraIcon} alt="OUR COMMITMENT" />OUR COMMITMENT</span>

                    <h2>
                       <span>Delivering security</span> with excellence
                    </h2>

                    <p className="desc">
                        We specialize in providing top-quality security and CCTV solutions
                        to safeguard your home and business. Our mission is to ensure peace
                        of mind with reliable.
                    </p>

                    <div className="stats-row">
                        <div>
                            <h3>100+</h3>
                            <span>Trusted Protection</span>
                        </div>
                        <div>
                            <h3>110+</h3>
                            <span>Trusted Protection</span>
                        </div>
                        <div>
                            <h3>120+</h3>
                            <span>Trusted Protection</span>
                        </div>
                    </div>

                    <ul className="features">
                        <li>Advanced Surveillance Solutions To Protect What Matters Most.</li>
                        <li>Committed To Innovation, Reliability, And Peace Of Mind.</li>
                    </ul>
                </div>

            </div>
        </section>
    );
};

export default CommitmentSection;
