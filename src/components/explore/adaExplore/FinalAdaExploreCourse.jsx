import React from "react";
import { Helmet } from "react-helmet-async";
import AdaFaq from "./AdaFaq";
import AdaExploreCourseDetails from "./AdaExploreCourseDetails";

const FinalAdaExploreCourse = () => {
  const courseJSONLD = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Applied Computer Fundamentals with Career Perspective",
    description:
      "A foundational course designed to teach core concepts of computer systems, including hardware, software, and networking, preparing students for various tech careers.",
    provider: {
      "@type": "Organization",
      name: "EduTech Hub",
      url: "https://edutechhub.in",
    },
    url: "https://edutechhub.in/ComputerFundamentals",
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "Online",
      startDate: "2025-06-10",
    },
    // Add instructor data to your schema for even better SEO
    instructor: {
      "@type": "Person",
      name: "Dr. Alex Chen",
      jobTitle: "Senior Software Engineer & Tech Educator",
    },
  };

  return (
    <>
      <Helmet>
        <title>
          Applied Computer Fundamentals with Career Perspective | EduTech Hub
        </title>
        <meta
          name="description"
          content="Explore our foundational course on Applied Computer Fundamentals. Build the essential skills for a successful career in the tech industry."
        />
        <script type="application/ld+json">
          {JSON.stringify(courseJSONLD)}
        </script>
      </Helmet>

      {/* Main course details */}
      <AdaExploreCourseDetails />

      {/* FAQ Section */}
      <AdaFaq />
    </>
  );
};

export default FinalAdaExploreCourse;
