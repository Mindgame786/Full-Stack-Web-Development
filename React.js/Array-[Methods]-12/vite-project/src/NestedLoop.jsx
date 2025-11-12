import React from "react";
import Courses from "./Courses";

// Top 5 Universities data
const universities = [
  {
    name: "Quaid‑i‑Azam University (QAU)",
    city: "Islamabad",
    email: "info@qau.edu.pk",
    courses: [
      { courseName: "BS Computer Science", duration: "4 Years", semFee: "Rs. 120,000/-" },
      { courseName: "MSc Physics", duration: "2 Years", semFee: "Rs. 90,000/-" },
      { courseName: "MBA", duration: "2 Years", semFee: "Rs. 150,000/-" },
    ],
  },
  {
    name: "National University of Sciences & Technology (NUST)",
    city: "Islamabad",
    email: "admissions@nust.edu.pk",
    courses: [
      { courseName: "BS Electrical Engineering", duration: "4 Years", semFee: "Rs. 250,000/-" },
      { courseName: "BS Software Engineering", duration: "4 Years", semFee: "Rs. 230,000/-" },
      { courseName: "MS Data Science", duration: "2 Years", semFee: "Rs. 180,000/-" },
    ],
  },
  {
    name: "COMSATS University Islamabad (CUI)",
    city: "Islamabad",
    email: "admissions@cui.edu.pk",
    courses: [
      { courseName: "BS Computer Science", duration: "4 Years", semFee: "Rs. 200,000/-" },
      { courseName: "BS Information Technology", duration: "4 Years", semFee: "Rs. 190,000/-" },
      { courseName: "MBA Executive", duration: "2 Years", semFee: "Rs. 160,000/-" },
    ],
  },
  {
    name: "Lahore University of Management Sciences (LUMS)",
    city: "Lahore",
    email: "admissions@lums.edu.pk",
    courses: [
      { courseName: "BS Computer Science & Business", duration: "4 Years", semFee: "Rs. 320,000/-" },
      { courseName: "BS Economics", duration: "4 Years", semFee: "Rs. 300,000/-" },
      { courseName: "MBA", duration: "2 Years", semFee: "Rs. 500,000/-" },
    ],
  },
  {
    name: "University of the Punjab (PU)",
    city: "Lahore",
    email: "info@pu.edu.pk",
    courses: [
      { courseName: "BS Software Engineering", duration: "4 Years", semFee: "Rs. 150,000/-" },
      { courseName: "MSc Chemistry", duration: "2 Years", semFee: "Rs. 80,000/-" },
      { courseName: "MBA", duration: "2 Years", semFee: "Rs. 140,000/-" },
    ],
  },
];

// Tailwind style constants
const styles = {
  uniCard: "bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 w-full md:w-[700px]",
  uniName: "text-blue-700 font-bold text-2xl mb-2",
  uniInfo: "text-gray-600 text-lg",
};

export default function NestedLoop() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 flex flex-col items-center space-y-8">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">
        Top 5 Universities of Pakistan
      </h1>

      {universities.map((uni) => (
        <div key={uni.email} className={styles.uniCard}>
          {/* University Info */}
          <div className="border-b border-gray-200 pb-4 mb-4">
            <h2 className={styles.uniName}>{uni.name}</h2>
            <p className={styles.uniInfo}>
              <span className="font-medium text-gray-700">City:</span> {uni.city}
            </p>
            <p className={styles.uniInfo}>
              <span className="font-medium text-gray-700">Email:</span> {uni.email}
            </p>
          </div>

          {/* Courses Section */}
          <h3 className="text-center text-blue-600 font-semibold text-xl mb-4">
            Courses Offered
          </h3>

          <Courses courses={uni.courses} />
        </div>
      ))}
    </div>
  );
}
