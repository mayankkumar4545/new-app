import React from "react";
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
        <button className="get-started-btn">Get Started</button>
      </div>

      <div className="card-grid">
        <div className="card large-card">
          <img
            src="/assets/img1.png"
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

        <div className="card info-card">
          <div className="profile-icons">
            <img src="/assets/profile1.png" alt="teacher1" />
            <img src="/assets/profile2.png" alt="teacher2" />
            <img src="/assets/profile3.png" alt="teacher3" />
            <span className="extra-count">40+</span>
          </div>
          <h3>
            Professional
            <br />
            Teachers
          </h3>
          <div className="bottom-box">
            <p>Every child deserves the chance to learn</p>
            <img src="/assets/star-face.png" alt="icon" />
          </div>
        </div>

        <div className="card large-card">
          <img
            src="/assets/img3.png"
            alt="Child learning"
            className="card-img"
          />
          <div className="math-info">
            <div className="badge">⭐</div>
            <div>
              <p className="subject">Math</p>
              <p className="level">For Beginner</p>
            </div>
            <div className="duration">
              <p>
                12
                <br />
                <span>Weeks</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
