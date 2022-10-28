import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Link, useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";
import banner1 from "../../assets/banner1.jpg";

const ref = React.createRef();

const CoursesDetails = () => {
  const course = useLoaderData();
  const { id, img, name, description, features, price } = course;

  return (
    <div className="p-md-5 mx-md-5 ">
      <Card className="">
        <Card.Header className="d-flex justify-content-between mx-lg-5">
          <p>Course Details</p>

          <Pdf targetRef={ref} filename="download.pdf">
            {({ toPdf }) => (
              <button className="btn btn-success" onClick={toPdf}>
                Download PDF
              </button>
            )}
          </Pdf>
        </Card.Header>

        <div className="mx-auto " style={{ width: "90%", height: "100%" }}>
          <Card.Body>
            <Card.Img
              style={{ height: "500px", objectFit: "cover" }}
              className=" rounded mx-auto"
              variant="top"
              src={img}
            />

            <div className="p-2" ref={ref}>
              <Card.Title className="mt-3 fs-2">{name}</Card.Title>
              <Card.Text className="w-75 mt-2">{description}</Card.Text>
              <Card.Text className="fs-4 fw-bold">Price: ${price}</Card.Text>
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
            <Link to={`/checkout/${id}`}>
              <Button variant="primary">Get premium access</Button>
            </Link>
          </Card.Body>
        </div>
      </Card>
    </div>
  );
};

export default CoursesDetails;
