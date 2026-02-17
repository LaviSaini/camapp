import React from "react";
import "./Services.css";

import s1 from "../assets/images/Residential.png";
import s2 from "../assets/images/Commercial.png";
import s3 from "../assets/images/Institution.png";
import s4 from "../assets/images/Hospitality.png";
import s5 from "../assets/images/Industrial.png";
import s6 from "../assets/images/Banking.png";
import s7 from "../assets/images/Command.png";
import s8 from "../assets/images/Construction.png";
// import s9 from "../assets/images/Retail.png";
import s10 from "../assets/images/Healthcare.png";
import s11 from "../assets/images/Gated.png";

import s12 from "../assets/images/Risk.jpeg";
import s13 from "../assets/images/System.jpeg";
import s14 from "../assets/images/Professional.jpeg";
import s15 from "../assets/images/Intelligent.png";



import cameraIcon from "../assets/images/MaskGroupRed.png";
import { Link } from "react-router-dom";


const Solutions = () => {
    const solutions = [
        {
            img: s1,
            title: "Residential Solutions",
            url: "/solutions/Residential"
        },
        {
            img: s2,
            title: "Commercial Solutions",
            url: "/solutions/Commercial"

        },
        {
            img: s3,
            title: "Institution Solutions",
            url: "/solutions/Institution"

        },
        {
            img: s4,
            title: "Hospitality Solutions",
            url: "/solutions/Hospitality"

        },
        {
            img: s5,
            title: "Industry & Factory Solutions",
            url: "/solutions/Industrial"

        },
        {
            img: s6,
            title: "Banking & Financial Industry Solutions",
            url: "/solutions/Banking"

        },
        {
            img: s7,
            title: "Command & Control Room Solutions",
            url: "/solutions/Command"

        },
        {
            img: s8,
            title: "Construction side surviellance",
            url: "/solutions/Construction"

        },
        {
            img: s10,
            title: "Healthcare & Hospital Solutions",
            url: "/solutions/Healthcare"

        },

        {
            img: s11,
            title: "Gated Community & Township Solutions",
            url: "/solutions/Gated"

        },

    ];
    const riskAssessmentData = {
        title: "1. Risk Assessment & Consultation",
        content: `
    <p>
      Every successful security system begins with a comprehensive risk assessment and strategic consultation.
      We analyze your premises, operational workflow, and potential vulnerabilities to design a solution that is both effective and future-ready.
    </p>

    <p>
      Our team conducts a detailed evaluation of entry and exit points, blind spots, high-risk zones, asset-sensitive areas,
      and environmental factors. We also assess existing infrastructure, networking capability, and compliance requirements
      to ensure seamless integration with your operations.
    </p>

    <p>Through structured consultation, we identify:</p>

    <ul>
      <li>Security gaps and exposure risks</li>
      <li>Internal and external threat points</li>
      <li>Movement patterns and operational flow</li>
      <li>Critical assets requiring enhanced monitoring</li>
      <li>Scalability requirements for future expansion</li>
    </ul>

    <p>
      Based on this assessment, we develop a customized security blueprint aligned with your safety objectives,
      operational efficiency, and budget considerations.
    </p>

    <p>
      Our goal is not just to install surveillance equipment, but to engineer a proactive protection strategy
      that minimizes risk and maximizes control.
    </p>
  `,
        image: s12
    };

    const systemArchitectureData = {
        title: "2. System Architecture & Design",
        content: `
    <p>
      We design robust, scalable, and future-ready surveillance architectures tailored to the unique requirements of each environment.
      Our system design process ensures that every component, from cameras and recorders to networking and storage,
      functions as a unified, intelligent ecosystem.
    </p>

    <p>
      We develop a structured security blueprint that defines device placement, network topology, storage capacity,
      bandwidth requirements, and integration points. This ensures optimal coverage, seamless communication between devices,
      and long-term operational reliability.
    </p>

    <h4>Engineered for Performance and Reliability</h4>

    <p>Every architecture is designed to deliver:</p>

    <ul>
      <li>High system uptime</li>
      <li>Secure data transmission</li>
      <li>Optimized bandwidth usage</li>
      <li>Long-term cost efficiency</li>
      <li>AI and automation readiness</li>
    </ul>

    <p>
      Our goal is to move beyond basic installations and create intelligent surveillance infrastructures
      that are structured, secure, and built to scale.
    </p>
  `,
        image: s13
    };
    const professionalDeploymentData = {
        title: "3. Professional Deployment",
        content: `
    <p>
      Deployment is executed with precision, discipline, and technical expertise.
      Our certified technicians ensure that every surveillance system is installed according to structured engineering standards,
      guaranteeing performance, reliability, and long-term stability.
    </p>

    <p>
      We follow a systematic implementation process to ensure seamless integration between devices,
      networking infrastructure, and monitoring systems.
    </p>

    <h4>Engineered for Reliability</h4>

    <p>Our deployment approach ensures:</p>

    <ul>
      <li>Clean and professional installation</li>
      <li>High system uptime</li>
      <li>Secure data transmission</li>
      <li>Reduced maintenance issues</li>
      <li>Scalable infrastructure for future upgrades</li>
    </ul>

    <p>
      We do not just install devices. We deliver structured, secure,
      and seamlessly integrated surveillance environments built for long-term performance.
    </p>
  `,
        image: s14
    };
    const videoAnalyticsData = {
        title: "4. Intelligent Video Analytics & Centralised Monitoring",
        content: `
    <p>
      We enhance traditional surveillance systems with advanced artificial intelligence and smart automation capabilities.
      Our AI-driven solutions transform passive monitoring into proactive security management.
    </p>

    <p>
      By integrating intelligent video analytics, automated alert mechanisms,
      and centralized monitoring platforms, we enable real-time decision-making,
      faster response, and improved operational control.
    </p>

    <p>
      Our AI-powered analytics systems automatically analyze live and recorded video feeds
      to detect predefined events and unusual behavior patterns.
    </p>

    <h4>Intelligent Video Analytics Capabilities</h4>

    <ul>
      <li>Intrusion detection</li>
      <li>Line crossing detection</li>
      <li>Face recognition</li>
      <li>Vehicle and number plate recognition (ANPR)</li>
      <li>People counting and crowd density monitoring</li>
      <li>Object detection and anomaly identification</li>
    </ul>

    <p>
      This significantly reduces dependency on manual monitoring
      and minimizes the risk of human error.
    </p>
  `,
        image: s15
    };
    const solutionDetails = [
        riskAssessmentData,
        systemArchitectureData,
        professionalDeploymentData,
        videoAnalyticsData
    ];

    return (
        <section className="services">
            <div className="services-container">

                {/* HEADER */}
                <div className="services-header">
                    <h2 className="services-title solution-title">
                        <span>SOLUTIONS</span>
                    </h2>
                    <p className="introDescription" >At Aasra Infotech, we deliver end-to-end security ecosystems designed to protect people, property, and operations across residential, commercial, institutional, and industrial environments.
                        Our approach goes beyond installing devices — we engineer integrated, intelligent, and scalable security infrastructures that combine surveillance, access control, networking, and AI-powered analytics into one unified system.
                        From consultation and site assessment to system design, installation, integration, and long-term support, we provide complete lifecycle management of your security infrastructure.
                    </p>
                </div>

                {solutionDetails.map((data, index) => (
                    <div key={index} className={`solution-row ${index % 2 !== 0 ? "reverse" : ""}`}>
                        <div className="solution-text">
                            <h3>{data.title}</h3>
                            {data.content && <p dangerouslySetInnerHTML={{ __html: data.content }}></p>}
                        </div>

                        {data.image && <div className="solution-image">
                            <img src={data.image} alt={data.title} />
                        </div>}
                    </div>))}
            </div>
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
                        <div key={index}>
                            <Link to={item.url} className="service-image">
                                <img src={item.img} className="imageeee" alt={item.title} />
                                {/* <div className="service-icon">
                                    <img src={item.icon} alt="" />
                                </div> */}
                            </Link>

                            <div style={{ cursor: 'pointer' }} onClick={() => window.location.href = item.url}>
                                <h4>{item.title}</h4>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Solutions;
