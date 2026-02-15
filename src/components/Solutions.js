import React from "react";
import "./Services.css";

import s1 from "../assets/images/Residential.png";
import s2 from "../assets/images/Commercial.png";
import s3 from "../assets/images/Institution.png";
import s4 from "../assets/images/Hospitality.png";
import s5 from "../assets/images/Industrial.png";
import s6 from "../assets/images/Banking.png";

import iconCCTV from "../assets/images/1.png";
import iconMonitor from "../assets/images/2.png";
import iconHome from "../assets/images/3.png";
import iconAccess from "../assets/images/4.png";
import iconSmart from "../assets/images/1.png";
import iconAlarm from "../assets/images/2.png";
import cameraIcon from "../assets/images/MaskGroupRed.png";
import { Link } from "react-router-dom";


const Solutions = () => {
    const solutions = [
        {
            img: s1,
            icon: iconCCTV,
            title: "Residential Solutions",
            url: "/solutions/Residential"
        },
        {
            img: s2,
            icon: iconMonitor,
            title: "Commercial Solutions",
            url: "/solutions/Commercial"

        },
        {
            img: s3,
            icon: iconHome,
            title: "Institution Solutions",
            url: "/solutions/Institution"

        },
        {
            img: s4,
            icon: iconAccess,
            title: "Hospitality Solutions",
            url: "/solutions/Hospitality"

        },
        {
            img: s5,
            icon: iconSmart,
            title: "Industry & Factory Solutions",
            url: "/solutions/Industrial"

        },
        {
            img: s6,
            icon: iconAlarm,
            title: "Banking & Financial Industry Solutions",
            url: "/solutions/Banking"

        },
    ];

    return (
        <section className="services">
            <div className="services-container">

                {/* HEADER */}
                <div className="services-header">
                    <span className="services-badge"><img src={cameraIcon} alt="SOLUTIONS" />SOLUTIONS</span>
                    <h2 className="services-title">
                        <span>Comprehensive solutions </span>
                    </h2>
                </div>

                {/* GRID */}
                <div className="services-grid">
                    {solutions.map((item, index) => (
                        <div className="service-card" key={index}>
                            <Link to={item.url} className="service-image">
                                <img src={item.img} className="imageeee" alt={item.title} />
                                <div className="service-icon">
                                    <img src={item.icon} alt="" />
                                </div>
                            </Link>

                            <div className="service-content">
                                <h4>{item.title}</h4>
                                <p>
                                    We provide professional CCTV installation services offering
                                    high-quality cameras.
                                </p>

                                <a href={item.url} className="service-link">
                                    Discover More <span>→</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* FOOTER CTA */}
                {/* <div className="services-footer">
          <span className="free-badge">Free</span>
          <p>
            Let’s make something great work together.
            <a href="/"> Get Free Quote</a>
          </p>
        </div> */}

            </div>
        </section>
    );
};

export default Solutions;
