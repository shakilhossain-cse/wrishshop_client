import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="my-5 py-5">
      <div className="w-50 mx-auto border p-5">
        <h4 className="fw-3 text-center">Login</h4>

        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <p>
            Don't Have A Account?<Link to="/register">Register Now</Link>
          </p>
          <Button variant="dark" className="w-100" type="submit">
            Login
          </Button>
          <Button variant="danger" className="w-100 my-3" type="submit">
            Login with Google
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
