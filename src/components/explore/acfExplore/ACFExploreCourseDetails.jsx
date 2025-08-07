import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./computerFundamentalsExploreCourseDetails.css";
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

const ACFExploreCourseDetails = () => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  // Syllabus data provided
  const syllabusContent = [
    {
      title: "Module 1: Introduction to Computer System",
      topics: [
        "What is Computer?",
        "Block Diagram of Computer",
        "Computer Components and Peripherals",
        "Computer Memory and its Types",
        "Secondary Storage",
        "BIOS and BOOTING Process",
        "PC Connection Interfaces",
        "Computer Languages and Translators",
      ],
    },
    {
      title: "Module 2: Operating System",
      topics: [
        "Operating System and its Functions",
        "Types of Operating System",
        "Kernel and its Types",
        "File System and its Types",
        "Windows vs Linux",
        "Linux Kernel and Basic Linux Commands",
      ],
    },
    {
      title: "Module 3: Basics of Computer Networks and Security",
      topics: [
        "Definition of Computer Network",
        "Types of Computer Networks",
        "OSI Model and Network Topologies",
        "Network Communication Devices",
        "IP vs MAC Address",
        "Network Security Threats and their Consequences",
        "Secure Passwords and Multi Factor Authentication",
        "Authentication vs Authorization",
      ],
    },
    {
      title: "Module 4: Introduction to Databases",
      topics: [
        "Data vs Database vs Database Management System",
        "Applications of DBMS",
        "Types of DBMS",
        "Database Languages: DDL, DML, DCL, TCL",
      ],
    },
    {
      title: "Module 5: Basics of Artificial Intelligence",
      topics: [
        "What is AI?",
        "Applications of AI",
        "Types of AI",
        "Popular Tools of AI",
        "AI vs GenAI",
      ],
    },
    {
      title: "Module 6: Future Perspectives in Technology",
      topics: [
        "Software Development",
        "Machine Learning",
        "Data Science",
        "Cloud Computing",
        "Cyber Security",
        "Internet of Things",
        "Full Stack Web Development",
      ],
    },
  ];

  return (
    <div className="course-details-container">
      <div className="course-content">
        <div className="left-panel">
          <iframe
            className="course-image" // The CSS will now control the size and shape
            src="https://www.youtube.com/embed/PThg5YuQf9U?si=jFmA_KXI7m9w7adZ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <h2 className="course-title">
            Applied Computer Fundamentals with Career Perspective
          </h2>
          <div className="course-tags">
            <span className="price">₹399</span>
            <span className="old-price">₹950</span>
            <span className="expert-tag">Expert</span>
            <span className="duration">
              <FaClock className="icon" /> 15+ hours
            </span>
          </div>

          <div className="description">
            <h3>Description</h3>
            <p>
              {showFullDescription ? (
                <>
                  This comprehensive course covers all the essentials of Applied
                  Computer Fundamentals. You'll build a solid foundation in core
                  concepts including computer hardware, software, operating
                  systems, and networking. This course includes modules on
                  database and cybersecurity principles. It is designed for
                  anyone wanting to understand the building blocks of computer
                  science and prepare for various industrial trends.
                </>
              ) : (
                <>
                  This comprehensive course covers all the essentials of Applied
                  Computer Fundamentals. You'll build a solid foundation in core
                  concepts including computer hardware, software...
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
                10th June, 2025
              </p>
              <p>
                <strong>Exam Dates:</strong>
                30th Aug, 2025
              </p>
            </div>
            <Link to="/buyComputerFundamentals">
              <button className="buy-now-btn">Buy Now</button>
            </Link>
          </div>

          <div className="card-item">
            <h4>Enrollment Statistics</h4>
            <div className="stats-item">
              <span>Success Rate</span>
              <strong>96%</strong>
            </div>
            <div className="stats-item">
              <span>Finished Course</span>
              <strong>50</strong>
            </div>
            <div className="stats-item">
              <span>Haven’t Finished</span>
              <strong>12</strong>
            </div>
          </div>

          <div className="card-item">
            <h4>Reviews</h4>
            <div className="review">
              <img
                src="/students/user1.jpg"
                alt="Rohan Sharma"
                className="user-avatar"
              />
              <div>
                <p className="user-name">Rohan Sharma</p>
                <p className="user-title">Tech Enthusiast</p>
                <p className="review-text">
                  "Excellent course! It covered everything from basic concepts
                  to real-world skills."
                </p>
              </div>
            </div>
            <div className="review">
              <img
                src="/students/user2.jpg"
                alt="Priya Verma"
                className="user-avatar"
              />
              <div>
                <p className="user-name">Priya Verma</p>
                <p className="user-title">Aspiring Developer</p>
                <p className="review-text">
                  "I never thought learning about systems and Linux could be so
                  interesting! The support was great."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ACFExploreCourseDetails;
