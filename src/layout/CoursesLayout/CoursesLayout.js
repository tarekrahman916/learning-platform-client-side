import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import CoursesSideBar from "../../pages/Shared/CoursesSideBar/CoursesSideBar";

const CoursesLayout = () => {
  return (
    <Container>
      <Row>
        <Col lg="3">
          <CoursesSideBar></CoursesSideBar>
        </Col>
        <Col lg="9">
          <Outlet></Outlet>
        </Col>
      </Row>
    </Container>
  );
};

export default CoursesLayout;
