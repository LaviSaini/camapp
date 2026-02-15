import "./Solution.css";

const SolutionSection = ({ data, reverse }) => {
  return (
    <div className={`solution-row ${reverse ? "reverse" : ""}`}>
      <div className="solution-text">
        <h3>{data.title}</h3>
        {data.content && <p dangerouslySetInnerHTML={{ __html: data.content }}></p>}
      </div>

        {data.image && <div className="solution-image">
          <img src={data.image} alt={data.title} />
        </div>}
    </div>
  );
};

export default SolutionSection;
