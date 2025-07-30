import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./computerFundamentalsExploreCourseDetails.css";
import { FaClock, FaChevronDown } from "react-icons/fa";

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
      title: "Module 1: Introduction to Computer Systems and Languages",
      topics: [
        "What is computer?",
        "Block diagram of computer",
        "Computer components vs peripherals",
        "Memory and its types",
        "Secondary storage",
        "BIOS",
        "PC connection interfaces",
        "Types of computer languages and their translators",
      ],
    },
    {
      title: "Module 2: Operating System",
      topics: [
        "What is operating system and its functions",
        "Types of operating systems",
        "Windows VS Linux",
        "How to install Windows & Linux?",
        "Directory structure of Windows & Linux",
        "Linux kernel and basic Linux commands",
      ],
    },
    {
      title: "Module 3: Basics of Computer Networks and Security",
      topics: [
        "Computer network and its types",
        "Network topologies and the OSI model",
        "Communication devices and Client-server model",
        "IP vs MAC address",
        "Security threats and consequences",
        "Secure passwords & multifactor authentication",
        "Authentication VS Authorization",
      ],
    },
    {
      title: "Module 4: Industry Tracks for Career",
      topics: [
        "Introduction to industry tracks like:",
        "Data Science & Cyber Security",
        "Full Stack Web Development & Machine Learning",
        "Cloud Computing & Software Testing",
        "Internet of Things (IoT)",
        "Required skillsets for each track",
      ],
    },
    {
      title: "Module 5: Important for Skill and Online Appearance",
      topics: [
        "MOOCs/Hackathons along with their types and benefits",
        "Technical profile creation on GitHub",
        "Profile building on Stack Overflow, HackerRank, etc.",
      ],
    },
  ];

  return (
    <div className="course-details-container">
      <div className="course-content">
        <div className="left-panel">
          <img
            src="./assets/computer-fundamental-img.png"
            alt="Applied Computer Fundamentals"
            className="course-image"
          />
          <h2 className="course-title">
            Applied Computer Fundamentals with Industry Pathways
          </h2>
          <div className="course-tags">
            <span className="price">₹549</span>
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
                  systems, and networking. This course includes modules on data
                  structures, algorithms, and cybersecurity principles, with
                  hands-on projects. It is designed for anyone wanting to
                  understand the building blocks of computer science and prepare
                  for various industry pathways.
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
          {/* === UPDATED EXAM DETAILS CARD === */}
          <div className="card-item">
            <h4>Exam Details</h4>
            <h3 className="exam-card-title">Proctored Exam</h3>
            <div className="exam-card-details">
              <p>
                <strong>Enrollment Starts:</strong>
                30th July, 2025
              </p>
              <p>
                <strong>Exam Dates:</strong>
                9th, 16th, 23rd, 30th Aug & 6th Sep, 2025
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
            <div className="review">
              <img
                src="/students/user3.jpg"
                alt="Mayank Roy"
                className="user-avatar"
              />
              <div>
                <p className="user-name">Mayank Roy</p>
                <p className="user-title">Aspiring Developer</p>
                <p className="review-text">
                  "This course gave me hands-on experience with operating
                  systems and network basics. The blend of theory and practical
                  topics really helped me understand how everything works
                  together in the IT world."
                </p>
              </div>
            </div>
            <div className="review">
              <img
                src="/students/user4.jpg"
                alt="Riya Verma"
                className="user-avatar"
              />
              <div>
                <p className="user-name">Riya Verma</p>
                <p className="user-title">Aspiring Developer</p>
                <p className="review-text">
                  "A great foundation course! From learning about BIOS and
                  memory types to exploring industry career paths, every topic
                  was clearly explained. It’s perfect for anyone starting in
                  tech."
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
