import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const { id, img, name, description } = course;

  return (
    <div className="col-md-6 col-lg-4 mb-3 ">
      <Card>
        <Card.Img
          style={{ height: "200px" }}
          variant="top"
          src={img}
          className="img-fluid rounded-top "
          alt=""
        />

        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description.slice(0, 100)}...</Card.Text>

          <Link to={`/course/${id.toString()}`}>
            <Button variant="primary">See Details</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CourseCard;
