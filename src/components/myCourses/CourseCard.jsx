import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const {
    courseTitle,
    chapterTitle,
    chapterNumber,
    startDate,
    examDate,
    price,
    completedChallenges,
    totalChallenges,
    exploreLink,
  } = course;

  const progress = (completedChallenges / totalChallenges) * 100;

  return (
    <div className="course-card d-flex flex-column flex-md-row shadow mb-4">
      <div className="course-left d-flex flex-column justify-content-between text-white p-4">
        <div>
          <p className="course-label text-uppercase">Course</p>
          <h2 className="course-title">{courseTitle}</h2>
        </div>
        <Link to={exploreLink} className="view-all text-decoration-none">
          View all chapters &rarr;
        </Link>
      </div>

      <div className="course-right p-4 flex-grow-1">
        <p className="chapter-label text-uppercase mb-1">
          Chapter {chapterNumber}
        </p>
        <h2 className="chapter-title mb-3">{chapterTitle}</h2>

        <div className="progress-bar mb-2">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="progress-text text-end mb-4">
          {completedChallenges}/{totalChallenges} Challenges
        </p>

        <div className="row mb-3">
          <div className="col-12 col-sm-4 mb-2">
            <small className="text-muted">Start Date</small>
            <div className="fw-semibold">{startDate}</div>
          </div>
          <div className="col-12 col-sm-4 mb-2">
            <small className="text-muted">Exam Date</small>
            <div className="fw-semibold">{examDate}</div>
          </div>
          <div className="col-12 col-sm-4 mb-2">
            <small className="text-muted">Price</small>
            <div className="fw-semibold">${price}</div>
          </div>
        </div>

        <Link to={exploreLink}>
          {" "}
          <button className="continue-btn">Continue</button>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
