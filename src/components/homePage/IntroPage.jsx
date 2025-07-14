import React from "react";
import { Link } from "react-router-dom";
import "./introPage.css";

const IntroPage = () => {
  return (
    <div className="intro-wrapper">
      <div className="intro-header">
        <h1>
          AI-Powered Learning
          <br />
          for Tomorrow's Leaders
        </h1>
        <p className="intro-dis">
          <span className="typing-text">
            Empowering Students with Personalized Interactive Learning
          </span>
          <br />
          Designed to Build Essential Skills for Future Success
        </p>
        <Link to="/courses">
          <button className="get-started-btn">Get Started</button>{" "}
        </Link>
      </div>

      <div className="card-grid">
        <div className="card large-card">
          <img
            src="/assets/laptop.webp"
            alt="Learning on laptop"
            className="card-img"
          />
          <div className="bubble-text">
            Learn anytime,
            <br />
            anywhere with our
            <br />
            <strong>online courses.</strong>
          </div>
        </div>

        <div className="card large-card">
          <img
            src="/assets/teacher.webp"
            alt="Professional Teacher"
            className="card-img"
          />
          <div className="bubble-text">
            Super
            <br />
            Teacher
          </div>
        </div>

        <div className="card large-card">
          <img
            src="/assets/math-img.jpeg"
            alt="Professional Teacher"
            className="card-img"
          />
          <div className="bubble-text">
            Every child deserves the chance to
            <br />
            learn
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
