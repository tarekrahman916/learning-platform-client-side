import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div
      style={{ width: "400px" }}
      className=" mx-auto bg-dark p-3 mt-3 rounded shadow text-white"
    >
      <h3 className="text-white">Login</h3>
      <hr className="border " />
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <p className="text-danger">Err</p>
        <Button className="w-100 p-2" variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <div className="text-center mt-3">
        <h5>Login With Social Account</h5>
        <hr />
        <div>
          <button className="btn text-white ">
            <FaGoogle className="text-white fs-2" />
          </button>
          <button className="btn text-white ">
            <FaGithub className="text-white fs-2" />
          </button>
        </div>
        <p className="text-xs text-center sm:px-6 dark:text-gray-400">
          Don't have an account?
          <Link className="text-white" to="/register">
            {" "}
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
