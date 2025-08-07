import React, { useState } from "react";
import "../faq.css";
import { FaMinus, FaPlus } from "react-icons/fa";

const faqData = {
  General: [
    {
      question: 'What is the "Operating Systems Concepts" course?',
      answer:
        "This is a fundamental computer science course that explores how operating systems manage computer hardware and software resources. It covers core concepts like process management, memory management, and file systems.",
    },
    {
      question: "Who is this course for?",
      answer:
        "This course is essential for computer science students, aspiring software engineers, and anyone who wants a deep understanding of what happens 'under the hood' of a computer.",
    },
    {
      question: "Why is it important to learn about Operating Systems?",
      answer:
        "Understanding OS concepts is crucial for writing efficient, high-performance software, debugging complex issues, and is a key topic in technical interviews for systems-level or backend roles.",
    },
    {
      question: "How long is the course?",
      answer:
        "The course consists of over 28 hours of in-depth lectures, diagrams, and practical examples to help you understand the core concepts.",
    },
  ],
  "Course Content": [
    {
      question: "What are the main topics covered in this course?",
      answer:
        "We cover the pillars of operating systems: process and thread management, CPU scheduling algorithms, memory management techniques like paging and virtual memory, concurrency concepts like mutexes and semaphores, and file system implementation.",
    },
    {
      question: "Will this course cover both Windows and Linux?",
      answer:
        "Yes, the course teaches universal OS concepts and uses both Windows and Linux as practical case studies to illustrate how these theories are implemented in the real world.",
    },
    {
      question: "Is this course more theoretical or practical?",
      answer:
        "It strikes a balance. While a strong theoretical foundation is the primary goal, we use many practical examples and analogies to help you connect the concepts to real-world software and hardware.",
    },
  ],
  Prerequisites: [
    {
      question: "Do I need programming experience to take this course?",
      answer:
        "While not strictly a coding course, a basic understanding of a programming language (like C, Java, or Python) and fundamental data structures will be very helpful for grasping the concepts.",
    },
    {
      question: "What are the software requirements?",
      answer:
        "No special software is required. All concepts are explained with diagrams and examples that you can follow on any standard computer (Windows, macOS, or Linux).",
    },
  ],
  "Enrollment & Exams": [
    {
      question: "How do I enroll in the course?",
      answer:
        'You can enroll directly from the course page by clicking the "Enroll Now" button and completing the payment process.',
    },
    {
      question: "How will my knowledge be tested?",
      answer:
        "Your understanding will be evaluated through a final proctored exam that consists of multiple-choice questions and problem-solving scenarios related to core OS concepts.",
    },
    {
      question: "When can I enroll?",
      answer:
        "Enrollment for the next batch starts on August 1st, 2025. Please refer to the course details page for the most current information.",
    },
  ],
};

const OsFaq = () => {
  const [selectedCategory, setSelectedCategory] = useState("General");
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1 className="faq-title">FaQ</h1>
      <p className="faq-subtitle">Your questions answered here.</p>

      <div className="faq-content">
        <ul className="faq-categories">
          {Object.keys(faqData).map((category) => (
            <li
              key={category}
              className={selectedCategory === category ? "active" : ""}
              onClick={() => {
                setSelectedCategory(category);
                setActiveIndex(null);
              }}
            >
              {category}
            </li>
          ))}
        </ul>

        <div className="faq-questions">
          <h3 className="faq-section-title">
            <span className="section-icon">🗂️</span> {selectedCategory}{" "}
            Questions
          </h3>
          {faqData[selectedCategory].map((item, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "open" : ""}`}
            >
              <div
                className="faq-question"
                onClick={() => toggleQuestion(index)}
              >
                <p>{item.question}</p>
                <span className="toggle-icon">
                  {activeIndex === index ? <FaMinus /> : <FaPlus />}
                </span>
              </div>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OsFaq;
