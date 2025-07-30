import React from "react";
import CourseCard from "./CourseCard";
import "./courses.css";

const courseData = [
  {
    courseTitle: "Applied Computer Fundamentals with Industry Pathways",
    chapterTitle: "Computer Fundamentals with Industry Pathways",
    chapterNumber: 4,
    startDate: "30th July 2025",
    examDate: "9th, 16th, 23rd, 30th Aug & 6th Sep, 2025",
    price: "549",
    completedChallenges: 6,
    totalChallenges: 9,
    exploreLink: "/ComputerFundamentals",
  },
  {
    courseTitle: "Modern Full Stack Development",
    chapterTitle: "Responsive Design with Flexbox & Grid",
    chapterNumber: 3,
    startDate: "15 Aug 2025",
    examDate: "01 Oct 2025",
    price: "599",
    completedChallenges: 4,
    totalChallenges: 7,
  },
  {
    courseTitle: "Python for Data Science",
    chapterTitle: "Data Manipulation with Pandas",
    chapterNumber: 2,
    startDate: "20 Aug 2025",
    examDate: "10 Oct 2025",
    price: "699",
    completedChallenges: 2,
    totalChallenges: 6,
  },
  {
    courseTitle: "Database Management Essentials",
    chapterTitle: "Querying with SQL",
    chapterNumber: 2,
    startDate: "20 Aug 2025",
    examDate: "10 Oct 2025",
    price: "499",
    completedChallenges: 2,
    totalChallenges: 6,
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
