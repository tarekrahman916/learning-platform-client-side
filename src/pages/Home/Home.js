import React from "react";
import { Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { useLoaderData } from "react-router-dom";
import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
import CourseCard from "../Shared/CourseCard/CourseCard";

const Home = () => {
  const courses = useLoaderData();
  return (
    <div>
      <div>
        <Carousel fade>
          <Carousel.Item>
            <img
              style={{ height: "500px", objectFit: "cover" }}
              className="d-block w-100"
              src={banner1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Learn React</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: "500px", objectFit: "cover" }}
              className="d-block w-100"
              src={banner2}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Learn With Us</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="container">
        <div className="text-center mt-3">
          <h2>Our All Courses</h2>
          <hr className="w-50 mx-auto border border-2 border-dark" />
        </div>
        <div className="row">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course}></CourseCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
