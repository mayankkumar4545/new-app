import React from "react";
import CourseCard from "./CourseCard";
import "./courses.css";

const courseData = [
  {
    courseTitle: "Javascript Fundamentals",
    chapterTitle: "Callbacks & Closures",
    chapterNumber: 4,
    startDate: "12 Aug 2025",
    examDate: "30 Sep 2025",
    price: "49.99",
    completedChallenges: 6,
    totalChallenges: 9,
    exploreLink: "/JavaScript",
  },
  {
    courseTitle: "React Essentials",
    chapterTitle: "Hooks & State Management",
    chapterNumber: 3,
    startDate: "15 Aug 2025",
    examDate: "01 Oct 2025",
    price: "59.99",
    completedChallenges: 4,
    totalChallenges: 7,
    exploreLink: "/JavaScript",
  },
  {
    courseTitle: "Node.js Backend",
    chapterTitle: "APIs & Middleware",
    chapterNumber: 2,
    startDate: "20 Aug 2025",
    examDate: "10 Oct 2025",
    price: "69.99",
    completedChallenges: 2,
    totalChallenges: 6,
    exploreLink: "/JavaScript",
  },
  {
    courseTitle: "Node.js Backend",
    chapterTitle: "APIs & Middleware",
    chapterNumber: 2,
    startDate: "20 Aug 2025",
    examDate: "10 Oct 2025",
    price: "69.99",
    completedChallenges: 2,
    totalChallenges: 6,
    exploreLink: "/JavaScript",
  },
  {
    courseTitle: "Node.js Backend",
    chapterTitle: "APIs & Middleware",
    chapterNumber: 2,
    startDate: "20 Aug 2025",
    examDate: "10 Oct 2025",
    price: "69.99",
    completedChallenges: 2,
    totalChallenges: 6,
    exploreLink: "/JavaScript",
  },
  {
    courseTitle: "Node.js Backend",
    chapterTitle: "APIs & Middleware",
    chapterNumber: 2,
    startDate: "20 Aug 2025",
    examDate: "10 Oct 2025",
    price: "69.99",
    completedChallenges: 2,
    totalChallenges: 6,
    exploreLink: "/JavaScript",
  },
  {
    courseTitle: "Node.js Backend",
    chapterTitle: "APIs & Middleware",
    chapterNumber: 2,
    startDate: "20 Aug 2025",
    examDate: "10 Oct 2025",
    price: "69.99",
    completedChallenges: 2,
    totalChallenges: 6,
    exploreLink: "/JavaScript",
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
