import React from "react";
import "./ContactSection.css";

import telephone from "../assets/images/telephone.png";
import mail from "../assets/images/mail.png";
import locationIcon from "../assets/images/location.png";

import Symbol1 from "../assets/images/s1.png";
import Symbol2 from "../assets/images/s2.png";
import Symbol3 from "../assets/images/s3.png";
import Symbol4 from "../assets/images/s4.png";
import cameraIcon from "../assets/images/MaskGroupRed.png";


const ContactSection = () => {
    return (
        <section className="contact">
            <div className="contact-container">

                {/* LEFT */}
                <div className="contact-left">
                    <span className="why-badge"><img src={cameraIcon} alt="CONTACT US" />CONTACT US</span>

                    <h2>
                        <span>Secure your</span> with us
                    </h2>

                    <p>
                        Have questions or need a customized security solution? Our team is
                        here to assist you. Get in touch with us today.
                    </p>

                    <div className="social-icons">
                        <a><img src={Symbol1} alt="" /></a>
                        <a><img src={Symbol2} alt="" /></a>
                        <a><img src={Symbol3} alt="" /></a>
                        <a><img src={Symbol4} alt="" /></a>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="contact-right">

                    <div className="contact-card">
                        <div className="icon">
                            <img src={telephone} alt="" />
                        </div>
                        <div>
                            <span>Phone Number</span>
                            <strong>+(1) 456 789 254</strong>
                        </div>
                    </div>

                    <div className="contact-card">
                        <div className="icon">
                            <img src={mail} alt="" />
                        </div>
                        <div>
                            <span>Email Address</span>
                            <strong>info@domainname.com</strong>
                        </div>
                    </div>

                    <div className="contact-card full">
                        <div className="icon">
                            <img src={locationIcon} alt="" />
                        </div>
                        <div>
                            <span>Location</span>
                            <strong>
                                123 Secure Street, Suite 456, Safety City, SC-45678, United
                                States of America
                            </strong>
                        </div>
                    </div>

                </div>
            </div>
            <div className="contact-map-container">

                {/* LEFT MAP */}
                <div className="map-box">
                    <iframe
                        title="London Map"
                        src="https://www.google.com/maps?q=London%20Eye&output=embed"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>

                {/* RIGHT FORM */}
                <div className="form-box">
                    <h2>Send us message</h2>
                    <p>
                        We specialize in providing top-quality security and CCTV solutions to
                        safeguard your home and business.
                    </p>

                    <form>
                        <div className="form-row">
                            <input type="text" placeholder="First name" />
                            <input type="text" placeholder="Last name" />
                        </div>

                        <div className="form-row">
                            <input type="email" placeholder="E-mail" />
                            <input type="tel" placeholder="Phone no" />
                        </div>

                        <textarea placeholder="Message" rows="4" />

                        <button type="submit">Send Message</button>
                    </form>
                </div>

            </div>
        </section>
    );
};

export default ContactSection;
