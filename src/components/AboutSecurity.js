import "./AboutSecurity.css";
import telephone from "../assets/images/telephone.png";
import container1 from "../assets/images/Container1.png";
import container2 from "../assets/images/Container2.png";
import circle from "../assets/images/circle.png";
import cameraIcon from "../assets/images/MaskGroupRed.png";
import imgMask from "../assets/images/Img_mask.png";



const AboutSecurity = () => {
    return (
        <section className="aboutExact">
            <div className="aboutExact__wrap">

                <div className="aboutLeftImages">
                    <div className="aboutImg aboutImg--top">
                        <img
                            src={container1}
                            alt="CCTV Installation"
                        />
                    </div>

                    <div className="aboutImg aboutImg--bottom">
                        <img
                            src={container2}
                            alt="Security Monitoring"
                        />
                    </div>

                    <div className="aboutCenterCircle">
                        <div className="centerIcon">
                        </div>
                    </div>
                </div>


                <div className="aboutExact__content">
                    <span className="tag"><img src={cameraIcon} alt="About US" />ABOUT US</span>

                    <h1>
                        <span>Protecting homes</span>, businesses and peace
                    </h1>

                    <p>
                        We specialize in providing top-quality security and CCTV solutions to
                        safeguard your home and business. Our mission is to ensure peace of
                        mind with reliable, innovative, and tailored protection systems.
                    </p>

                    <div className="experience">
                        <img
                            src={imgMask}
                            alt=""
                        />
                        <p>
                            We Have More Than 25+ Years of CCTV Services Experience
                        </p>
                    </div>

                    <div className="ctaBox">
                        <div className="callInfo">
                            <div className="callIcon"> <img
                                src={telephone}
                                alt="Contact"
                            /></div>
                            <div>
                                <span>Call Directly 24/7</span>
                                <b>+(1) 456 789 254</b>
                            </div>
                        </div>

                        <button className="ctaBtn">More About →</button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutSecurity;
