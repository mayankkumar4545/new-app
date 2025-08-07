import React, { useState } from "react";
import "../faq.css";
import { FaMinus, FaPlus } from "react-icons/fa";

const faqData = {
  General: [
    {
      question: 'What is "Ethical Hacking"?',
      answer:
        "Ethical hacking, also known as penetration testing, is the practice of legally and professionally finding and fixing security vulnerabilities in computer systems. It's about learning to think like a hacker to defend against real-world attacks.",
    },
    {
      question: "Who is this course for?",
      answer:
        "This course is designed for aspiring cybersecurity professionals, IT administrators, network engineers, and anyone who wants to understand the offensive side of security to build better defenses.",
    },
    {
      question: "Is this course suitable for beginners?",
      answer:
        "This is an advanced course. A solid understanding of computer networks and operating systems (like the content in our Computer Fundamentals course) is highly recommended before starting.",
    },
    {
      question: "How long is the course?",
      answer:
        "The course consists of over 50 hours of content, including extensive hands-on labs in a secure, virtual environment.",
    },
  ],
  "Course Content": [
    {
      question: "What are the main topics covered?",
      answer:
        "We cover the five phases of hacking: reconnaissance, scanning, gaining access, maintaining access, and covering tracks. You will learn to use industry-standard tools like Nmap, Metasploit, and Burp Suite.",
    },
    {
      question: "Will I be performing real hacks?",
      answer:
        "Yes, you will perform real penetration testing techniques in a safe, isolated virtual lab environment. This hands-on experience is crucial for building practical skills.",
    },
    {
      question: "Does this course prepare for certifications like CEH?",
      answer:
        "Yes, the curriculum is closely aligned with the objectives of leading industry certifications like the Certified Ethical Hacker (CEH), providing a strong foundation for your exam preparation.",
    },
  ],
  Prerequisites: [
    {
      question: "What technical skills are required before starting?",
      answer:
        "A strong understanding of TCP/IP networking, familiarity with both Windows and Linux operating systems, and basic knowledge of command-line interfaces are essential for success in this course.",
    },
    {
      question: "What software will I need?",
      answer:
        "You will need a computer capable of running virtualization software like VirtualBox or VMware. We will guide you on setting up your own penetration testing lab using Kali Linux.",
    },
  ],
  "Enrollment & Exams": [
    {
      question: "How do I enroll in the course?",
      answer:
        'You can enroll directly from the course page by clicking the "Enroll Now" button and completing the payment process.',
    },
    {
      question: "How will my skills be evaluated?",
      answer:
        "Your skills will be assessed through a final, practical certification exam where you will be required to successfully compromise a series of vulnerable machines in a simulated network environment.",
    },
    {
      question: "When can I enroll?",
      answer:
        "Enrollment for the next batch starts on August 15th, 2025. Please refer to the course details page for the most current information.",
    },
  ],
};

const EthicalFaq = () => {
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

export default EthicalFaq;
