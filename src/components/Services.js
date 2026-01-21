import React from "react";
import "./Services.css";

import s1 from "../assets/images/service-image-1.png";
import s2 from "../assets/images/service-image-2.png";
import s3 from "../assets/images/service-image-3.png";
import s4 from "../assets/images/service-image-4.png";
import s5 from "../assets/images/service-image-5.png";
import s6 from "../assets/images/service-image-6.png";

import iconCCTV from "../assets/images/1.png";
import iconMonitor from "../assets/images/2.png";
import iconHome from "../assets/images/3.png";
import iconAccess from "../assets/images/4.png";
import iconSmart from "../assets/images/1.png";
import iconAlarm from "../assets/images/2.png";
import cameraIcon from "../assets/images/MaskGroupRed.png";


const Services = () => {
  const services = [
    {
      img: s1,
      icon: iconCCTV,
      title: "CCTV Installation",
    },
    {
      img: s2,
      icon: iconMonitor,
      title: "24/7 Monitoring Services",
    },
    {
      img: s3,
      icon: iconHome,
      title: "Home Security Systems",
    },
    {
      img: s4,
      icon: iconAccess,
      title: "CCTV Access Control Systems",
    },
    {
      img: s5,
      icon: iconSmart,
      title: "Smart Home Integration",
    },
    {
      img: s6,
      icon: iconAlarm,
      title: "Alarm Systems Installation",
    },
  ];

  return (
    <section className="services">
      <div className="services-container">

        {/* HEADER */}
        <div className="services-header">
          <span className="services-badge"><img src={cameraIcon} alt="SERVICES" />SERVICES</span>
          <h2 className="services-title">
            <span>Comprehensive security </span>and<br/> surveillance solutions
          </h2>
        </div>

        {/* GRID */}
        <div className="services-grid">
          {services.map((item, index) => (
            <div className="service-card" key={index}>
              <div className="service-image">
                <img src={item.img} className="imageeee" alt={item.title} />
                <div className="service-icon">
                  <img src={item.icon}  alt="" />
                </div>
              </div>

              <div className="service-content">
                <h4>{item.title}</h4>
                <p>
                  We provide professional CCTV installation services offering
                  high-quality cameras.
                </p>

                <a href="/" className="service-link">
                  Discover More <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER CTA */}
        <div className="services-footer">
          <span className="free-badge">Free</span>
          <p>
            Let’s make something great work together.
            <a href="/"> Get Free Quote</a>
          </p>
        </div>

      </div>
    </section>
  );
};

export default Services;
