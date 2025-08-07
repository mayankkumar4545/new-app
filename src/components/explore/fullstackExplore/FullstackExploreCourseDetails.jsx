import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./FullstackCourseDetails.css";
import { FaClock, FaChevronDown, FaStar } from "react-icons/fa";

// Component to render the curriculum using an accordion
const CurriculumAccordion = ({ syllabus }) => {
  const [activeIndex, setActiveIndex] = useState(0); // Keep the first module open by default

  const toggleModule = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="curriculum-section">
      <h3>Course Curriculum</h3>
      {syllabus.map((module, index) => (
        <div key={index} className="module-item">
          <button
            className={`module-header ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleModule(index)}
          >
            <span>{module.title}</span>
            <FaChevronDown className="chevron-icon" />
          </button>
          {activeIndex === index && (
            <div className="module-content">
              <ul>
                {module.topics.map((topic, topicIndex) => (
                  <li key={topicIndex}>{topic}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const FullstackExploreCourseDetails = () => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  // New syllabus for Modern Full Stack Development
  const syllabusContent = [
    {
      title: "Module 1: Frontend Foundations",
      topics: [
        "Advanced HTML5 & CSS3",
        "Mastering Flexbox, Grid, and Responsive Design",
        "JavaScript ES6+ (Promises, Async/Await)",
        "DOM Manipulation and Events",
      ],
    },
    {
      title: "Module 2: Mastering React & Frontend Frameworks",
      topics: [
        "Components, JSX, State & Props",
        "React Hooks (useState, useEffect, useContext)",
        "Client-Side Routing with React Router",
        "State Management with Context API & Redux Toolkit",
        "Working with APIs (Fetch, Axios)",
      ],
    },
    {
      title: "Module 3: Backend with Node.js & Express",
      topics: [
        "Introduction to Node.js and the V8 Engine",
        "Building RESTful APIs with Express.js",
        "Creating and Managing Routes",
        "Middleware for Authentication and Error Handling",
      ],
    },
    {
      title: "Module 4: Databases with MongoDB",
      topics: [
        "NoSQL Database Concepts",
        "Schema Design and Data Modeling with Mongoose",
        "CRUD (Create, Read, Update, Delete) Operations",
        "Advanced Querying and Aggregation",
      ],
    },
    {
      title: "Module 5: Building a Full-Stack MERN Application",
      topics: [
        "Connecting React Frontend to Express Backend",
        "User Authentication with JSON Web Tokens (JWT)",
        "State Management for User Sessions",
        "Handling File Uploads and Data Storage",
      ],
    },
    {
      title: "Module 6: Deployment and DevOps",
      topics: [
        "Preparing an Application for Production",
        "Deploying to Cloud Platforms (Vercel, Netlify, Render)",
        "Environment Variables and Security Best Practices",
        "Introduction to CI/CD (Continuous Integration/Deployment)",
      ],
    },
  ];

  return (
    <div className="course-details-container">
      <div className="course-content">
        <div className="left-panel">
          <img
            src="./assets/full-stack-development.png" // Replace with a relevant image
            alt="Modern Full Stack Development"
            className="course-image"
          />
          <h2 className="course-title">Modern Full Stack Development</h2>
          <div className="course-tags">
            <span className="price">₹599</span>
            <span className="old-price">₹1200</span>
            <span className="expert-tag">Advanced</span>
            <span className="duration">
              <FaClock className="icon" /> 40+ hours
            </span>
            <div className="rating">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <span>4.9 (450 Reviews)</span>
            </div>
          </div>

          <div className="description">
            <h3>Description</h3>
            <p>
              {showFullDescription ? (
                <>
                  Become a job-ready developer with our Modern Full Stack
                  Development course. You'll master the entire MERN
                  stack—MongoDB, Express.js, React, and Node.js—to build and
                  deploy complex, interactive web applications from scratch.
                  This project-based curriculum covers everything from creating
                  responsive frontends to designing robust backend APIs and
                  databases, preparing you for a successful career in the tech
                  industry.
                </>
              ) : (
                <>
                  Become a job-ready developer with our Modern Full Stack
                  Development course. You'll master the entire MERN
                  stack—MongoDB, Express.js, React, and Node.js...
                </>
              )}
              <span className="read-more" onClick={toggleDescription}>
                {showFullDescription ? " (Show less)" : " (Read more)"}
              </span>
            </p>
          </div>

          <CurriculumAccordion syllabus={syllabusContent} />
        </div>

        <div className="right-panel">
          <div className="card-item">
            <h4>Exam Details</h4>
            <h3 className="exam-card-title">Online Proctored Exam</h3>
            <div className="exam-card-details">
              <p>
                <strong>Enrollment Starts:</strong>
                Starts September 2025
              </p>
              <p>
                <strong>Exam Date:</strong>
                To be announced
              </p>
            </div>
            <Link>
              <button className="buy-now-btn">Buy Now</button>
            </Link>
          </div>

          <div className="card-item">
            <h4>Enrollment Statistics</h4>
            <div className="stats-item">
              <span>Success Rate</span>
              <strong>98%</strong>
            </div>
            <div className="stats-item">
              <span>Hired within 3 months</span>
              <strong>85%</strong>
            </div>
            <div className="stats-item">
              <span>Finished Course</span>
              <strong>120</strong>
            </div>
          </div>

          <div className="card-item">
            <h4>Reviews</h4>
            <div className="review">
              <img
                src="/students/user.jpg"
                alt="Alisha Sharma"
                className="user-avatar"
              />
              <div>
                <p className="user-name">Alisha Sharma</p>
                <p className="user-title">Software Engineer</p>
                <p className="review-text">
                  "This course was amazing! I went from knowing basic HTML to
                  building and deploying a complete MERN stack application. The
                  final project was a game-changer for my portfolio."
                </p>
              </div>
            </div>
            <div className="review">
              <img
                src="/students/user.jpg"
                alt="Vikram Singh"
                className="user-avatar"
              />
              <div>
                <p className="user-name">Vikram Singh</p>
                <p className="user-title">Backend Developer</p>
                <p className="review-text">
                  "The backend modules on Node.js and Express were explained so
                  clearly. I finally understand how to build a real, secure API
                  and connect it to a database."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullstackExploreCourseDetails;
