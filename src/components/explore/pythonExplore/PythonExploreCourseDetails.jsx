import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./pythonCourseDetails.css";
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

const PythonExploreCourseDetails = () => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  // New syllabus for Python for Data Science
  const syllabusContent = [
    {
      title: "Module 1: Python Fundamentals for Data Science",
      topics: [
        "Python Basics: Variables, Data Types, and Operators",
        "Control Structures: Loops and Conditionals",
        "Data Structures: Lists, Tuples, Dictionaries, and Sets",
        "Functions and Modules",
      ],
    },
    {
      title: "Module 2: NumPy for Numerical Computing",
      topics: [
        "Introduction to NumPy Arrays",
        "Array Indexing, Slicing, and Manipulation",
        "Mathematical and Statistical Functions",
        "Broadcasting and Vectorized Operations",
      ],
    },
    {
      title: "Module 3: Data Manipulation with Pandas",
      topics: [
        "Introduction to Pandas Series and DataFrames",
        "Reading and Writing Data (CSV, Excel)",
        "Data Cleaning: Handling Missing Values and Duplicates",
        "Grouping, Merging, and Joining DataFrames",
      ],
    },
    {
      title: "Module 4: Data Visualization",
      topics: [
        "Creating Plots with Matplotlib",
        "Advanced Statistical Plots with Seaborn",
        "Customizing Plots: Labels, Titles, and Colors",
        "Creating Interactive Visualizations (Introduction)",
      ],
    },
    {
      title: "Module 5: Exploratory Data Analysis (EDA)",
      topics: [
        "The Data Science Workflow",
        "Descriptive Statistics and Data Distribution",
        "Correlation and Covariance",
        "Case Study: Performing EDA on a Real-World Dataset",
      ],
    },
    {
      title: "Module 6: Introduction to Machine Learning",
      topics: [
        "Core Concepts of Machine Learning",
        "Introduction to Scikit-learn",
        "Building Your First Model: Linear Regression",
        "Model Evaluation and Validation",
      ],
    },
  ];

  return (
    <div className="course-details-container">
      <div className="course-content">
        <div className="left-panel">
          <img
            src="./assets/python-data-science.jpg" // Replace with a relevant image
            alt="Python for Data Science"
            className="course-image"
          />
          <h2 className="course-title">Python for Data Science</h2>
          <div className="course-tags">
            <span className="price">₹699</span>
            <span className="old-price">₹1400</span>
            <span className="expert-tag">Intermediate</span>
            <span className="duration">
              <FaClock className="icon" /> 40+ hours
            </span>
            <div className="rating">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <span>4.9 (950 Reviews)</span>
            </div>
          </div>

          <div className="description">
            <h3>Description</h3>
            <p>
              {showFullDescription ? (
                <>
                  Transform raw data into powerful insights with our Python for
                  Data Science course. This program is your comprehensive guide
                  to mastering the essential libraries for data analysis,
                  including NumPy, Pandas, Matplotlib, and Seaborn. Through
                  hands-on projects and real-world datasets, you will learn to
                  clean, manipulate, visualize, and interpret data, culminating
                  in an introduction to building predictive models with
                  Scikit-learn.
                </>
              ) : (
                <>
                  Transform raw data into powerful insights with our Python for
                  Data Science course. This program is your comprehensive guide
                  to mastering the essential libraries for data analysis...
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
                Starts October 2025
              </p>
              <p>
                <strong>Final Project Submission:</strong>
                To be announced
              </p>
            </div>
            <Link to="/buyPythonDataScience">
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
              <span>Hired by Top Companies</span>
              <strong>80%</strong>
            </div>
            <div className="stats-item">
              <span>Finished Course</span>
              <strong>450</strong>
            </div>
          </div>

          <div className="card-item">
            <h4>Reviews</h4>
            <div className="review">
              <img
                src="/students/user.jpg"
                alt="Aisha Khan"
                className="user-avatar"
              />
              <div>
                <p className="user-name">Aisha Khan</p>
                <p className="user-title">Data Analyst</p>
                <p className="review-text">
                  "The Pandas module alone was worth the price of the course. I
                  use the data cleaning and manipulation techniques I learned
                  here every single day at my job."
                </p>
              </div>
            </div>
            <div className="review">
              <img
                src="/students/user.jpg"
                alt="Ravi Sharma"
                className="user-avatar"
              />
              <div>
                <p className="user-name">Ravi Sharma</p>
                <p className="user-title">Aspiring Data Scientist</p>
                <p className="review-text">
                  "An amazing introduction to the world of data science. The
                  final project on exploratory data analysis was challenging and
                  gave me a fantastic piece for my portfolio."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PythonExploreCourseDetails;
