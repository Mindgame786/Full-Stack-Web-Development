import React from "react";

// Courses component
export default function Courses({ courses }) {
  return (
    <div className="space-y-4">
      {courses.map((course) => (
        <div
          key={course.courseName}
          className="bg-blue-50 border-l-4 border-blue-400 rounded-xl p-5 shadow-sm hover:shadow-lg transition-shadow duration-300"
        >
          {/* Course Name */}
          <h4 className="text-blue-800 font-semibold text-lg mb-2">{course.courseName}</h4>

          {/* Course Details stacked professionally */}
          <p className="text-gray-700 text-sm">
            Duration: <span className="font-medium">{course.duration}</span>
          </p>
          <p className="text-gray-700 text-sm">
            Semester Fee: <span className="font-medium">{course.semFee}</span>
          </p>
        </div>
      ))}
    </div>
  );
}
