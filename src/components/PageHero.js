import React from "react";
import "./PageHero.css";

const PageHero = ({
  title,
  breadcrumb = [],
  backgroundImage,
}) => {
  return (
    <section
      className="page-hero"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="page-hero-overlay" />

      <div className="page-hero-content">
        <h1>{title}</h1>

        {breadcrumb.length > 0 && (
          <p className="breadcrumb">
            {breadcrumb.map((item, index) => (
              <span key={index}>
                {item}
                {index !== breadcrumb.length - 1 && " / "}
              </span>
            ))}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
