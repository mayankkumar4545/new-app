import React from "react";
import { Link } from "react-router-dom";
import "./skills.css";
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaChild,
  FaArrowRight,
} from "react-icons/fa";

const Skills = () => {
  return (
    <section className="skills-section">
      <div className="skills-container">
        <div className="skills-header">
          <h2 className="skills-heading">Learning Paths for Everyone</h2>
          <p className="skills-subheading">
            Whether you're a student building a career, an expert sharing
            knowledge, or a parent guiding a child, we have a path for you.
          </p>
        </div>

        <div className="skills-grid">
          {/* Card 1: For Students */}
          <div className="skills-card student">
            <div className="card-icon-wrapper">
              <FaUserGraduate className="card-icon" />
            </div>
            <h3 className="card-title">For Students</h3>
            <p className="card-description">
              Master in-demand tech skills with hands-on projects and expert-led
              courses designed for your success.
            </p>
            <ul className="card-features">
              <li>Interactive, project-based lessons</li>
              <li>Build career-ready skills</li>
              <li>Join a supportive peer community</li>
            </ul>
            <Link to="/courses" className="card-cta">
              Explore Courses <FaArrowRight />
            </Link>
          </div>

          {/* Card 2: For Instructors */}
          <div className="skills-card instructor">
            <div className="card-icon-wrapper">
              <FaChalkboardTeacher className="card-icon" />
            </div>
            <h3 className="card-title">For Instructors</h3>
            <p className="card-description">
              Share your expertise with a global audience. We provide the tools
              and platform you need to create impactful courses.
            </p>
            <ul className="card-features">
              <li>Easy-to-use course creation tools</li>
              <li>Reach thousands of global students</li>
              <li>Grow your personal brand</li>
            </ul>
            <Link className="card-cta">
              Become an Instructor <FaArrowRight />
            </Link>
          </div>

          {/* Card 3: For Parents */}
          <div className="skills-card parent">
            <div className="card-icon-wrapper">
              <FaChild className="card-icon" />
            </div>
            <h3 className="card-title">For Parents</h3>
            <p className="card-description">
              Support your child’s learning journey with our safe, engaging, and
              age-appropriate tech courses.
            </p>
            <ul className="card-features">
              <li>Monitor progress and achievements</li>
              <li>Safe and moderated environment</li>
              <li>Develop crucial future skills</li>
            </ul>
            <Link className="card-cta">
              Learn More <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
