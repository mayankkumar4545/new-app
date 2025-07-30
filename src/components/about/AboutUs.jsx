import React from "react";
import "./about.css";
import { FaLaptopCode, FaUserTie, FaUsers } from "react-icons/fa";

function AboutUs() {
  return (
    <section className="about-section">
      <div className="about-content">
        {/* === HERO SECTION === */}
        <h1 className="about-heading">
          Our Mission: To Make Tech Education Accessible and Practical for
          Everyone.
        </h1>
        <div className="image-container">
          <img
            src="/assets/Teaching-skills.jpg"
            alt="A team of educators collaborating on a course"
            className="about-image"
          />
          <a href="#courses" className="explore-circle-link">
            <div className="explore-circle">
              <div className="circle-text">
                <span>• EXPLORE OUR COURSES • EXPLORE OUR COURSES</span>
              </div>
              <div className="arrow-down">↓</div>
            </div>
          </a>
        </div>
        <p className="about-description">
          We believe that quality education is the key to unlocking potential.
          Our goal isn't just to teach you theory; it's to provide a clear
          roadmap from fundamental concepts to career-ready skills, empowering
          you to turn your ideas into reality.
        </p>

        {/* === OUR APPROACH SECTION === */}
        <div className="approach-section">
          <div className="feature-card">
            <FaLaptopCode className="feature-icon" />
            <h3 className="feature-title">Practical Learning</h3>
            <p>
              Focus on hands-on projects that build real-world skills, not just
              abstract theory.
            </p>
          </div>
          <div className="feature-card">
            <FaUserTie className="feature-icon" />
            <h3 className="feature-title">Expert Instructors</h3>
            <p>
              Learn from passionate industry professionals with years of
              real-world experience.
            </p>
          </div>
          <div className="feature-card">
            <FaUsers className="feature-icon" />
            <h3 className="feature-title">Community Support</h3>
            <p>
              Join a network of peers and mentors to support and accelerate your
              learning journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
