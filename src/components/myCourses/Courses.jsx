import React from "react";
import CourseCard from "./CourseCard";
import "./courses.css";

const courseData = [
  {
    courseTitle: "Applied Computer Fundamentals with Career Perspective",
    chapterTitle: "Applied Computer Fundamentals with Career Perspective",
    chapterNumber: 4,
    startDate: " 10th June, 2025",
    examDate: "30th Aug, 2025",
    price: "399",
    completedChallenges: 6,
    totalChallenges: 9,
    exploreLink: "/ComputerFundamentals",
  },
  {
    courseTitle: "Modern Full Stack Development",
    chapterTitle: "Modern Full Stack Development",
    chapterNumber: 3,
    startDate: "Starts September 2025",
    examDate: "To be announced",
    price: "599",
    completedChallenges: 4,
    totalChallenges: 7,
    exploreLink: "/FullStack", // Example of a unique link
  },
  {
    courseTitle: "Python for Data Science",
    chapterTitle: "Python for Data Science",
    chapterNumber: 3,
    startDate: "Starts October 2025",
    examDate: "To be announced",
    price: "699",
    completedChallenges: 3,
    totalChallenges: 8,
    exploreLink: "/PythonDataScience",
  },
  {
    courseTitle: "Database Management Essentials",
    chapterTitle: "Database Management Essentials",
    chapterNumber: 2,
    startDate: "Starts September 2025",
    examDate: "To be announced",
    price: "499",
    completedChallenges: 4,
    totalChallenges: 7,
    exploreLink: "/DatabaseManagement",
  },
  {
    courseTitle: "Ethical Hacking",
    chapterTitle: "Ethical Hacking",
    chapterNumber: 1,
    startDate: "Starts October 2025",
    examDate: "To be announced",
    price: "799",
    completedChallenges: 4,
    totalChallenges: 10,
    exploreLink: "/EthicalHacking",
  },
  {
    courseTitle: "Analysis and Design of Algorithms",
    chapterTitle: "Analysis and Design of Algorithms",
    chapterNumber: 2,
    startDate: "Starts September 2025",
    examDate: "To be announced",
    price: "599",
    completedChallenges: 4,
    totalChallenges: 9,
    exploreLink: "/Algorithms",
  },
  {
    courseTitle: "Operating Systems Concepts",
    chapterTitle: "Operating Systems Concepts",
    chapterNumber: 1,
    startDate: "Starts September 2025",
    examDate: "To be announced",
    price: "549",
    completedChallenges: 3,
    totalChallenges: 7,
    exploreLink: "/OperatingSystems",
  },
  {
    courseTitle: "Angular",
    chapterTitle: "Angular",
    chapterNumber: 2,
    startDate: "Starts October 2025",
    examDate: "To be announced",
    price: "649",
    completedChallenges: 4,
    totalChallenges: 8,
    exploreLink: "/Angular",
  },
];

const Courses = () => {
  return (
    <>
      <h1 className="text-center fw-bold mt-3">Our Courses</h1>
      <div className="container py-5">
        <div className="row g-4">
          {courseData.map((course, index) => (
            <div key={index} className="col-12 col-md-6">
              <CourseCard course={course} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Courses;
