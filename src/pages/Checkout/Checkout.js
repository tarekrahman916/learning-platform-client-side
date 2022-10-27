import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Checkout = () => {
  const { user } = useContext(AuthContext);
  const course = useLoaderData();
  const { name, price } = course;
  return (
    <div
      style={{ width: "600px" }}
      className=" mx-auto bg-dark p-3 mt-3 rounded shadow text-white"
    >
      <Form>
        <h3>
          Your purses course <span className="fs-1 fw-bold">{name}</span>
        </h3>
        <hr />
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            className="text-black"
            readOnly
            value={user.displayName}
            type="text"
            placeholder={user.displayName}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            className="text-black"
            readOnly
            value={user.email}
            type="text"
            placeholder={user.displayName}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control
            className="text-black"
            readOnly
            value={`$ ${price}`}
            type="text"
            placeholder={price}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Process
        </Button>
      </Form>
    </div>
  );
};

export default Checkout;
