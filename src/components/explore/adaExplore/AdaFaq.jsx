import React, { useState } from "react";
import "../faq.css";
import { FaMinus, FaPlus } from "react-icons/fa";

const faqData = {
  General: [
    {
      question: 'What is the "Analysis and Design of Algorithms" course?',
      answer:
        "This is a core computer science course that teaches you how to design efficient, scalable solutions to complex problems. You will learn to analyze the performance of algorithms using concepts like Big O notation and master various design techniques.",
    },
    {
      question: "Who is this course for?",
      answer:
        "It's essential for computer science students, software developers preparing for technical interviews, and anyone interested in competitive programming or improving their problem-solving skills.",
    },
    {
      question: "Why is learning algorithms so important for a tech career?",
      answer:
        "Understanding algorithms is crucial for writing high-quality, efficient code. It is also one of the most heavily tested topics in technical interviews at major tech companies.",
    },
    {
      question: "How long is the course?",
      answer:
        "The course consists of over 30 hours of in-depth content, including lectures, coding exercises, and problem-solving sessions.",
    },
  ],
  "Course Content": [
    {
      question: "What major topics are covered?",
      answer:
        "We cover complexity analysis (Big O), fundamental data structures (arrays, trees, graphs, hash tables), sorting and searching algorithms, and advanced design paradigms like dynamic programming, greedy algorithms, and divide and conquer.",
    },
    {
      question: "Is this course more theoretical or practical?",
      answer:
        "It's a balanced mix of both. We cover the essential theory behind how algorithms work and then apply that knowledge through practical coding examples and problem-solving exercises.",
    },
    {
      question: "Will this course help me with coding interviews?",
      answer:
        "Absolutely. The curriculum is specifically designed to cover the types of algorithm and data structure questions frequently asked in technical interviews at companies like Google, Meta, and Amazon.",
    },
  ],
  Prerequisites: [
    {
      question: "Do I need to know a specific programming language?",
      answer:
        "You should be proficient in at least one modern programming language, such as Python, Java, or C++. The concepts are universal, but the examples and exercises will be provided in these languages.",
    },
    {
      question: "Is prior knowledge of data structures required?",
      answer:
        "A basic familiarity with data structures like arrays and lists is helpful. However, the course covers all necessary data structures, from linked lists to graphs, in detail.",
    },
  ],
  "Enrollment & Exams": [
    {
      question: "How do I enroll in the course?",
      answer:
        'You can enroll directly from the course page by clicking the "Enroll Now" button and completing the payment process.',
    },
    {
      question: "What is the exam format?",
      answer:
        "The course concludes with a proctored online exam that includes multiple-choice questions on theory and hands-on coding challenges to test your problem-solving skills.",
    },
    {
      question: "When can I enroll?",
      answer:
        "Enrollment for the next batch starts on July 15th, 2025. Please refer to the course details page for the most current exam and enrollment dates.",
    },
  ],
};

const AdaFaq = () => {
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

export default AdaFaq;
