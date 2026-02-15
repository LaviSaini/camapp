import SolutionSection from "./SolutionSection";
import "./Solution.css";
import cameraIcon from "../assets/images/MaskGroupRed.png";


const SolutionsDetailLayout = ({ data }) => {
    return (
        <section className="solution-detail">
            <div className="services-header">
                <span className="services-badge"><img src={cameraIcon} alt="SOLUTIONS" />{data.hero.title}</span>
                <h2 className="services-title">
                    <span>{data.intro.heading}</span>
                </h2>
                <p className="introDescription" dangerouslySetInnerHTML={{ __html: data.intro.description }}></p>
            </div>

            {data.sections.map((item, index) => (
                <SolutionSection
                    key={index}
                    data={item}
                    reverse={index % 2 !== 0}
                />
            ))}
        </section>
    );
};

export default SolutionsDetailLayout;
