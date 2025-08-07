import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ethicalCourseDetails.css";
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

const EthicalExploreCourseDetails = () => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  // New syllabus for Ethical Hacking
  const syllabusContent = [
    {
      title: "Module 1: Introduction to Ethical Hacking",
      topics: [
        "Understanding Hackers, Crackers, and Ethical Hackers",
        "Phases of Hacking: Reconnaissance, Scanning, Gaining Access, Maintaining Access, Covering Tracks",
        "Legal Frameworks and the Importance of Ethics",
        "Setting Up Your Virtual Lab Environment (Kali Linux, Metasploitable)",
      ],
    },
    {
      title: "Module 2: Reconnaissance and Footprinting",
      topics: [
        "Passive vs. Active Reconnaissance",
        "Information Gathering with Google Dorks and Social Media",
        "Using Tools like Nmap, Maltego, and Recon-ng",
        "DNS and Whois Enumeration",
      ],
    },
    {
      title: "Module 3: Scanning Networks and Enumeration",
      topics: [
        "Network Scanning Techniques (TCP/UDP)",
        "Port Scanning with Nmap (Stealth Scans, Version Detection)",
        "Vulnerability Scanning with Nessus and OpenVAS",
        "Enumerating Services (NetBIOS, SNMP, LDAP)",
      ],
    },
    {
      title: "Module 4: System Hacking and Malware",
      topics: [
        "Gaining Access: Password Cracking Techniques (Brute Force, Dictionary)",
        "Privilege Escalation on Windows and Linux",
        "Understanding Malware (Viruses, Worms, Trojans, Ransomware)",
        "Executing Applications and Covering Tracks",
      ],
    },
    {
      title: "Module 5: Web Application Hacking",
      topics: [
        "OWASP Top 10 Vulnerabilities",
        "SQL Injection (SQLi) and Cross-Site Scripting (XSS)",
        "Cross-Site Request Forgery (CSRF) and Server-Side Request Forgery (SSRF)",
        "Using Burp Suite for Web Application Penetration Testing",
      ],
    },
    {
      title: "Module 6: Wireless Hacking and Social Engineering",
      topics: [
        "Wireless Network Standards (WEP, WPA, WPA2/3)",
        "Cracking Wireless Passwords with Aircrack-ng",
        "Social Engineering Principles and Attack Vectors",
        "Phishing, Baiting, and Pretexting Techniques",
      ],
    },
  ];

  return (
    <div className="course-details-container">
      <div className="course-content">
        <div className="left-panel">
          <img
            src="./assets/ethical-hacking-img.webp" // Replace with a relevant image
            alt="Ethical Hacking"
            className="course-image"
          />
          <h2 className="course-title">
            Ethical Hacking: Beginner to Advanced
          </h2>
          <div className="course-tags">
            <span className="price">₹799</span>
            <span className="old-price">₹1500</span>
            <span className="expert-tag">Advanced</span>
            <span className="duration">
              <FaClock className="icon" /> 50+ hours
            </span>
            <div className="rating">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <span>5.0 (810 Reviews)</span>
            </div>
          </div>

          <div className="description">
            <h3>Description</h3>
            <p>
              {showFullDescription ? (
                <>
                  Learn to think like a hacker so you can defend like a pro. Our
                  Ethical Hacking course takes you from the fundamentals of
                  cybersecurity to advanced penetration testing techniques. You
                  will master the five phases of hacking, learn to use
                  industry-standard tools like Nmap, Metasploit, and Burp Suite,
                  and conduct hands-on labs in a secure virtual environment.
                  This course is your gateway to a career in cybersecurity.
                </>
              ) : (
                <>
                  Learn to think like a hacker so you can defend like a pro. Our
                  Ethical Hacking course takes you from the fundamentals of
                  cybersecurity to advanced penetration testing techniques...
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
            <h4>Certification Details</h4>
            <h3 className="exam-card-title">Practical Certification Exam</h3>
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
              <strong>99%</strong>
            </div>
            <div className="stats-item">
              <span>Certified Professionals</span>
              <strong>250+</strong>
            </div>
            <div className="stats-item">
              <span>Finished Course</span>
              <strong>300</strong>
            </div>
          </div>

          <div className="card-item">
            <h4>Reviews</h4>
            <div className="review">
              <img
                src="/students/user.jpg"
                alt="Arjun Reddy"
                className="user-avatar"
              />
              <div>
                <p className="user-name">Arjun Reddy</p>
                <p className="user-title">Cybersecurity Analyst</p>
                <p className="review-text">
                  "The hands-on labs were the best part. Setting up a virtual
                  environment and actually performing the attacks was an
                  incredible learning experience. A must-do for anyone serious
                  about security."
                </p>
              </div>
            </div>
            <div className="review">
              <img
                src="/students/user.jpg"
                alt="Meera Iyer"
                className="user-avatar"
              />
              <div>
                <p className="user-name">Meera Iyer</p>
                <p className="user-title">Penetration Tester</p>
                <p className="review-text">
                  "This course covers everything. The modules on web application
                  hacking and SQL injection were directly applicable to my job.
                  The instructor is a true expert."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EthicalExploreCourseDetails;
