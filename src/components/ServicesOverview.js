import React from "react";
import "./ServicesOverview.css";

import camWall from "../assets/images/servDetailImg1.png";
import camOutdoor from "../assets/images/servDetailImg.png";
import iconSupport from "../assets/images/1.png";
import iconRemote from "../assets/images/2.png";
import iconCustom from "../assets/images/3.png";
import circle from "../assets/images/circle.png";
import telephone from "../assets/images/telephone.png";
import mail from "../assets/images/mail.png";


const ServicesOverview = () => {
    return (
        <section className="services-overview">
            <div className="services-container2">

                {/* LEFT SIDEBAR */}
                <aside className="services-sidebar">

                    {/* SERVICES LIST */}
                    <div className="services-box">
                        <h4>Our Services</h4>

                        <ul className="services-list">
                            <li>
                                <span>CCTV Installation</span>
                                <i>→</i>
                            </li>
                            <li>
                                <span>24/7 Monitoring Services</span>
                                <i>→</i>
                            </li>
                            <li>
                                <span>Home Security Systems</span>
                                <i>→</i>
                            </li>
                            <li>
                                <span>Access Control Systems</span>
                                <i>→</i>
                            </li>
                            <li>
                                <span>Smart Home Integration</span>
                                <i>→</i>
                            </li>
                            <li>
                                <span>Alarm Systems Installation</span>
                                <i>→</i>
                            </li>
                        </ul>
                    </div>

                    {/* CONTACT CARD */}
                    <div className="help-card">
                        <div className="help-header">
                            <span className="logo-dot"><img src={circle} alt="Circle" />
                            </span>
                            <h4>AasraInfoTech.</h4>
                        </div>

                        <p>Need help? We are here to help you</p>

                        <div className="help-info">
                            <div className="help-item">
                                <span className="icon"><img src={mail} alt="Circle" /></span>
                                <span>domainname@gmail.com</span>
                            </div>

                            <div className="help-item">
                                <span className="icon"><img src={telephone} alt="telephone" /></span>
                                <span>+(1) 456 789 254</span>
                            </div>
                        </div>
                    </div>

                </aside>


                {/* RIGHT CONTENT */}
                <div className="services-content">

                    {/* TOP */}
                    <div className="top-section">
                        <img src={camWall} alt="" />
                        <p>
                            CCTV installation is a crucial step in safeguarding homes,
                            businesses, and public spaces. A well-planned surveillance system
                            provides real-time monitoring, crime prevention, and evidence
                            collection.
                        </p>
                    </div>

                    {/* OVERVIEW */}
                    <div className="overview">
                        <h1><span>Service</span> overview</h1>
                        <p>
                            Our comprehensive security solutions are designed to meet the
                            unique needs of homes, businesses, and industrial spaces.
                        </p>

                        <ul className="features">
                            <li>Advanced Surveillance Solutions To Protect What Matters Most.</li>
                            <li>Committed To Innovation, Reliability, And Peace Of Mind.</li>
                        </ul>
                    </div>

                    {/* ICON FEATURES */}
                    <div className="feature-icons">
                        <div className="feature-boxes why-card">
                            <div className="why-icon">
                                <img src={iconSupport} alt="24/7 Support" />
                            </div>
                            <strong>Advanced surveillance systems</strong>
                        </div>
                        <div className="feature-boxes why-card">
                            <div className="why-icon">
                                <img src={iconRemote} alt="24/7 Support" />
                            </div>
                            <strong>Seamless installation & setup</strong>
                        </div>
                        <div className="feature-boxes why-card">
                            <div className="why-icon">
                                <img src={iconCustom} alt="24/7 Support" />
                            </div>
                            <strong>24/7 monitoring & support</strong>
                        </div>
                    </div>

                    {/* IMAGE + TEXT */}
                    <div className="image-text">
                        <img src={camOutdoor} alt="" />
                        <div className="commitment-right">
                            <h2>
                                <span>Superior</span> protection
                            </h2>

                            <p className="desc">
                                We specialize in providing top-quality security and CCTV solutions
                                to safeguard your home and business. Our mission is to ensure peace
                                of mind with reliable.
                            </p>

                            <ul className="features">
                                <li>Advanced Surveillance Solutions To Protect What Matters Most.</li>
                                <li>Committed To Innovation, Reliability, And Peace Of Mind.</li>
                            </ul>
                        </div>
                    </div>

                    {/* ENHANCED SECURITY */}
                    <div className="enhanced">
                        <h1>Enhanced<span> Security</span></h1>

                        <div className="enhanced-list">

                            <div className="enhanced-item">
                                <span className="step">1</span>
                                <div className="content">
                                    <h5>Smart Monitoring</h5>
                                    <p>
                                        Stay connected with real-time surveillance & remote access ensuring
                                        24/7 protection for your home & business.
                                    </p>
                                </div>
                            </div>

                            <div className="enhanced-item">
                                <span className="step">2</span>
                                <div className="content">
                                    <h5>Reliable Protection</h5>
                                    <p>
                                        Our advanced security system are design for durability & efficiency
                                        providing long-term safety and peace of mind.
                                    </p>
                                </div>
                            </div>

                            <div className="enhanced-item">
                                <span className="step">3</span>
                                <div className="content">
                                    <h5>Seamless Integration</h5>
                                    <p>
                                        Easily integrate our security solutions with your existing setup for
                                        a hassle-free and comprehensive protection system.
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default ServicesOverview;
