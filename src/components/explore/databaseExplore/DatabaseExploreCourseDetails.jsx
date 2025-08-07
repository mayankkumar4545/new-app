import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./databaseCourseDetails.css";
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

const DatabaseExploreCourseDetails = () => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  // New syllabus for Database Management Essentials
  const syllabusContent = [
    {
      title: "Module 1: Fundamentals of Databases",
      topics: [
        "What is Data, a Database, and a DBMS?",
        "File Systems vs. Database Management Systems",
        "Relational Database Model (Tables, Rows, Columns)",
        "Introduction to SQL (Structured Query Language)",
      ],
    },
    {
      title: "Module 2: Mastering SQL Queries",
      topics: [
        "Data Definition Language (CREATE, ALTER, DROP)",
        "Data Manipulation Language (SELECT, INSERT, UPDATE, DELETE)",
        "Filtering Data with WHERE Clause",
        "Sorting, Grouping, and Aggregating Data (ORDER BY, GROUP BY, HAVING)",
      ],
    },
    {
      title: "Module 3: Advanced SQL and Joins",
      topics: [
        "Understanding Primary and Foreign Keys",
        "Joining Multiple Tables (INNER, LEFT, RIGHT, FULL JOIN)",
        "Subqueries and Common Table Expressions (CTEs)",
        "Working with Views and Indexes",
      ],
    },
    {
      title: "Module 4: Database Design and Normalization",
      topics: [
        "Introduction to Entity-Relationship (ER) Modeling",
        "Designing a Relational Database Schema",
        "Understanding Data Redundancy and Anomalies",
        "Normalization Forms (1NF, 2NF, 3NF)",
      ],
    },
    {
      title: "Module 5: Transaction Management and Concurrency",
      topics: [
        "ACID Properties (Atomicity, Consistency, Isolation, Durability)",
        "Managing Transactions with COMMIT and ROLLBACK",
        "Understanding Concurrency Control and Locking",
        "Introduction to Database Security and Authorization",
      ],
    },
    {
      title: "Module 6: Introduction to NoSQL Databases",
      topics: [
        "SQL vs. NoSQL: When to Use Each",
        "Types of NoSQL Databases (Document, Key-Value, Column-Family, Graph)",
        "Basic Operations in a Document Database (e.g., MongoDB)",
        "The Future of Data Management",
      ],
    },
  ];

  return (
    <div className="course-details-container">
      <div className="course-content">
        <div className="left-panel">
          <img
            src="./assets/database-management.jpg" // Replace with a relevant image
            alt="Database Management Essentials"
            className="course-image"
          />
          <h2 className="course-title">Database Management Essentials</h2>
          <div className="course-tags">
            <span className="price">₹499</span>
            <span className="old-price">₹1000</span>
            <span className="expert-tag">Beginner</span>
            <span className="duration">
              <FaClock className="icon" /> 25+ hours
            </span>
            <div className="rating">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <span>4.9 (720 Reviews)</span>
            </div>
          </div>

          <div className="description">
            <h3>Description</h3>
            <p>
              {showFullDescription ? (
                <>
                  Unlock the power of data with our Database Management
                  Essentials course. This program provides a comprehensive
                  introduction to both relational (SQL) and NoSQL databases,
                  equipping you with the skills to design, query, and manage
                  data effectively. From writing complex SQL queries to
                  understanding database normalization and transaction
                  management, this course is your first step towards a career as
                  a database administrator, backend developer, or data analyst.
                </>
              ) : (
                <>
                  Unlock the power of data with our Database Management
                  Essentials course. This program provides a comprehensive
                  introduction to both relational (SQL) and NoSQL databases...
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
                <strong>Exam Dates:</strong>
                To be announced
              </p>
            </div>
            <Link>
              <button className="buy-now-btn">buy Now</button>
            </Link>
          </div>

          <div className="card-item">
            <h4>Enrollment Statistics</h4>
            <div className="stats-item">
              <span>Success Rate</span>
              <strong>98%</strong>
            </div>
            <div className="stats-item">
              <span>Career Transitions</span>
              <strong>75%</strong>
            </div>
            <div className="stats-item">
              <span>Finished Course</span>
              <strong>210</strong>
            </div>
          </div>

          <div className="card-item">
            <h4>Reviews</h4>
            <div className="review">
              <img
                src="/students/user.jpg"
                alt="Aditya Rao"
                className="user-avatar"
              />
              <div>
                <p className="user-name">Aditya Rao</p>
                <p className="user-title">Data Analyst</p>
                <p className="review-text">
                  "The SQL modules were fantastic. I went from basic SELECT
                  statements to writing complex joins and subqueries with
                  confidence. This course was essential for my job."
                </p>
              </div>
            </div>
            <div className="review">
              <img
                src="/students/user.jpg"
                alt="Sneha Patel"
                className="user-avatar"
              />
              <div>
                <p className="user-name">Sneha Patel</p>
                <p className="user-title">Backend Developer</p>
                <p className="review-text">
                  "I finally understand database normalization! The instructor
                  made a difficult topic very easy to grasp. This is a must-have
                  skill for any developer."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatabaseExploreCourseDetails;
