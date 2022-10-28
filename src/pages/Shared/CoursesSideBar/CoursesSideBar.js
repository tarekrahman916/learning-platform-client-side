import React, { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

const CoursesSideBar = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("https://b610-lerning-platform-server-side-ecru.vercel.app/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="mt-5 h-100">
      <ListGroup className="shadow bg-secondary sticky-top">
        {courses.map((course, idx) => (
          <Link key={course.id} to={`/course/${course.id}`}>
            <ListGroup.Item> {course.name} </ListGroup.Item>
          </Link>
        ))}
      </ListGroup>
    </div>
  );
};

export default CoursesSideBar;
