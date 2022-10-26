import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CourseCard = ({ course }) => {
  console.log(course);
  const { id, img, name, description } = course;

  return (
    <div className="col-md-6 col-lg-4 mb-3 ">
      <Card>
        <Card.Img
          variant="top"
          src={img}
          class="img-fluid rounded-top "
          alt=""
        />

        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary">See Details</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CourseCard;
