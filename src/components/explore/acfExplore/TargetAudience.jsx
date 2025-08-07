import React from "react";
import "./targetAudience.css";
import { FaUser, FaBriefcase, FaGraduationCap } from "react-icons/fa";

const TargetAudience = () => {
  return (
    <div className="target-audience-section">
      <h3>Who is this course for?</h3>
      <div className="audience-grid">
        <div className="audience-card">
          <FaUser className="audience-icon" />
          <h4>Absolute Beginners</h4>
          <p>
            Anyone with zero prior tech experience who wants to understand the
            fundamentals of how computers and the internet work.
          </p>
        </div>
        <div className="audience-card">
          <FaGraduationCap className="audience-icon" />
          <h4>Students</h4>
          <p>
            High school or college students looking to build a strong foundation
            before pursuing a degree in computer science or a related field.
          </p>
        </div>
        <div className="audience-card">
          <FaBriefcase className="audience-icon" />
          <h4>Career Changers</h4>
          <p>
            Professionals from non-technical fields (like marketing or sales)
            who want to transition into the tech industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TargetAudience;
