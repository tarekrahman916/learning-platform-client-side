import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseCard from "../Shared/CourseCard/CourseCard";

const Courses = () => {
  const courses = useLoaderData();

  return (
    <div>
      <h2>All Courses</h2>
      <div>
        {courses.map((course) => (
          <CourseCard key={course.id} course={course}></CourseCard>
        ))}
      </div>
    </div>
  );
};

export default Courses;
