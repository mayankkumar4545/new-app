import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./javaExploreCourseDetails.css";
import { FaClock, FaStar } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { AiOutlineArrowUp } from "react-icons/ai";

const JavaExploreCourseDetails = () => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className="course-details-container">
      <div className="course-content">
        <div className="left-panel">
          <img
            src="./assets/JavaScript-img.jpeg"
            alt="Course Visual"
            className="course-image"
          />
          <h2 className="course-title">
            JavaScript - learn the foundation of JavaScript
          </h2>
          <div className="course-tags">
            <span className="price">$150</span>
            <span className="old-price">$250</span>
            <span className="expert-tag">Expert</span>
            <span className="duration">
              <FaClock className="icon" /> 20h 10m
            </span>
          </div>
          <div className="description">
            <h3>Description</h3>
            <p>
              {showFullDescription ? (
                <>
                  This introductory course covers all the basics of user
                  experience and user interface design. You'll build a solid
                  foundation of all necessary design terms. This course includes
                  JavaScript DOM manipulation, ES6 features, and more hands-on
                  projects. It is designed for anyone wanting to learn
                  JavaScript from scratch and progress to an intermediate level.
                </>
              ) : (
                <>
                  This introductory course covers all the basics of user
                  experience and user interface design. You'll build a solid
                  foundation of all necessary design terms...
                </>
              )}
              <span className="read-more" onClick={toggleDescription}>
                {showFullDescription ? " ( Show less )" : " ( Read more )"}
              </span>
            </p>
          </div>
          <div className="included">
            <h3>What's Included</h3>
            <div className="included-item">
              {/*<img
                src="/figma-icon.png"
                alt="Figma"
                className="included-icon"
              />*/}
              <div>
                <p className="included-title">Master JavaScript</p>
                <p className="included-duration">20h 10m | $150 Value</p>
                <p className="included-desc">
                  This introductory course covers all the basics of user
                  experience and user interface design.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="right-panel">
          <div className="activity-section">
            <h4>Daily Activities</h4>
            <div className="activity-number">45</div>
            {/*<div className="activity-increase">
              <AiOutlineArrowUp /> 42% above average
            </div>*/}
            <img
              src="/activity-graph.png"
              alt="Daily Activity"
              className="graph"
            />
            <div className="activity-counts">
              <span>12 Students</span>
              <span>8 Enrolled</span>
              <span>25 Visitors</span>
            </div>
            <Link to="/buyJavaScript">
              <button className="view-details-btn">Buy now</button>
            </Link>
          </div>

          <div className="enrollment-stats">
            <h4>Enrollment Statistics</h4>
            <p>
              <strong>96%</strong> Success Rate
            </p>
            <p>
              <strong>50</strong> People Finished
            </p>
            <p>
              <strong>12</strong> Haven’t Finished
            </p>
          </div>

          <div className="questions-section">
            <h4>Review</h4>
            <div className="question">
              <img
                src="/user1.png"
                alt="Robert Shore"
                className="user-avatar"
              />
              <div>
                <p className="user-name">Robert Shore</p>
                <p className="user-title">Senior Lead Designer</p>
                <p className="question-text">
                  Hello! How do I export the Figma file?...
                </p>
              </div>
            </div>
            <div className="question">
              <img
                src="/user2.png"
                alt="Royal Parvej"
                className="user-avatar"
              />
              <div>
                <p className="user-name">Royal Parvej</p>
                <p className="user-title">Senior Lead Designer</p>
                <p className="question-text">
                  I am afraid I couldn't make it, please…
                </p>
              </div>
            </div>
            <div className="question">
              <img
                src="/user2.png"
                alt="Royal Parvej"
                className="user-avatar"
              />
              <div>
                <p className="user-name">Royal Parvej</p>
                <p className="user-title">Senior Lead Designer</p>
                <p className="question-text">
                  I am afraid I couldn't make it, please…
                </p>
              </div>
            </div>
            <div className="question">
              <img
                src="/user2.png"
                alt="Royal Parvej"
                className="user-avatar"
              />
              <div>
                <p className="user-name">Royal Parvej</p>
                <p className="user-title">Senior Lead Designer</p>
                <p className="question-text">
                  I am afraid I couldn't make it, please…
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JavaExploreCourseDetails;
