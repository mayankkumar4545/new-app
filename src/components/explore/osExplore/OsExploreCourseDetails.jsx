import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./osCourseDetails.css";
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

const OsExploreCourseDetails = () => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  // New syllabus for Operating Systems Concepts
  const syllabusContent = [
    {
      title: "Module 1: Introduction to Operating Systems",
      topics: [
        "What is an Operating System (OS)? Core Functions",
        "Evolution of Operating Systems",
        "Types of OS (Batch, Multiprogramming, Timesharing, Real-Time)",
        "OS Structure (Monolithic, Layered, Microkernel)",
      ],
    },
    {
      title: "Module 2: Process Management",
      topics: [
        "The Concept of a Process and Process Control Block (PCB)",
        "Process States and Transitions",
        "CPU Scheduling Algorithms (FCFS, SJF, Priority, Round Robin)",
        "Inter-Process Communication (IPC)",
      ],
    },
    {
      title: "Module 3: Memory Management",
      topics: [
        "Logical vs. Physical Address Space",
        "Memory Allocation Techniques (Contiguous, Paging, Segmentation)",
        "Virtual Memory, Demand Paging, and Page Replacement Algorithms",
        "Understanding Thrashing",
      ],
    },
    {
      title: "Module 4: Concurrency and Synchronization",
      topics: [
        "Introduction to Concurrency and Race Conditions",
        "The Critical Section Problem",
        "Synchronization Primitives: Mutexes and Semaphores",
        "Classic Synchronization Problems (Producer-Consumer, Readers-Writers)",
        "Introduction to Deadlocks",
      ],
    },
    {
      title: "Module 5: File Systems and I/O Management",
      topics: [
        "File Concepts, Attributes, and Operations",
        "Directory Structures (Single-Level, Two-Level, Tree-Structured)",
        "File Allocation Methods (Contiguous, Linked, Indexed)",
        "Disk Scheduling Algorithms (FCFS, SSTF, SCAN)",
      ],
    },
    {
      title: "Module 6: Modern OS Concepts",
      topics: [
        "Introduction to Virtualization",
        "Distributed Operating Systems",
        "Case Study: Linux vs. Windows Architecture",
        "Introduction to OS Security",
      ],
    },
  ];

  return (
    <div className="course-details-container">
      <div className="course-content">
        <div className="left-panel">
          <img
            src="./assets/operating-system-concepts.png" // Replace with a relevant image
            alt="Operating Systems Concepts"
            className="course-image"
          />
          <h2 className="course-title">Operating Systems Concepts</h2>
          <div className="course-tags">
            <span className="price">₹549</span>
            <span className="old-price">₹1050</span>
            <span className="expert-tag">Intermediate</span>
            <span className="duration">
              <FaClock className="icon" /> 28+ hours
            </span>
            <div className="rating">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar half />
              <span>4.8 (680 Reviews)</span>
            </div>
          </div>

          <div className="description">
            <h3>Description</h3>
            <p>
              {showFullDescription ? (
                <>
                  Go behind the screen and master the core principles of how
                  computers work with our Operating Systems Concepts course.
                  This program provides a deep dive into essential topics like
                  process and memory management, concurrency, and file systems.
                  You will learn the theory behind modern operating systems like
                  Windows and Linux, preparing you for advanced roles in
                  software engineering, system administration, and beyond.
                </>
              ) : (
                <>
                  Go behind the screen and master the core principles of how
                  computers work with our Operating Systems Concepts course.
                  This program provides a deep dive into essential topics...
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
              <span>University Toppers</span>
              <strong>80%</strong>
            </div>
            <div className="stats-item">
              <span>Finished Course</span>
              <strong>190</strong>
            </div>
          </div>

          <div className="card-item">
            <h4>Reviews</h4>
            <div className="review">
              <img
                src="/students/user.jpg"
                alt="Nisha Kumar"
                className="user-avatar"
              />
              <div>
                <p className="user-name">Nisha Kumar</p>
                <p className="user-title">Computer Science Student</p>
                <p className="review-text">
                  "This course was a lifesaver for my university exams. The
                  modules on CPU scheduling and memory management were explained
                  so much better than in my textbook."
                </p>
              </div>
            </div>
            <div className="review">
              <img
                src="/students/user.jpg"
                alt="Karan Malhotra"
                className="user-avatar"
              />
              <div>
                <p className="user-name">Karan Malhotra</p>
                <p className="user-title">Systems Engineer</p>
                <p className="review-text">
                  "A fantastic refresher on core OS concepts. The section on
                  concurrency and deadlocks was incredibly insightful and
                  directly relevant to the work I do."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OsExploreCourseDetails;
