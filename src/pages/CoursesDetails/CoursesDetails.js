import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useLoaderData } from "react-router-dom";

const CoursesDetails = () => {
  const course = useLoaderData();
  const { id, img, name, description, features, price } = course;

  return (
    <div className="p-5 mx-md-5">
      <Card className="">
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Img className=" rounded mx-auto" variant="top" src={img} />
          <Card.Text>{description}</Card.Text>
          <Card.Text className="fs-4 fw-bold">Price: ${price}</Card.Text>
          <div>
            <h4>Features:</h4>
            <div className="my-3">
              <ListGroup as="ol" numbered>
                {features.map((feature, idx) => (
                  <ListGroup.Item as="li" key={idx}>
                    {feature}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </div>
          </div>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    </div>
  );
};

export default CoursesDetails;
