import React from "react";
import "./award.css";

const logos = [
  "/assets/logo1.png",
  "/assets/logo2.png",
  "/assets/logo3.png",
  "/assets/logo4.png",
  "/assets/logo5.png",
  "/assets/logo6.png",
];

const Award = () => {
  return (
    <div className="award-section">
      <div className="award-content">
        <div className="award-icon">
          <img src="/assets/leaf-icon.png" alt="leaf icon" />
        </div>
        <p className="award-title">
          <strong>25,000+</strong> Students
        </p>
        <p className="award-subtitle">Empowered Since Launch</p>
      </div>

      <div className="logo-carousel">
        <div className="carousel-track">
          {[...logos, ...logos].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`logo-${index}`}
              className="carousel-logo"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Award;
