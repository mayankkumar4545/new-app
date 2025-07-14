import React from "react";
import "./about.css";

function AboutUs() {
  return (
    <section className="about-section">
      <div className="about-content">
        <h1 className="about-heading">
          A team dedicated to pushing what you can do with Webflow.
        </h1>
        <div className="image-container">
          <img
            src="/assets/Teaching-skills.jpg"
            alt="Working on laptop"
            className="about-image"
          />
          <div className="explore-circle">
            <span>EXPLORE OUR WORK • EXPLORE OUR WORK •</span>
            <div className="arrow-down">↓</div>
          </div>
        </div>
        <p className="about-description">
          Our goal is not simply to create a website for you, but to provide you
          with a suite of marketing tools. This way, if you come up with an idea
          on Monday, you can swiftly take action on Tuesday.
        </p>
      </div>
    </section>
  );
}

export default AboutUs;
