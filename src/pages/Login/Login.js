import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { loginUser, loginUseingGoogle, setUser, setIsLoading,saveUser } = useAuth();

  const location = useLocation();
  const url = location.state?.from || "/";
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    loginUser(data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        history.push(url);
      })
      .catch((error) => {
        const errorMessage = error.message;
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const googlehandeler = () => {
    loginUseingGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
        saveUser(user.email, user.displayName,'PUT')
        history.push(url);
      })
      .catch((error) => {})
      .finally(() => {
        setIsLoading(false);
      });
  };

  console.log(url);
  return (
    <div className="my-5 py-5">
      <div className="w-50 mx-auto border p-5">
        <h4 className="fw-3 text-center">Login</h4>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-danger">This field is required</span>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-danger">This field is required</span>
            )}
          </Form.Group>
          <p>
            Don't Have A Account?<Link to="/register">Register Now</Link>
          </p>
          <Button variant="dark" className="w-100" type="submit">
            Login
          </Button>
          <Button
            variant="danger"
            className="w-100 my-3"
            onClick={googlehandeler}
          >
            Login with Google
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
