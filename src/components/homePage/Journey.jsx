import React from "react";
import "./journey.css";

const Journey = () => {
  return (
    <section className="journey-section">
      <div className="journey-content">
        <div className="journey-left">
          <h2 className="journey-title">
            Experience
            <br />
            Learning Like
            <br />
            Never Before
          </h2>
          <p className="journey-description">
            Discover Personalized, AI-Powered Learning That Prepares Students
            for Success in the Real World
          </p>
          <button className="journey-btn">Start Your Journey</button>
        </div>

        <div className="journey-right">
          <div className="journey-card large-card">
            <img src="/assets/skills-student.webp" alt="learning girl" />
            <div className="card-overlay">
              <h3>
                Personalized
                <br />
                Learning Paths
              </h3>
              <p>AI tailors courses to your unique learning style.</p>
            </div>
          </div>

          <div className="journey-card small-card yellow-card">
            <h3>
              Earn While
              <br />
              You Learn
            </h3>
            <p>Accumulate scholarship funds as you progress</p>
          </div>

          <div className="journey-card small-card purple-card">
            <h3>
              Verified
              <br />
              Credentials
            </h3>
            <p>Secure blockchain certificates for your achievements</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
