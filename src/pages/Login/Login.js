import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const Login = () => {
  const [error, setError] = useState("");
  const { signIn, providerLogin, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    setError("");
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((err) => setError(err.message))
      .finally(() => {
        setLoading(false);
      });
  };

  const googleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((err) => setError(err.message))
      .finally(() => {
        setLoading(false);
      });
  };

  const githubSignIn = () => {
    providerLogin(githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((err) => setError(err.message))
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div
      style={{ width: "400px" }}
      className=" mx-auto bg-dark p-3 my-3 rounded shadow text-white"
    >
      <h3 className="text-white">Login</h3>
      <hr className="border " />
      <Form onSubmit={handleSubmit}>
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
        <h5>Login With Social Account</h5>
        <hr />
        <div>
          <button onClick={googleSignIn} className="btn text-white ">
            <FaGoogle className="text-white fs-2" />
          </button>
          <button onClick={githubSignIn} className="btn text-white ">
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
