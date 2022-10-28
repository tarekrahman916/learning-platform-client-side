import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Register = () => {
  const [error, setError] = useState("");
  const { createUser, updateUserProfile } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    //validation password

    if (password.length < 8) {
      setError("Password should be at 8 character");
      return;
    }
    if (!/(?=.*[!@#$&*])/.test(password)) {
      setError("Please Provide at least one special character");
      return;
    }
    setError("");

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        handleUpdateUserProfile(name, photoURL);
        form.reset();
      })
      .catch((err) => setError(err.message));
  };

  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((err) => setError(err.message));
  };

  return (
    <div
      style={{ width: "400px" }}
      className=" mx-auto bg-dark p-3 my-3 rounded shadow text-white"
    >
      <h3 className="text-white">Register</h3>
      <hr className="border " />
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="Your full name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhotoURL">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            name="photoURL"
            type="text"
            placeholder="Photo URL"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <p className="text-danger">{error}</p>
        <Button className="w-100 p-2" variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <div className="text-center mt-3">
        <p className="text-xs text-center sm:px-6 dark:text-gray-400">
          Already you have an account?
          <Link className="text-white" to="/login">
            {" "}
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
