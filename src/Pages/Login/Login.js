import axios from "axios";
import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Login = () => {
  //here we use useref - useRef is a hook ,jeta mutable reference object return kore
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  let errorElement;
  let from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }
  if (user) {
    //navigate(from, { replace: true });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    await signInWithEmailAndPassword(email, password);
    const { data } = await axios.post("http://localhost:5000/login", { email });
    localStorage.setItem("accessToken", data.accessToken);
    navigate(from, { replace: true });
  };
  const navigateRegister = (e) => {
    navigate("/register");
  };

  return (
    <div className="container w-50 mx-auto">
      <Helmet>
        <title>Login-Genius Car Repair</title>
      </Helmet>
      <h3>Please Login</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
        {errorElement}
        <p>
          New to genius car?{" "}
          <Link
            to="/register"
            className="text-danger pe-auto text-decoration-none"
            onClick={navigateRegister}
          >
            Please Sign Up
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default Login;
