import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./angularCourseDetails.css";
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

const AngularExploreCourseDetails = () => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  // New syllabus for Angular
  const syllabusContent = [
    {
      title: "Module 1: Getting Started with Angular & TypeScript",
      topics: [
        "Introduction to Single Page Applications (SPAs) and Angular",
        "Setting up the Development Environment with Angular CLI",
        "Fundamentals of TypeScript (Types, Classes, Interfaces)",
        "Understanding Angular Project Structure",
      ],
    },
    {
      title: "Module 2: Angular Fundamentals",
      topics: [
        "Angular Modules and Components",
        "Templates, Data Binding (Interpolation, Property, Event)",
        "Two-Way Data Binding with ngModel",
        "Directives (ngIf, ngFor, ngSwitch)",
      ],
    },
    {
      title: "Module 3: Components and Services",
      topics: [
        "Component Interaction and Lifecycle Hooks",
        "Introduction to Dependency Injection (DI)",
        "Creating and Injecting Services",
        "Hierarchical Injectors",
      ],
    },
    {
      title: "Module 4: Routing and Navigation",
      topics: [
        "Configuring Routes with the Angular Router",
        "RouterOutlet and RouterLink",
        "Passing Data with Route Parameters",
        "Implementing Route Guards for Authentication",
      ],
    },
    {
      title: "Module 5: Working with Forms and APIs",
      topics: [
        "Template-Driven Forms and Validation",
        "Reactive Forms for Complex Scenarios",
        "Making HTTP Requests with HttpClientModule",
        "Handling API Responses and Errors",
      ],
    },
    {
      title: "Module 6: Advanced Angular Concepts",
      topics: [
        "Introduction to RxJS and Observables",
        "Using Pipes for Data Transformation",
        "State Management with Services and BehaviorSubjects",
        "Building and Deploying an Angular Application",
      ],
    },
  ];

  return (
    <div className="course-details-container">
      <div className="course-content">
        <div className="left-panel">
          <img
            src="./assets/angular.webp" // Replace with a relevant image
            alt="Angular Course"
            className="course-image"
          />
          <h2 className="course-title">Mastering Angular: From Zero to Hero</h2>
          <div className="course-tags">
            <span className="price">₹649</span>
            <span className="old-price">₹1300</span>
            <span className="expert-tag">Intermediate</span>
            <span className="duration">
              <FaClock className="icon" /> 35+ hours
            </span>
            <div className="rating">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar half />
              <span>4.7 (620 Reviews)</span>
            </div>
          </div>

          <div className="description">
            <h3>Description</h3>
            <p>
              {showFullDescription ? (
                <>
                  Build powerful, enterprise-level single-page applications with
                  our comprehensive Angular course. This program takes you from
                  the fundamentals of TypeScript and the Angular CLI to advanced
                  topics like RxJS, state management, and routing. Through
                  hands-on projects, you will learn to build dynamic,
                  responsive, and scalable web applications, making you a
                  proficient and in-demand frontend developer.
                </>
              ) : (
                <>
                  Build powerful, enterprise-level single-page applications with
                  our comprehensive Angular course. This program takes you from
                  the fundamentals of TypeScript and the Angular CLI...
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
            <h3 className="exam-card-title">Online Exam Proctored</h3>
            <div className="exam-card-details">
              <p>
                <strong>Enrollment Starts:</strong>
                Starts September, 2025
              </p>
              <p>
                <strong>Final Project Submission:</strong>
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
              <strong>95%</strong>
            </div>
            <div className="stats-item">
              <span>Avg. Salary Hike</span>
              <strong>+40%</strong>
            </div>
            <div className="stats-item">
              <span>Finished Course</span>
              <strong>180</strong>
            </div>
          </div>

          <div className="card-item">
            <h4>Reviews</h4>
            <div className="review">
              <img
                src="/students/user.jpg"
                alt="Ananya Gupta"
                className="user-avatar"
              />
              <div>
                <p className="user-name">Ananya Gupta</p>
                <p className="user-title">Frontend Developer</p>
                <p className="review-text">
                  "The best Angular course I've taken. The modules on RxJS and
                  services were particularly helpful and directly applicable to
                  my job. The final project was challenging but rewarding."
                </p>
              </div>
            </div>
            <div className="review">
              <img
                src="/students/user.jpg"
                alt="Rahul Desai"
                className="user-avatar"
              />
              <div>
                <p className="user-name">Rahul Desai</p>
                <p className="user-title">Full Stack Developer</p>
                <p className="review-text">
                  "I was new to Angular but this course made it so easy to
                  learn. The instructor explains everything from the ground up.
                  I feel confident building complex applications now."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AngularExploreCourseDetails;
