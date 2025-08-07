import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./adaCourseDetails.css";
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

const AdaExploreCourseDetails = () => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  // New syllabus for Analysis and Design of Algorithms
  const syllabusContent = [
    {
      title: "Module 1: Foundations of Algorithm Analysis",
      topics: [
        "Introduction to Algorithms and Problem Solving",
        "Asymptotic Notations (Big O, Big Omega, Big Theta)",
        "Analyzing Time and Space Complexity",
        "Recursive Algorithms and Recurrence Relations",
      ],
    },
    {
      title: "Module 2: Sorting and Searching Algorithms",
      topics: [
        "Linear and Binary Search",
        "Elementary Sorting: Bubble, Selection, and Insertion Sort",
        "Advanced Sorting: Merge Sort, Quick Sort, Heap Sort",
        "Comparing Sorting Algorithms",
      ],
    },
    {
      title: "Module 3: Core Data Structures",
      topics: [
        "Stacks, Queues, and Linked Lists",
        "Trees, Binary Search Trees, and AVL Trees",
        "Hash Tables and Collision Resolution Techniques",
        "Graphs: Representation and Traversal (BFS, DFS)",
      ],
    },
    {
      title: "Module 4: Algorithmic Design Paradigms",
      topics: [
        "Divide and Conquer Strategy",
        "Greedy Algorithms (e.g., Huffman Coding, Dijkstra's)",
        "Dynamic Programming (e.g., Fibonacci, Knapsack Problem)",
        "Backtracking and Branch-and-Bound",
      ],
    },
    {
      title: "Module 5: Advanced Graph Algorithms",
      topics: [
        "Minimum Spanning Trees (Prim's and Kruskal's)",
        "Shortest Path Algorithms (Dijkstra's, Bellman-Ford)",
        "Topological Sort",
        "Introduction to Network Flow",
      ],
    },
    {
      title: "Module 6: Complexity Theory and Advanced Topics",
      topics: [
        "Understanding P vs. NP Problems",
        "Introduction to NP-Completeness",
        "String Matching Algorithms (KMP)",
        "Introduction to Randomized and Approximation Algorithms",
      ],
    },
  ];

  return (
    <div className="course-details-container">
      <div className="course-content">
        <div className="left-panel">
          <img
            src="./assets/design-and-analysis-algorithms.jpg" // Replace with a relevant image
            alt="Analysis and Design of Algorithms"
            className="course-image"
          />
          <h2 className="course-title">Analysis and Design of Algorithms</h2>
          <div className="course-tags">
            <span className="price">₹599</span>
            <span className="old-price">₹1100</span>
            <span className="expert-tag">Intermediate</span>
            <span className="duration">
              <FaClock className="icon" /> 30+ hours
            </span>
            <div className="rating">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar half />
              <span>4.8 (510 Reviews)</span>
            </div>
          </div>

          <div className="description">
            <h3>Description</h3>
            <p>
              {showFullDescription ? (
                <>
                  Dive deep into the world of efficient problem-solving with our
                  Analysis and Design of Algorithms course. This comprehensive
                  program covers everything from the fundamentals of complexity
                  analysis to advanced design paradigms like dynamic programming
                  and greedy algorithms. You will master essential data
                  structures and learn to implement and analyze a wide range of
                  algorithms, a critical skill for technical interviews and a
                  successful career in software engineering.
                </>
              ) : (
                <>
                  Dive deep into the world of efficient problem-solving with our
                  Analysis and Design of Algorithms course. This comprehensive
                  program covers everything from the fundamentals of complexity
                  analysis...
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
                <strong>Exam Dates:</strong>
                To be announced
              </p>
            </div>
            <Link to="/buyAlgorithms">
              <button className="buy-now-btn">Buy Now</button>
            </Link>
          </div>

          <div className="card-item">
            <h4>Enrollment Statistics</h4>
            <div className="stats-item">
              <span>Success Rate</span>
              <strong>97%</strong>
            </div>
            <div className="stats-item">
              <span>Avg. Score Improvement</span>
              <strong>+25%</strong>
            </div>
            <div className="stats-item">
              <span>Finished Course</span>
              <strong>150</strong>
            </div>
          </div>

          <div className="card-item">
            <h4>Reviews</h4>
            <div className="review">
              <img
                src="/students/user.jpg"
                alt="Sameer Khan"
                className="user-avatar"
              />
              <div>
                <p className="user-name">Sameer Khan</p>
                <p className="user-title">Competitive Programmer</p>
                <p className="review-text">
                  "This was the perfect course to prepare for coding interviews.
                  The modules on dynamic programming and graph algorithms were
                  incredibly detailed and helpful."
                </p>
              </div>
            </div>
            <div className="review">
              <img
                src="/students/user.jpg"
                alt="Priya Singh"
                className="user-avatar"
              />
              <div>
                <p className="user-name">Priya Singh</p>
                <p className="user-title">Software Developer</p>
                <p className="review-text">
                  "I finally understand Big O notation! The instructor breaks
                  down complex topics into easy-to-understand concepts. Highly
                  recommended for any developer."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdaExploreCourseDetails;
